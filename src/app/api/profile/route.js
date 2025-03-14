import { NextResponse } from "next/server";
import prisma from "@/lib/db";
import { checkLoggedIn } from "@/lib/auth";

export async function GET(request) {
    const loggedInData = await checkLoggedIn();
    const searchParams = request.nextUrl.searchParams
    const userId = searchParams.get('userId');
  
    if (userId != null){
      const userProfile = await prisma.User.findMany({
        where: {
          id: {
            equals: parseInt(userId)
          }
        }
      });
      return NextResponse.json(userProfile);
    }
    const userData = await prisma.user.findUnique({
    where: {
        id: loggedInData.user?.id
    }
    });
    return NextResponse.json(userData);
  }

export async function POST(request) {

}