import {addWatch} from "../server-actions/addWatch";

export default function WatchForm(){
    return(
        <form action={addWatch} className="bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
            Brand
          </label>
          <input
            type="text"
            id="brand"
            name="brand"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600  text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="model" className="block text-sm font-medium text-gray-700">
            Model
          </label>
          <input
            type="text"
            id="model"
            name="model"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600 text-black"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="referenceNumber" className="block text-sm font-medium  text-purple-950">
            Reference Number
          </label>
          <input
            type="text"
            id="referenceNumber"
            name="referenceNumber"
            className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-purple-600  text-black"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600"
        >
          Add Watch
        </button>
      </form>
    )
}