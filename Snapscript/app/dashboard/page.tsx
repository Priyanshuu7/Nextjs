import { buttonVariants } from "@/components/ui/button";
import  Link  from "next/link";
import { prisma } from "../utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { BlogPostCard } from "@/components/general/BlogPostCard";

async function getData(userId: String){

    await new Promise ((resolve)=> setTimeout(resolve,2000));
    const data = await prisma.blogPost.findMany({
        where:{
            authorId : userId as string
        },
         orderBy:{
            createdAt:"desc"
         }
    })
    return data;
}


// defltu fun//
export default async function DashboardRoute() {
    const { getUser}= getKindeServerSession();
    const user = await getUser(); 
    const data = await getData(user?.id as string)


    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-medium">
                    Your Personal Blogs
                </h2>

                <Link  href="/dashboard/create" className = {buttonVariants()}>Add Blogs</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    data.map((item)=>(
                        <BlogPostCard data={item} key={item.id}/>  
                    ))
                }

            </div>

        </div>

    )
}