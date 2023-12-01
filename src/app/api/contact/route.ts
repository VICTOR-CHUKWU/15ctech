import { NextRequest, NextResponse } from 'next/server';

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
    console.log(body, 'body');

    const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    })
    const data = await res.json();
    return NextResponse.json(data)

}