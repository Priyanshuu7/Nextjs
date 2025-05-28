import Link from "next/link";
import {Button, buttonVariants} from "../ui/button";
import {RegisterLink, LoginLink, LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";
import {getKindeServerSession} from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Navbar() {
    const {getUser} = getKindeServerSession();
    const user = await getUser()

    return (
        <nav className="py-5 flex justify-between items-center">
            <div className="flex items-center gap-6">
                <Link href="/">
                    <h1 className="text-3xl font-semibold">
                        Blog
                        <span className="text-blue-500">App</span>
                    </h1>
                </Link>

                <div className="hidden sm:flex items-center gap-6">
                    <Link
                        className="text-sm font-medium hover:text-blue-500 transition-colors"
                        href="/">Home</Link>
                    <Link
                        className="text-sm font-medium hover:text-blue-500 transition-colors"
                        href="/dashboard">Dashboard</Link>
                    {/* <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/contact">Contact</Link> */}
                </div>
            </div>
            {user
                ? (
                    <div className="flex items-center gap-4">
                        <p>{user.given_name}</p>
                        <LogoutLink className={buttonVariants({variant: "secondary"})}>
                            Logout
                        </LogoutLink>
                    </div>
                )
                : (

                    <div className="flex items-center gap-4">
                        <LoginLink className={buttonVariants()}>Login</LoginLink>
                        <RegisterLink className={buttonVariants({variant: "secondary"})}>Signup</RegisterLink>
                    </div>
                )
}
        </nav>
    );
}
