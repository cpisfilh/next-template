import { UsersTable } from "@/modules/users/components/UsersTable";

type Props = {
  searchParams: Promise<{
    search?: string;
  }>;
};

const UsersPage = async ({ searchParams }: Props) => {
  const { search = "" } = await searchParams;
  return (
    <div className="h-full">
      <UsersTable search={search} />
    </div>
  );
};

export default UsersPage;
