import getAuthor from "@/graphquery/getAuthor"

export default async function Authors() {
    const authors = await getAuthor()
    return (
        <main className=' flex flex-col w-full justify-center items-center mt-2 '>
            <h2 className=' text-2xl text-slate-600 font-semibold w-full text-center ' >All Authors</h2>
            <table className=" w-2/3 border-[1px] border-slate-200" >
                <thead>
                    <tr>
                        <th className=" p-2 bg-slate-100 ">Name</th>
                        <th className=" p-2 bg-slate-100 ">Biography</th>
                        <th className=" p-2 bg-slate-100 ">Joined</th>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author => (
                        <tr key={author.id} >
                            <td className=" bg-slate-50 p-2 ">{author.name}</td>
                            <td className=" bg-slate-50 p-2 ">{author.biography}</td>
                            <td className=" bg-slate-50 p-2 ">{author.createdAt}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </main>
    )
}
