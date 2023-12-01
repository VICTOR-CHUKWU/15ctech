import { NextRequest, NextResponse } from 'next/server';
import Message from '../../../../models/contact';
import connectMongoDB from '../../../../libs/mongodb';

// interface Message {
//     id: number;
//     subject: string;
//     message: string,
//     firstName: string,
//     lastName: string,
//     email: string,
//     phoneNumber: string
// }

export async function POST(request: NextRequest) {
    const body = await request.json()
    await connectMongoDB();
    await Message.create({ ...body });
    return NextResponse.json({ message: "Message Sent" }, { status: 201 });

}