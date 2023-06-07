import getCurrentUser from "./getCurrentUser"
import prisma from "@/app/libs/prismadb"
const getResult=async(semester:string)=>{
    const currentUser=await getCurrentUser()
    const results = await prisma.result.findMany({
        where:{
            StudentId:currentUser?.studentId,
            semester:semester
        }
       
    })
    return results

}
export default getResult
