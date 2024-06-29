// import WatchForm from "../components/WatchForm";
// import EditWatch from "../components/EditWatch";
// import deleteWatch from "../server-actions/deleteWatch"
// import { cookies } from "next/headers";
// import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

// export default async function WatchList(){

//     const cookieStore=cookies();
//     const supabase=createServerComponentClient({cookies:()=>cookieStore});
//     const {data:{session}}=await supabase.auth.getSession();
//     const user=session?.user;

//     const{data: watches,error}=await supabase
//     .from ('watches')
//     .select('*')
//     .eq('user_id',user.id)
//     .order('brand',{ascending:true})
//     if(error){
//         console.error("Error fetching data from watches")
//     }
//     console.log({watches});

//     // const watches=[];
//     return(
//         <div className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex justify-center items-center">
//         <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto w-full text-center">
//             <div className="mb-8">
//                 <h1 className="text-4xl font-bold text-gray-800 mb-4">Watch List</h1>
//                 <form action="/auth/signout" method="post">
//                     <button type="submit" className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600">
//                         Sign Out
//                     </button>
//                 </form>
//             </div>
            
//             <WatchForm />

//             <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//                 {watches.map((watch) => (
//                     <div key={watch.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
//                         <h1 className="text-xl font-semibold text-gray-800">{watch.brand} - {watch.model}</h1>
//                         <div className="mt-2 flex justify-between items-center">
//                             <form action={deleteWatch} method="post">
//                                 <input type="hidden" name="id" value={watch.id}/>
//                                 <button type="submit" className="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
//                                     Delete
//                                 </button>
//                             </form>
//                             <EditWatch watch={watch} />
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     </div>
//     )
// }
import { cookies } from "next/headers";
import EditWatch from "../components/EditWatch";
import WatchForm from "../components/WatchForm";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { deleteWatch } from "../server-actions/deleteWatch";

export default async function WatchList(){
    const cookieStore = cookies();
    const supabase = createServerComponentClient({cookies: () => cookieStore});
    const {data: {session}} = await supabase.auth.getSession();
    const user = session?.user;

    const {data: watches, error} = await supabase
        .from('watches')
        .select('*')
        .eq('user_id', user.id)
        .order('brand', {ascending: true})

    if (error){
        console.error('Error fetching watches')
    }

    return (
        <div className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex justify-center items-center">
            <div className="bg-white shadow-lg rounded-lg p-8 max-w-3xl mx-auto w-full text-center">
                <div className="mb-8 flex justify-between items-center">
                    <h1 className="text-4xl  mt-2 py-2 font-bold text-gray-800 mb-4">My Watch List</h1>
                    <form action="/auth/signout" method="post">
                        <button 
                            type="submit" 
                           className="bg-purple-600 text-white mt-0 py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
                        >
                            Sign out
                        </button>
                    </form>
                </div>
                <WatchForm />
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {watches.map((watch) => (
                        <div key={watch.id} className="bg-gray-100 p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold text-gray-800">{watch.brand} - {watch.model}</h2>
                        <div className="mt-2 flex justify-between items-center">
                            <form action={deleteWatch}>
                            <input type="hidden" name="id" value={watch.id} />
                            <button 
                                type="submit"
                                className="bg-red-600 text-white py-1 px-3 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600"
                            >
                                Delete
                            </button>
                            </form>
                            <EditWatch watch={watch} />
                        </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

