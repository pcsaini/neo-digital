import { NextResponse } from 'next/server';
import {trackVisitor} from "@/features/dashboard/actions/dashboard-actions";

export async function POST(req: Request) {
    const { ipAddress, userAgent, route } = await req.json();

    await trackVisitor({ ipAddress, userAgent, route });

    return NextResponse.json({ success: true });
}
