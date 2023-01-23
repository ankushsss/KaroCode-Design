import React from 'react'
import "../App.scss"
import SelectBox from './SelectBox'

const Iphone = () => {
    return (
        <div class="iphone-x ">
            <i></i>
            <b></b>
            <section className='div'>
                <div style={{borderRadius:"50px"}}className='bg-white  h-100  w-100 '>
                    <div className='text-black  text-xl'>
                        Enquery Form
                    </div>
                    <div >
                        <div style={{ padding: "10px", textAlign: "left", marginTop: "30px" }}>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Full Name
                                </label>
                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                      
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Email
                                </label>
                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Contact Number
                                </label>
                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    College
                                </label>
                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Course
                                </label>
                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                    Semester
                                </label>
                                <input
                                    id="country"
                                    name="country"
                                    type="text"
                                    className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                            <div>
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                                Country
                            </label>
                            <select
                                id="country"
                                name="country"
                                autoComplete="country-name"
                                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                            >
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                        <div style={{textAlign:"center"}}>
                        <button
                        type="submit"
                        className="inline-flex justify-center mt-5 mb-6 rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Save
                      </button>
                        </div>

                        </div>
                    </div>



                </div>

            </section>

           
        </div>
    )
}

export default Iphone
