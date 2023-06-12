import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' border-t-[1px] border-slate-200 mt-6 p-4 h-32 ' >
        <div className=' flex w-full justify-center items-center h-full '>
            <ul className=' flex justify-center items-center gap-x-10 text-slate-950 font-extralight '>
                <li><Link className=' hover:underline ' href='/'>Home</Link></li>
                <li><Link className=' hover:underline ' href='/posts'>All Posts</Link></li>
                <li><Link className=' hover:underline ' href='/authors'>Authors</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer