import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";
import {StatusCodes} from "http-status-codes"
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(req:Request){
  try {
    const body=await req.json()
    const {courseCode,StudentId,semester,gpa,courseName,credit}=body
    const result=await prisma.result.create({
        data:{
            courseCode,
            courseName,
            gpa,
            StudentId,
            semester,
            credit:credit as string

        }
    })
    return NextResponse.json(result)
    
  } catch (error:any) {
    console.log(error.message)
    
  }
}
export async function GET(){
    try {
      const user=await getCurrentUser()
      if(!user) return null
      const results=await prisma.result.findMany({
        where:{
          StudentId:user.studentId
        }
      })
      return NextResponse.json(results)
      
    } catch (error) {
      console.log(error)
      
    }
  }

    
              
          
   
       
    
