import getPost from '@/graphquery/getPost'

async function Post({ params }) {
    const post = await getPost(params)
    return (
        <>
            {
                post ? 
                <div className=' flex w-full justify-center items-center ' >
                <div className=' flex flex-col justify-center items-start p-2 w-4/5 ' >
                    <h1 className=' text-6xl text-slate-800 font-semibold text-left w-full py-4 ' >{post.title}</h1>
                    <span className='  w-2/3 text-slate-400 text-left text-lg py-2 ' >{post.subtitle}</span>
                    <div className=' py-2 flex justify-start items-start gap-2 ' >{post.tags?.map(tag => (<span className=' flex justify-start border-[1px] rounded-lg text-slate-500 px-2 py-1 border-slate-200 ' >{tag}</span>))}</div>
                    <span className=' w-2/3 text-slate-400 py-2 text-right ' ><span className="text-slate-700">Author:</span> {post.author.name}</span>
                    <div dangerouslySetInnerHTML={{ __html: post.content.html }} className=' leading-loose w-2/3 text-left blog_content '  >
                    </div>
                </div>
            </div> :
            <div><span>Blog might be deleted</span></div>
            }
        </>
    )
}

export default Post