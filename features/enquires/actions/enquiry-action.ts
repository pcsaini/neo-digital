"use server";

import {prisma} from "@/lib/prisma";
import {render} from '@react-email/components';
import EnquiryEmail from "@/emails/enquiry-email";
import nodemailer from 'nodemailer';

export async function createEnquiry(data: any) {
    try {
        const service = await prisma.services.findUnique({
            where: {id: data.service_id},
        });

        if (!service) {
            return {success: false, error: "Service not found"};
        }

        const enquiry = await prisma.enquiry.create({
            data: {
                name: data.name,
                email: data.email,
                phone: data.phone,
                message: data.message,
                service_id: data.service_id,
            },
        });
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-expect-error
            const emailHtml = await render(EnquiryEmail({
                name: data.name, email: data.email, serviceName: data.service?.name, message: data?.message
            }));

            const transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user: 'jhap0384@gmail.com',
                    pass: 'uffczpgnvqrzbbuy',
                },
            });

            await transporter.sendMail({
                from: 'Enquiries <enquiries@yourdomain.com>',
                to: 'pk841442@gmail.com',
                subject: `New Enquiry: ${service.name}`,
                html: emailHtml,
                replyTo: data.email,
            });
        } catch (emailError) {
            console.error('Error sending email:', emailError);
        }

        return {success: true, data: enquiry};
    } catch (error) {
        console.error("Error creating enquiry:", error);
        return {success: false, error: "Failed to create enquiry"};
    }
}

export async function enquiryGetAll() {
    try {
        const enquiries = await prisma.enquiry.findMany({
            include: {
                service: true,
            },
        });
        return {success: true, data: enquiries};
    } catch (error) {
        console.error("Error fetching enquiries:", error);
        return {success: false, error: "Failed to fetch enquiries"};
    }
}
