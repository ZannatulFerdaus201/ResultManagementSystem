
import getSession from "@/app/actions/getSession";
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server";


export async function GET() {
    const session = await getSession();
    if(!session?.user?.email) return NextResponse.redirect("/login")




    try {
       const user =await prisma.user.findUnique({
            where:{
                email:session.user.email
            }
        
       })
       if(!user) return null
         return NextResponse.json(user)
        
        
    } catch (error:any) {
        return null
        
    }
}