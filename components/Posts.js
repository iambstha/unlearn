import getPosts from "@/graphquery/getPosts"
import Link from "next/link"

export default async function Posts() {
    const posts = await getPosts()
    return (
        <main className=' flex flex-col w-full justify-center items-center mt-2 '>
            <h2 className=' text-2xl text-slate-600 font-semibold w-full text-center ' >All Posts</h2>
            <ul className="  w-2/3 mt-2 ">
                {posts.map(post => (
                    <li key={post.id} className="border-b-[1px] border-slate-100 w-full hover:bg-slate-50 py-2">
                        <Link href={`posts/${post.slug}`} className=" flex flex-col w-full" >
                            <p className=" text-lg font-semibold text-slate-800  " >{post.title}</p>
                            <p className=" flex justify-between items-center "><span className=" text-md text-slate-500  " >{post.subtitle}</span></p>
                            <p className=" flex justify-between items-center pt-2" ><span className="  text-sm font-semibold text-slate-400    " >Author: {post.author.name}</span> <span className=" text-sm text-slate-400  ">{post.createdAt}</span></p>
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
    )
}
