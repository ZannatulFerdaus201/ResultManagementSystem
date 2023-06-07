import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import {StatusCodes} from "http-status-codes"

export async function GET(){
    try {
        const users=await prisma.user.findMany({
            where:{
                role:"STUDENT"
            },
            select:{
                id:true,
                studentId:true,
                name:true,
                results:{
                    select:{
                        courseCode:true,
                        courseName:true,
                        gpa:true,
                        semester:true
                    }
                }
            }
        })
        return NextResponse.json(users, {status:StatusCodes.OK})
        
    } catch (error:any) {
        console.log(error)
        
    }
}