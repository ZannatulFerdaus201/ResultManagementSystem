import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import {StatusCodes} from "http-status-codes"

export async function POST(req:Request) {
    try {
        const body=await req.json()
        const {name,courseCode,credit}=body
        if(!name||!courseCode||!credit) throw new Error("Please enter all fields")
        const course=await prisma.course.create({
            data:{
                name,
                credit,
                courseCode
              
                
            }
        })
        return NextResponse.json(course, {status:StatusCodes.CREATED})
        
    } catch (error:any) {
        console.log(error)
        
    }
        
    }
    export async function GET(req:Request) {
        try {
            const courses=await prisma.course.findMany()
            return NextResponse.json(courses, {status:StatusCodes.OK})
            
        } catch (error:any) {
            console.log(error)
            
        }
    }
