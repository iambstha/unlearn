import getPost from '@/graphquery/getPost'
import getPosts from '@/graphquery/getPosts'

async function Post({ params }) {
    const post = await getPost(params)
    const posts = await getPosts()
    console.log(posts)
    console.log(posts.map(p => (p.tags.includes('cloudfactory'))))
    return (
        <>
            {
                post ?
                    <div className=' flex flex-col w-full justify-center items-center ' >
                        <div className=' flex flex-col justify-center items-start p-4 md:p-2 w-full md:w-4/5  ' >
                            <h1 className=' text-2xl md:text-4xl lg:text-6xl text-slate-800 font-semibold text-left w-full py-4 ' >{post.title}</h1>
                            <span className=' w-full text-slate-400 text-left text-sm md:text-base lg:text-lg py-2 ' >{post.subtitle}</span>
                            <div className=' w-full py-2 flex justify-start items-start gap-2 ' >{post.tags?.map(tag => (<span className=' flex justify-start border-[1px] rounded-lg text-slate-500 px-2 py-1 border-slate-200 text-sm md:text-base lg:text-lg ' >{tag}</span>))}</div>
                            <span className=' w-full text-slate-400 py-2 text-right text-sm md:text-base lg:text-lg ' ><span className="text-slate-700">Author:</span> {post.author.name}</span>
                            <div dangerouslySetInnerHTML={{ __html: post.content.html }} className=' w-full leading-loose text-left blog_content '  >
                            </div>
                        </div>
                    </div> :
                    <div><span>Blog might be deleted</span></div>
            }
        </>
    )
}

export default Post