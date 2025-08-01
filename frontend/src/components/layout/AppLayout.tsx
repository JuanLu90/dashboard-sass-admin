import { cookies } from "next/headers";
import Wrapper from "@/components/layout/Wrapper";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  const isLogged = Boolean(token);

  return <Wrapper isLogged={isLogged}>{children}</Wrapper>;
}
