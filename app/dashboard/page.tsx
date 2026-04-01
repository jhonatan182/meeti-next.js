import { requireAuth } from "@/src/lib/auth-server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const { isAuth } = await requireAuth();

  if (!isAuth) {
    return redirect("/auth/login");
  }

  return <div>DashboardPage</div>;
}
