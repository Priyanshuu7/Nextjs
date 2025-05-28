import {prisma} from "./utils/db";

async function getData() {
  const data = await prisma.blogPost.findMany({
    select: {
      title: true,
      content: true,
      imageUrl: true,
      authorImage: true,
      authorName: true,
      id: true,
      createdAt: true,
      authorId: true,
      updatedAt: true,
    },
  });
  
    return data;
}

export default async function Home() {

    const data = await getData();
    return (
        <div className="py-6">
            <h1 className="text-3xl font-bold tracking-tight mb-8">Latest Posts
            </h1>
        </div>
    )
}