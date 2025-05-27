import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server"
import {redirect} from "next/navigation";

export default async function DashboardRoute() {
    const {getUser} = getKindeServerSession();
    const user = await getUser();

    if (!user) {
        return redirect("/api/auth/register");
    }

    return (
        <h1>
            This is User DashBoard
        </h1>
    )
}