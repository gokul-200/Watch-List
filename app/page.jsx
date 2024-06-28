// import Image from "next/image";
// import AuthForm from "./components/AuthForm"

// export default function Home() {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-100">
//       <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-4" >
//           Watch List
//         </h1>
//         <p className="text-gray-600 mb-6">
//           Record your favourite watches
//         </p>
//         <AuthForm/>
//       </div>
//     </div>
//   );
// }

import Image from "next/image";
import AuthForm from "./components/AuthForm"

export default function Home() {
  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 min-h-screen flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md mx-auto text-center" >
        <h1 className="text-4xl font-bold text-gray-800 mb-4" >
          Watch List
        </h1>
        <p className="text-lg text-gray-700 mb-6">
           Make your world with watches
        </p>
        <div className="bg-gray-500 p-6 rounded-lg">
          <AuthForm/>
        </div>
      </div>
    </div>
  );
}
