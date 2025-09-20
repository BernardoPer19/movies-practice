import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import prisma from '@/libs/prisma';

export const getUserSessionServer = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) return null;

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      favorites: true,
      comments: true,
      savedMovies: true,
    },
  });

  return user;
};
