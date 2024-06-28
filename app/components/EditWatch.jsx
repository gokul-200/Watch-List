'use client'

import{useState} from "react"
import {updateWatch} from "../server-actions/updateWatch"

export default function EditWatch({watch}){
   const [showModal,setShowModal]=useState(false)
   const [formData,setFormData]=useState({
    brand: watch.brand,
    model:watch.model,
    referenceNumber: watch.reference_number
   })

   const handleChange=(e)=>setFormData({...formData,[e.target.name]:e.target.value})
    
    return (
        // <div>
        //     <button onClick={()=>setShowModal(true)}>Edit</button>
        //     {
        //         showModal &&(
        //             <div>
        //                 <div>
        //                     <span onClick={()=>setShowModal(false)}>times</span>
        //                     <form action="updateWatch" onSubmit={()=>setShowModal(false)}>
        //                         <input type="hidden" name="id" id={watch.id}/>
        //                         <div>
        //                             <label htmlFor="brand">Brand</label>
        //                             <input 
        //                             type="text"
        //                             id="brand"
        //                             name="brand"
        //                             value={formData.brand}
        //                             onChange={handleChange}
        //                             />
        //                         </div>
        //                         <div>
        //                             <label htmlFor="model">Model</label>
        //                             <input 
        //                             type="text"
        //                             id="model"
        //                             name="model"
        //                             value={formData.model}
        //                             onChange={handleChange} />
        //                         </div>
                            
        //                         <div>
        //                             <label htmlFor="referenceNumber">Referrence Number</label>
        //                             <input 
        //                             type="text"
        //                             id="referenceNumber"
        //                             name="referenceNumber"
        //                             value={formData.referenceNumber}
        //                             onChange={handleChange} />
        //                         </div>
        //                         <button type="submit">Update Watch</button>
        //                     </form>
        //                 </div>
        //             </div>
        //         )
        //     }
        // </div>
        <div>
      <button
        onClick={() => setShowModal(true)}
        className="bg-purple-600 text-white py-1 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
      >
        Edit
      </button>
      {showModal && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-2/3 lg:w-1/2 p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              &times;
            </button>
            <form action={updateWatch} onSubmit={()=>setShowModal(false)}>
              <input type="hidden" name="id" value={watch.id} />
              <div className="mb-4">
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">Brand</label>
                <input
                  type="text"
                  id="brand"
                  name="brand"
                  value={formData.brand}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="model" className="block text-sm font-medium text-gray-700">Model</label>
                <input
                  type="text"
                  id="model"
                  name="model"
                  value={formData.model}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="referenceNumber" className="block text-sm font-medium text-gray-700">Reference Number</label>
                <input
                  type="text"
                  id="referenceNumber"
                  name="referenceNumber"
                  value={formData.referenceNumber}
                  onChange={handleChange}
                  className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
              >
                Update Watch
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
    )
}