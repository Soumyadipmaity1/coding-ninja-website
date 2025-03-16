import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const data = await req.json();
        console.log("Form Data:", data);
        return NextResponse.json({ message: "Form submitted successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Error processing request" }, { status: 500 });
    }
}
