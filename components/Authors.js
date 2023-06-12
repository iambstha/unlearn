import getAuthor from "@/graphquery/getAuthor"

export default async function Authors() {
    const authors = await getAuthor()
    return (
        <main className=' flex flex-col w-full justify-center items-center '>
            <h2 className=' text-2xl text-slate-600 font-semibold w-full text-center py-4 ' >All Authors</h2>
            <table className=" w-2/3 border-[1px] border-slate-200" >
                <thead>
                    <tr className=" border-[1px] border-slate-200 " >
                        <th className=" p-2 border-[1px] border-slate-200 bg-slate-100 ">S. No.</th>
                        <th className=" p-2 border-[1px] border-slate-200 bg-slate-100 ">Name</th>
                        <th className=" p-2 bg-slate-100 ">Biography</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author => (
                        <tr key={author.id} >
                        <td className=" border-[1px] border-slate-200 bg-slate-50 p-2 text-center">{authors.indexOf(author) + 1}</td>
                            <td className=" border-[1px] border-slate-200 bg-slate-50 p-2 ">{author.name}</td>
                            <td className=" border-[1px] border-slate-200 bg-slate-50 p-2 ">{author.biography}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}
