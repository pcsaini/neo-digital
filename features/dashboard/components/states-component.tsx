"use client";

import {useEffect, useState} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {Badge} from "@/components/ui/badge";
import {Avatar, AvatarFallback} from "@/components/ui/avatar";
import {Tabs, TabsContent} from "@/components/ui/tabs";
import {Activity, ArrowUpRight, CalendarDays, Eye, Mail, PhoneCall} from "lucide-react";
import {format} from "date-fns";
import {getDashboardData} from "@/features/dashboard/actions/dashboard-actions";
import {ChartEnquiry} from "@/features/dashboard/components/chart-enquiry";
import {ChartVisitor} from "@/features/dashboard/components/chart-visitors";

export default function Dashboard() {
    const [isLoading, setIsLoading] = useState(true);
    const [dashboardData, setDashboardData] = useState({
        recentEnquiries: [], stats: {
            totalEnquiries: 0, totalVisits: 0, conversionRate: 0, popularService: "",
        }, chartData: {
            enquiries: [], visits: []
        }
    });

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const data = await getDashboardData();
                setDashboardData(data as any);
            } catch (error) {
                console.error("Error fetching dashboard data:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, []);


    return (<div className="flex-1 space-y-6 p-6 md:p-8">
        <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
            <div className="flex items-center space-x-2">
                <Badge variant="outline" className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5"/>
                    <span>{format(new Date(), "MMMM d, yyyy")}</span>
                </Badge>
            </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Total Enquiries</CardTitle>
                    <Mail className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.stats.totalEnquiries}</div>

                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Website Visits</CardTitle>
                    <Eye className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.stats.totalVisits}</div>

                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{dashboardData.stats.conversionRate}%</div>

                </CardContent>
            </Card>

            <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium">Popular Service</CardTitle>
                    <Activity className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold truncate">{dashboardData.stats.popularService}</div>

                </CardContent>
            </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-4">
            <TabsContent value="overview" className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ChartVisitor chartData={dashboardData?.chartData?.visits}/>
                    <ChartEnquiry chartData={dashboardData?.chartData?.enquiries}/>

                </div>
            </TabsContent>

        </Tabs>

        <Card>
            <CardHeader>
                <CardTitle>Recent Enquiries</CardTitle>
                <CardDescription>
                    You have received {dashboardData.recentEnquiries.length} enquiries recently
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableCaption>Top 5 most recent enquiries</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-[250px]">Customer</TableHead>
                            <TableHead>Service</TableHead>
                            <TableHead>Contact</TableHead>
                            <TableHead>Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {isLoading ? (<TableRow>
                            <TableCell colSpan={5} className="text-center h-32">Loading enquiries...</TableCell>
                        </TableRow>) : dashboardData.recentEnquiries.length === 0 ? (<TableRow>
                            <TableCell colSpan={5} className="text-center h-32">No enquiries found</TableCell>
                        </TableRow>) : (dashboardData.recentEnquiries.map((enquiry: any) => (<TableRow key={enquiry.id}>
                            <TableCell className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-primary/10 text-primary">
                                        {enquiry.name.charAt(0)}
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="font-medium">{enquiry.name}</div>
                                    <div className="text-xs text-muted-foreground truncate max-w-[180px]">
                                        {enquiry.message}
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>
                                <Badge variant="outline">{enquiry.service?.name || "General"}</Badge>
                            </TableCell>
                            <TableCell>
                                <div className="flex flex-col gap-1">
                                    <div className="flex items-center text-xs text-muted-foreground">
                                        <Mail className="mr-1 h-3 w-3"/>
                                        {enquiry.email || "N/A"}
                                    </div>
                                    <div className="flex items-center text-xs text-muted-foreground">
                                        <PhoneCall className="mr-1 h-3 w-3"/>
                                        {enquiry.phone || "N/A"}
                                    </div>
                                </div>
                            </TableCell>
                            <TableCell>{format(new Date(enquiry.createdAt), "MMM d, yyyy")}</TableCell>
                        </TableRow>)))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>);
}