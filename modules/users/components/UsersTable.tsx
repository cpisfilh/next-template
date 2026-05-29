import { columns } from "../config/columns";
import { DataTable } from "../../../shared/components/table/data-table";
import { getUsers } from "../services/users.service";

interface Props {
  search?: string;
}

export const UsersTable = async ({ search = "" }: Props) => {
  const data = await getUsers({ search });
  return (
    <div className="flex flex-col h-full border-green-500">
      <h2 className="scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        Usuarios
      </h2>
      <div className="flex-1 min-h-0">
          <DataTable columns={columns} data={data} />
        </div>
    </div>
  );
};
