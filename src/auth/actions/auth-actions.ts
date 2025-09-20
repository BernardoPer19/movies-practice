"use server"
import { User } from "@prisma/client";
import bcrypt from "bcryptjs";
import prisma from '@/libs/prisma'
import { signOut } from "next-auth/react";


export const signInEmailPassword = async (email: string, password: string) => {
  if (!email || !password) return null;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user) {
    const dbUser = await createUser(email, password);
    return dbUser;
  }

  if (!bcrypt.compareSync(password, user.password ?? "")) {
    return null;
  }

  return user;
};

const createUser = async (email: string, password: string): Promise<User> => {
  const user = await prisma.user.create({
    data: {
      email: email,
      password: bcrypt.hashSync(password),
      name: email.split("@")[0],
    },
  });

  return user;
};
