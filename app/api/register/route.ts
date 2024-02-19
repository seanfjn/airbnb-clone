import bcrypt from "bcrypt"
import { NextResponse } from "next/server" 
import prisma from "@/app/libs/prismadb"

export async function POST(
    request: Request
) {
    //Extract all the fields from the body being email, name and password
    const body = await request.json();
    const {
        email,
        name, 
        password
    } = body;

    //This is how we can hash the password
    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
        data:{
            email,
            name, 
            hashedPassword
        }
    });

    return NextResponse.json(user);
}