import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
    return (
        <div className=' border-b-[1px] border-b-slate-400 relative bg-white h-28 md:h-36 lg:h-36 z-10 '>
            <div className=' flex flex-col justify-center items-center w-full fixed z-20 h-28 md:h-36 lg:h-36 bg-white border-b-[1px] border-b-slate-200 bg-opacity-[98%]  '>
                <div className=' flex justify-between w-full items-center p-2 ' >
                    <div className='hidden w-1/2 md:w-1/3 lg:w-1/3 md:flex lg:flex justify-center md:justify-start ' >
                        <ul className=' flex  text-xs items-center '>
                            <li className=' p-2 text-gray-500 font-semibold ' ><Link href=''>Events</Link></li>
                            <li className=' p-2 text-gray-500 font-semibold ' ><Link href=''>Data/Infographics</Link></li>
                        </ul>
                    </div>
                    <div className=' w-full md:w-1/3 lg:w-1/3  flex justify-center ' >
                        <ul className=' flex  text-xs items-center justify-center w-full '>
                            <li className=' p-2 text-gray-500 ' ><Link className=' hover:underline ' href=''>Legal</Link></li>
                            <li className=' p-2 text-gray-500 ' ><Link className=' hover:underline ' href=''>Economics/Money</Link></li>
                            <li className=' p-2 text-gray-500 ' ><Link className=' hover:underline ' href=''>Food</Link></li>
                            <li className=' p-2 text-gray-500 ' ><Link className=' hover:underline ' href=''>Business</Link></li>
                            <li className=' p-2 text-gray-500 ' ><Link className=' hover:underline ' href=''>Lifestyle</Link></li>
                        </ul>
                    </div>
                    <div className='hidden md:flex md:w-1/3 lg:w-1/3 justify-end ' >
                        <ul className=' flex  text-sm items-center '>
                            <li><Link className=' ml-2 border-[1px] p-2 rounded-md border-slate-700 bg-slate-700 font-bold text-white hover:bg-slate-500 hover:border-slate-500 transition-colors ' href='/sitemap.xml'>Sitemap</Link></li>
                            {/* <li><Link className=' ml-2 border-[1px] p-2 border-slate-700 bg-slate-700 font-bold text-white hover:bg-slate-500 hover:border-slate-500 transition-colors ' href=''>Add Category</Link></li> */}
                        </ul>
                    </div>
                </div>
                <div className=' w-96 p-2 flex justify-center items-center '>
                    <Link href='/' className=' font-serif ' >
                        {/* <svg viewBox="0 0 184 25" fill="#000"><path d="M14.57,2.57C14.57,.55,12.65-.06,11.04,.01V.19c.96,.07,1.7,.46,1.7,1.11,0,.45-.32,1.01-1.28,1.01-.76,0-2.02-.45-3.2-.84-1.3-.45-2.54-.87-3.57-.87-2.02,0-3.55,1.5-3.55,3.36,0,1.5,1.16,2.02,1.63,2.21l.03-.07c-.3-.2-.49-.42-.49-1.06,0-.54,.39-1.26,1.43-1.26,.94,0,2.17,.42,3.8,.88,1.4,.39,2.91,.76,3.75,.87v3.28l-1.58,1.3,1.58,1.36v4.49c-.81,.46-1.75,.61-2.56,.61-1.5,0-2.88-.42-4.02-1.68l4.26-2.07V5.73l-5.2,2.32c.54-1.38,1.55-2.41,2.66-3.08l-.03-.08C3.31,5.73,.5,8.56,.5,12.06c0,4.19,3.35,7.3,7.22,7.3,4.19,0,6.65-3.28,6.61-6.75h-.08c-.61,1.33-1.63,2.59-2.78,3.25v-4.38l1.65-1.33-1.65-1.33v-3.28c1.53,0,3.11-1.01,3.11-2.96M5.8,14.13l-1.21,.61c-.74-.96-1.23-2.32-1.23-4.07,0-.72,.08-1.7,.32-2.39l2.14-.96-.03,6.8h0Zm19.47-5.76l-.81,.64-2.47-2.2-2.86,2.21V.48l-3.89,2.69c.45,.15,.99,.39,.99,1.43v11.81l-1.33,1.01,.12,.12,.67-.46,2.32,2.12,3.11-2.07-.1-.15-.79,.52-1.08-1.08v-7.12l.74-.54,1.7,1.48v6.19c0,3.92-.87,4.73-2.63,5.37v.1c2.93,.12,5.57-.87,5.57-5.89v-6.75l.88-.72-.12-.15h0Zm5.22,10.8l4.51-3.62-.12-.17-2.36,1.87-2.71-2.14v-1.33l4.68-3.3-2.36-3.67-5.2,2.86v6.8l-1.01,.79,.12,.15,.96-.76,3.5,2.54h-.01Zm-.69-5.67v-5.15l2.27,3.55-2.27,1.6ZM53.65,1.61c0-.32-.08-.59-.2-.96h-.07c-.32,.87-.67,1.33-1.68,1.33-.88,0-1.58-.54-1.95-.94,0,.03-2.96,3.42-2.96,3.42l.15,.12,.84-.96c.64,.49,1.21,1.06,2.63,1.08V13.34l-6.06-10.5c-.47-.79-1.28-1.97-2.66-1.97-1.63,0-2.86,1.4-2.66,3.77h.1c.12-.59,.47-1.33,1.18-1.33,.57,0,1.03,.54,1.3,1.03v3.38c-1.87,0-2.93,.87-2.93,2.34,0,.61,.45,1.94,1.72,2.17v-.07c-.17-.17-.34-.32-.34-.67,0-.57,.42-.88,1.18-.88,.12,0,.3,.03,.37,.05v4.38c-2.2,.03-3.89,1.23-3.89,3.31s1.7,2.88,3.47,2.78v-.07c-1.11-.12-1.68-.69-1.68-1.5,0-.88,.64-1.36,1.45-1.36s1.43,.52,1.95,1.11l2.96-3.33-.12-.12-.76,.87c-1.14-1.01-1.87-1.48-3.18-1.68V4.67l8.36,14.57h.45V4.72c1.6-.1,3.03-1.3,3.03-3.11m2.81,17.54l4.51-3.62-.12-.17-2.36,1.87-2.71-2.14v-1.33l4.68-3.3-2.36-3.67-5.2,2.86v6.8l-1.01,.79,.12,.15,.96-.76,3.5,2.54h0Zm-.69-5.67v-5.15l2.27,3.55-2.27,1.6Zm21.22-5.52l-.69,.52-1.97-1.68-2.29,2.07,.94,.88v7.72l-2.34-1.6v-6.26l.81-.57-2.41-2.24-2.24,2.07,.94,.88v7.46l-.15,.1-2.2-1.6v-6.13c0-1.43-.72-1.85-1.63-2.41-.76-.47-1.16-.91-1.16-1.63,0-.79,.69-1.11,.91-1.23-.79-.03-2.98,.76-3.03,2.76-.03,1.03,.47,1.48,.99,1.97,.52,.49,1.01,.96,1.01,1.83v6.01l-1.06,.84,.12,.12,1.01-.79,2.63,2.14,2.51-1.75,2.76,1.75,5.42-3.2v-6.95l1.21-.94-.1-.15h0Zm18.15-5.84l-1.03,.94-2.32-2.02-3.13,2.51V1.19h-.19V18.12c-.34-.05-1.06-.25-1.85-.37V3.58c0-1.03-.74-2.47-2.59-2.47s-3.01,1.56-3.01,2.91h.08c.1-.61,.52-1.16,1.13-1.16s1.18,.39,1.18,1.78v4.04c-1.75,.07-2.81,1.16-2.81,2.34,0,.67,.42,1.92,1.75,1.97v-.1c-.45-.19-.54-.42-.54-.67,0-.59,.57-.79,1.36-.79h.19v6.51c-1.5,.52-2.2,1.53-2.2,2.78,0,1.72,1.38,3.05,3.4,3.05,1.43,0,2.44-.25,3.75-.54,1.06-.22,2.21-.47,2.83-.47,.79,0,1.14,.35,1.14,.91,0,.72-.27,1.08-.69,1.21v.1c1.7-.32,2.69-1.3,2.69-2.83s-1.5-2.54-3.18-2.54c-.87,0-2.44,.27-3.72,.57-1.43,.32-2.66,.47-3.11,.47-.72,0-1.6-.32-1.6-1.28,0-.87,.72-1.56,2.49-1.56,.96,0,1.9,.15,3.08,.42,1.26,.27,2.12,.64,3.2,.64,1.5,0,2.71-.54,2.71-2.74V3.29l1.11-1.01-.12-.15h0Zm-4.24,6.78c-.27,.3-.59,.54-1.11,.54-.57,0-.87-.3-1.14-.54V3.81l.74-.59,1.5,1.28v4.41h0Zm0,2.41c-.25-.25-.57-.47-1.11-.47s-.91,.27-1.14,.47v-2.17c.22,.19,.59,.49,1.14,.49s.87-.25,1.11-.49v2.17Zm0,5.1c0,.84-.42,1.78-1.5,1.78-.17,0-.57-.03-.74-.05v-6.58c.25-.22,.57-.52,1.14-.52,.52,0,.81,.25,1.11,.52v4.86h0Zm8.78,2.74l5.03-3.13v-6.85l-3.25-2.39-5.03,2.88v6.78l-.99,.79,.1,.15,.81-.67,3.33,2.44h0Zm-.37-3.55v-7.3l2.51,1.87v7.3l-2.51-1.87Zm15.01-8.65c-.39,.27-.74,.42-1.11,.42-.39,0-.88-.25-1.14-.57,0,.03-1.87,2.02-1.87,2.02l-1.87-2.02-3.05,2.12,.1,.17,.81-.54,1.11,1.21v6.63l-1.33,1.01,.12,.12,.67-.46,2.49,2.12,3.15-2.09-.1-.15-.81,.49-1.28-1.16v-7.28c.52,.57,1.11,1.06,1.82,1.06,1.28,0,2.14-1.53,2.29-3.11m11.88,9.81l-.94,.59-5.2-7.76,.27-.37c.57,.34,1.08,.81,2.17,.81s2.47-1.14,2.59-3.23c-.27,.37-.81,.81-1.7,.81-.64,0-1.28-.42-1.67-.81l-3.55,5.22,4.71,7.17,3.42-2.27-.1-.17h0Zm-6.31,.19l-.79,.52-1.08-1.08V.48l-3.89,2.69c.45,.15,.99,.39,.99,1.43v11.81l-1.33,1.01,.12,.12,.67-.46,2.32,2.12,3.11-2.07-.1-.15h0Zm22.89-14.39c0-2.02-1.92-2.63-3.53-2.56V.19c.96,.07,1.7,.46,1.7,1.11,0,.45-.32,1.01-1.28,1.01-.76,0-2.02-.45-3.2-.84-1.3-.45-2.54-.87-3.57-.87-2.02,0-3.55,1.5-3.55,3.35,0,1.5,1.16,2.02,1.63,2.21l.03-.07c-.3-.2-.49-.42-.49-1.06,0-.54,.39-1.26,1.43-1.26,.94,0,2.17,.42,3.8,.88,1.4,.39,2.91,.76,3.75,.87v3.28l-1.58,1.3,1.58,1.36v4.49c-.81,.46-1.75,.61-2.56,.61-1.5,0-2.89-.42-4.02-1.68l4.26-2.07V5.73l-5.2,2.32c.54-1.38,1.55-2.41,2.66-3.08l-.03-.08c-3.08,.84-5.89,3.67-5.89,7.17,0,4.19,3.35,7.3,7.22,7.3,4.19,0,6.65-3.28,6.61-6.75h-.07c-.61,1.33-1.63,2.59-2.78,3.25v-4.38l1.65-1.33-1.65-1.33v-3.28c1.53,0,3.11-1.01,3.11-2.96m-8.78,11.56l-1.21,.61c-.74-.96-1.23-2.32-1.23-4.07,0-.72,.07-1.7,.32-2.39l2.14-.96-.03,6.8h0Zm11.93-12.31l-2.17,1.82,1.85,2.09,2.17-1.82-1.85-2.09Zm3.3,15.15l-.79,.52-1.08-1.08v-7.17l.91-.72-.12-.15-.76,.59-1.8-2.14-2.96,2.07,.1,.17,.74-.49,.99,1.23v6.61l-1.33,1.01,.12,.12,.67-.46,2.32,2.12,3.11-2.07-.1-.15h0Zm16.63-.1l-.74,.49-1.16-1.11v-7.03l.94-.72-.12-.15-.84,.64-2.47-2.2-2.78,2.17-2.44-2.17-2.74,2.14-1.85-2.14-2.96,2.07,.1,.17,.74-.49,1.06,1.21v6.61l-.81,.81,2.36,2,2.29-2.07-.94-.88v-7.04l.61-.45,1.7,1.48v6.16l-.79,.81,2.39,2,2.24-2.07-.94-.88v-7.04l.59-.47,1.72,1.5v6.06l-.69,.72,2.41,2.2,3.18-2.17-.1-.15h.02Zm8.6-1.5l-2.36,1.87-2.71-2.14v-1.33l4.68-3.3-2.36-3.67-5.2,2.86v6.93l3.57,2.59,4.51-3.62-.12-.17h0Zm-5.08-1.88v-5.15l2.27,3.55-2.27,1.6Zm14.12-.97l-2-1.53c1.33-1.16,1.8-2.63,1.8-3.69,0-.15-.03-.42-.05-.67h-.08c-.19,.54-.72,1.01-1.53,1.01s-1.26-.45-1.75-.99l-4.58,2.54v3.72l1.75,1.38c-1.75,1.55-2.09,2.51-2.09,3.4s.52,1.67,1.41,2.02l.07-.12c-.22-.19-.42-.32-.42-.79,0-.34,.35-.88,1.14-.88,1.01,0,1.63,.69,1.95,1.06,0-.03,4.38-2.69,4.38-2.69v-3.77h0Zm-1.03-3.05c-.69,1.23-2.21,2.44-3.11,3.13l-1.11-.94v-3.62c.45,.99,1.36,1.82,2.54,1.82,.69,0,1.14-.12,1.67-.39m-1.9,8.13c-.52-1.16-1.63-2-2.86-2-.3,0-1.21-.03-2,.46,.47-.79,1.87-2.21,3.65-3.28l1.21,1.01v3.8Z"></path></svg> */}
                        {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="400" height="200"><path fill="#020512" d="M26.616,100.66l0,13.86c0,5.06,1.452,7.04,5.764,7.04c4.664,0,5.676-2.508,5.676-7.7l0-13.2l-3.432-1.32l0-3.74l13.552-0.22l0,3.96l-3.3,1.32l0,13.2c0,8.492-3.256,13.068-12.716,13.068c-8.844,0-12.364-3.916-12.364-12.408l0-13.86l-3.256-1.32l0-3.74l13.508-0.22l0,3.96z M63.64244,102.64l0.308,3.036s4.18-3.388,8.096-3.388c4.268,0,6.688,3.036,6.688,7.832l0,11.66l3.08,1.1l0,3.52l-12.1,0l0-3.52l2.42-1.1l0-10.472c0-2.024-1.144-3.52-2.992-3.52c-2.728,0-4.708,2.508-4.708,2.508l0,11.484l2.42,1.1l0,3.52l-12.54,0l0-3.52l3.52-1.1l0-14.3l-3.52-1.1l0-3.52z M97.01688,121.78l3.96,1.1l0,3.52l-14.124,0l0-3.52l3.52-1.1l0-24.728l-3.52-0.88l0-3.52l10.164-0.352l0,29.48z M127.26732,115.972l-14.608,0c0.264,3.52,2.288,5.588,5.324,5.588c3.652,0,7.392-2.068,7.392-2.068l1.892,3.652s-4.4,3.696-10.032,3.696c-7.568,0-11.44-4.4-11.44-11.88c0-7.7,4.356-12.76,11.748-12.76c6.556,0,9.988,4.048,9.988,10.34c0,1.672-0.264,3.3-0.264,3.432z M112.74732,111.88l7.964,0c0-2.508-1.056-4.4-3.608-4.4c-2.464,0-4.004,1.804-4.356,4.4z M148.67376,126.4l-0.792-2.86s-3.388,3.3-7.128,3.3c-4.268,0-6.864-2.508-6.864-6.908c0-5.192,3.916-7.26,10.604-7.26l3.08,0l0-2.42c0-2.244-1.188-3.212-3.388-3.212c-2.244,0-3.872,0.66-3.872,0.66l-0.66,2.772l-3.96,0l-0.308-6.512s5.324-1.76,9.548-1.76c6.688,0,9.24,2.332,9.24,8.712l0,10.868l3.3,0.792l0,3.52z M147.57376,116.412l-2.508,0c-3.432,0-4.796,0.88-4.796,2.86c0,1.672,0.924,2.64,2.596,2.64c2.332,0,4.708-2.552,4.708-2.552l0-2.948z M172.4122,102.64l0.396,3.036s3.168-3.476,6.116-3.476c2.42,0,4.092,0.792,4.092,0.792l-0.352,8.448l-3.96,0l-0.66-3.74c-2.552,0-4.752,2.464-4.752,2.464l0,11.616l4.4,1.1l0,3.52l-14.52,0l0-3.52l3.52-1.1l0-14.3l-3.52-1.1l0-3.52z M197.16264,102.64l0.308,3.036s4.18-3.388,8.096-3.388c4.268,0,6.688,3.036,6.688,7.832l0,11.66l3.08,1.1l0,3.52l-12.1,0l0-3.52l2.42-1.1l0-10.472c0-2.024-1.144-3.52-2.992-3.52c-2.728,0-4.708,2.508-4.708,2.508l0,11.484l2.42,1.1l0,3.52l-12.54,0l0-3.52l3.52-1.1l0-14.3l-3.52-1.1l0-3.52z M234.43152,126.4l0-3.74l3.3-1.32l0-20.68l-3.3-1.32l0-3.74l10.56-0.22l11.88,20.328l0-15.048l-3.212-1.32l0-3.74l12.54-0.22l0,3.96l-3.3,1.32l0,25.74l-7.348,0l-11.792-19.932l0,14.872l3.432,1.32l0,3.74l-12.76,0z M293.58996,115.972l-14.608,0c0.264,3.52,2.288,5.588,5.324,5.588c3.652,0,7.392-2.068,7.392-2.068l1.892,3.652s-4.4,3.696-10.032,3.696c-7.568,0-11.44-4.4-11.44-11.88c0-7.7,4.356-12.76,11.748-12.76c6.556,0,9.988,4.048,9.988,10.34c0,1.672-0.264,3.3-0.264,3.432z M279.06996,111.88l7.964,0c0-2.508-1.056-4.4-3.608-4.4c-2.464,0-4.004,1.804-4.356,4.4z M299.3324,102.86l9.372-0.22l0.396,2.464s2.992-2.904,6.512-2.904c6.116,0,9.152,4.532,9.152,11.66c0,8.14-3.872,12.98-11.572,12.98c-1.276,0-2.596-0.176-3.74-0.44l0,5.588l4.18,1.012l0,3.52l-14.212,0l0-3.52l3.432-1.012l0-24.508l-3.52-1.1l0-3.52z M309.4524,109.9l0,11.22c0.704,0.308,1.76,0.66,3.432,0.66c3.784,0,5.06-2.64,5.06-7.128c0-4.444-1.188-7.172-4.4-7.172c-2.86,0-4.092,2.42-4.092,2.42z M346.12684,126.4l-0.792-2.86s-3.388,3.3-7.128,3.3c-4.268,0-6.864-2.508-6.864-6.908c0-5.192,3.916-7.26,10.604-7.26l3.08,0l0-2.42c0-2.244-1.188-3.212-3.388-3.212c-2.244,0-3.872,0.66-3.872,0.66l-0.66,2.772l-3.96,0l-0.308-6.512s5.324-1.76,9.548-1.76c6.688,0,9.24,2.332,9.24,8.712l0,10.868l3.3,0.792l0,3.52z M345.02684,116.412l-2.508,0c-3.432,0-4.796,0.88-4.796,2.86c0,1.672,0.924,2.64,2.596,2.64c2.332,0,4.708-2.552,4.708-2.552l0-2.948z M370.12928,121.78l3.96,1.1l0,3.52l-14.124,0l0-3.52l3.52-1.1l0-24.728l-3.52-0.88l0-3.52l10.164-0.352l0,29.48z"/><path fill="#" d=""/></svg> */}
                        <Image src='/icon.jpg' width={400} height={80} className=' h-[50px] w-auto lg:w-full lg:h-full' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Nav