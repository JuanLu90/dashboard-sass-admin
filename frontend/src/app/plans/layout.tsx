import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function PlansLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return <>{children}</>;
}
