import bcrypt from 'bcrypt';
import NextAuth,{AuthOptions} from 'next-auth';
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/app/libs/prismadb"



export const authOptions:AuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
    
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "email", type: "email" },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if(!credentials?.email|| !credentials?.password){
                    throw new Error("Please enter your email and password")
                }
                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    },
                    select:{
                        id:true,
                        email:true,
                        name:true,
                        password:true,
                    }
                  
                })
                if(!user|| !user.password){
                    throw new Error("You are not registered")
                }
                const isCorrectPassword = await bcrypt.compare(
                    credentials.password,
                    user.password
                  );
                    if (!isCorrectPassword) {
                        throw new Error("Invalid password");
                    }
                    return user;

                   
            
            },
        })
    ],
    debug: process.env.NODE_ENV === 'development',
  session: {
    strategy: "jwt",
    maxAge: 3600
  },
  secret: process.env.NEXTAUTH_SECRET,
   
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };