import { AuthCheck } from "@/components";

export default function Layout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return <AuthCheck>{children}</AuthCheck>
}
