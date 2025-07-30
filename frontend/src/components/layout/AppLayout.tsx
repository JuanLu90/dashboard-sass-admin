import { cookies } from "next/headers";
import Wrapper from "@/components/layout/Wrapper";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const token = cookies().get("token")?.value;

  const isLogged = Boolean(token);

  return <Wrapper isLogged={isLogged}>{children}</Wrapper>;
}
