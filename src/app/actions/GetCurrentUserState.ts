import { getServerSession } from "next-auth";
import authOptions from "@/utils/authOptions";
import prisma from "@/lib/dbClient";

export const getSession = async () => {
  return await getServerSession(authOptions);
};

const getCurrentUser = async () => {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }
    const user = await prisma.user.findUnique({
      where: {
        email: session?.user?.email,
      },
      select:{
        id : true ,
        name : true ,
        email : true ,
        emailVerified : true ,
        image : true ,
        hashedPassword : false ,
        createdAt : true ,
        updatedAt : true ,
        favoriteIds : true
      }
    });
    

    if (!user) {
      return null;
    }
    return user;
  } catch (error) {
    return null;
  }
};
export default getCurrentUser;
