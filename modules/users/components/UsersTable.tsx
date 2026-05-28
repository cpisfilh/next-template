import { columns } from "../config/columns";
import { DataTable } from "../../../shared/components/table/data-table";
import { UserRow } from "../types/user.types";
import prisma  from "@/lib/prisma";

async function getData(): Promise<UserRow[]> {
  const users = await prisma.user.findMany()
  return users.map((user) => ({
    id: user.id,
    name: user.name,
    email: user.email,
    image: user.image,
    createdAt: user.createdAt.toISOString(),
    updatedAt: user.updatedAt.toISOString(),
  }))
}

export const UsersTable = async () => {
  const data = await getData()
  return (
    <div>
      <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Usuarios
          </h2>
      <DataTable columns={columns} data={data} />
    </div>
  );
};
