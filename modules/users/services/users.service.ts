import prisma from "@/lib/prisma";
import { UserRow } from "../types/user.types";

interface GetUsersParams {
  search?: string;
}

export async function getUsers({
  search = "",
}: GetUsersParams = {}): Promise<UserRow[]> {
  const users = await prisma.user.findMany({
    where: search
      ? {
          OR: [
            {
              name: {
                contains: search,
                mode: "insensitive",
              },
            },
            {
              email: {
                contains: search,
                mode: "insensitive",
              },
            },
          ],
        }
      : undefined,
  });

  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
  }));
}

export async function getUserById(id: string) {
  return prisma.user.findUnique({
    where: {
      id,
    },
  });
}
