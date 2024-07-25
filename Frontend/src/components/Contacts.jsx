import React  from "react";
import contactus from '../../public/contactusimage.png';

function Contacts() {
  return (
    <>
    <div className="bg-white flex items-center justify-center h-screen">
    <div className="bg-white rounded-lg shadow-lg mt-10 width: 600px; height: 400px;">
        <div className="flex items-center px-3 py-2 bg-pink-500 rounded-t-lg">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex">
            <div className="p-8">
                <h1 className="mb-4 text-2xl">Contact us</h1>
                <form id="contactForm">
                    <div className="mb-4">
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name" />
                    </div>
                    <div className="mb-4">
                      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" rows="3" placeholder="Message"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                      <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onclick="submitForm()">
                        Send Message
                      </button>
                    </div>
                  </form>
            </div>
            <div className="mt-9 mr-2"> 
                <img src={contactus} width="300" height="400" alt="contact us"/>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Contacts
