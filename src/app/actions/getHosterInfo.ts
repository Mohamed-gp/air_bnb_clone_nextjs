
import prisma from "@/lib/dbClient";

const getHosterInfo = async (data: { userId: string }) => {
  return await prisma.user.findUnique({
    where: {
      id: data.userId,
    },
    select: {
      hashedPassword: false,
      name: true,
      image: true,
      reservations: true,
      id: true
    },
  });
};


export default getHosterInfo;