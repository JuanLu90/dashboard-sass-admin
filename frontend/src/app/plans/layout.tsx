import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default function PlansLayout({ children }: { children: React.ReactNode }) {
  const token = cookies().get("token")?.value;

  if (!token) {
    redirect("/login");
  }

  return <>{children}</>;
}
