import TestRegister from "@/modules/auth/components/TestRegister";

export default async function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <TestRegister />
    </div>
  );
}
