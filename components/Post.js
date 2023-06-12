import getPost from '@/graphquery/getPost'
import React from 'react'

async function Post({ params }) {
    const post = await getPost(params)
    console.log(post)
    const contentRichText = post.content.html
    console.log(contentRichText)
    return (
        <>
            <div className=' flex flex-col justify-center items-center p-2 mt-4  ' >
                <h1 className=' text-6xl text-slate-800 font-semibold text-left w-2/3 ' >{post.title}</h1>
                <span className='  w-2/3 text-slate-400 text-left ' >{post.subtitle}</span>
                <div dangerouslySetInnerHTML={{ __html: contentRichText }} className='  w-2/3 text-left '  >
                </div>
            </div>
        </>
    )
}

export default Post