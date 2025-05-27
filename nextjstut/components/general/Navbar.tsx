import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
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
                    <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/">Home</Link>
                    <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/dashboard">Dashboard</Link>
                    {/* <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href="/contact">Contact</Link> */}
                </div>
            </div>

            <div className="flex items-center gap-4">
                <Button>Login</Button>
                <Button variant={"secondary"}>Signup</Button>

            </div>
        </nav>
    );
}
