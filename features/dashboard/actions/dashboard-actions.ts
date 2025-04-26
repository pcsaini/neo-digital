"use server";

import {prisma} from "@/lib/prisma";

export async function getDashboardData() {
    try {
        const recentEnquiries = await prisma.enquiry.findMany({
            take: 5,
            orderBy: { createdAt: "desc" },
            include: {
                service: {
                    select: {
                        id: true,
                        name: true,
                    },
                },
            },
        });

        const totalEnquiries = await prisma.enquiry.count();

        const serviceStats = await prisma.$queryRaw`
      SELECT service_id, COUNT(*) as count, s.name
      FROM "enquiry" e
      JOIN "services" s ON e.service_id = s.id
      WHERE service_id IS NOT NULL
      GROUP BY service_id, s.name
      ORDER BY count DESC
      LIMIT 1
    ` as any;

        const totalVisits = await prisma.visitor.count();

        const conversionRate = totalVisits > 0 ? ((totalEnquiries / totalVisits) * 100).toFixed(1) : 0;

        const today = new Date();
        const sevenDaysAgo = new Date(today);
        sevenDaysAgo.setDate(today.getDate() - 6);

        const last7Days = Array.from({ length: 7 }, (_, i) => {
            const date = new Date(today);
            date.setDate(date.getDate() - (6 - i));
            return {
                date,
                dayName: date.toLocaleDateString("en-US", { weekday: "short" }),
                dateString: date.toISOString().split("T")[0],
            };
        });

        const enquiriesPerDay = await Promise.all(
            last7Days.map(async (day) => {
                const start = new Date(day.date);
                start.setHours(0, 0, 0, 0);
                const end = new Date(day.date);
                end.setHours(23, 59, 59, 999);

                const count = await prisma.enquiry.count({
                    where: {
                        createdAt: { gte: start, lte: end },
                    },
                });

                return {
                    date: day.dateString,
                    count,
                };
            })
        );

        const visitorsPerDay = await Promise.all(
            last7Days.map(async (day) => {
                const start = new Date(day.date);
                start.setHours(0, 0, 0, 0);
                const end = new Date(day.date);
                end.setHours(23, 59, 59, 999);

                const visitors = await prisma.visitor.findMany({
                    where: {
                        visitedAt: { gte: start, lte: end },
                    },
                });

                let desktop = 0;
                let mobile = 0;

                visitors.forEach((v: any) => {
                    const ua = v.userAgent.toLowerCase();
                    if (/mobile|android|iphone|ipad/.test(ua)) {
                        mobile++;
                    } else {
                        desktop++;
                    }
                });

                return {
                    date: day.dateString,
                    desktop,
                    mobile,
                };
            })
        );

        return {
            recentEnquiries,
            stats: {
                totalEnquiries,
                totalVisits,
                conversionRate: parseFloat(conversionRate as string),
                popularService: serviceStats[0]?.name || "None",
            },
            chartData: {
                enquiries: enquiriesPerDay,
                visits: visitorsPerDay,
            },
        };
    } catch (error) {
        console.error("Error fetching dashboard data:", error);
        throw new Error("Failed to fetch dashboard data");
    }
}

export async function trackVisitor({
                                       ipAddress, userAgent, route,
                                   }: {
    ipAddress: string; userAgent: string; route: string;
}) {
    try {
        await prisma.visitor.create({
            data: {
                ipAddress, userAgent, route,
            },
        });
    } catch (error) {
        console.error('Failed to track visitor:', error);
    }
}
