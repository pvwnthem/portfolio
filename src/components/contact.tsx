import React from "react";
import { FaEnvelope, FaMapPin } from "react-icons/fa";

export default function Contact () {
  return (
    <>
      <div id="contact" className="w-full py-16 md:flex flex-col items-center justify-center">
        <div className="md:w-1/2 w-full flex-col md:px-0 px-2">
        <h3 className="text-green-500 md:px-0 px-2 text-xl font-bold uppercase mt-4 md:mt-0">
              Contact Me
            </h3>
          <p className="mb-4 px-2 mt-2">If you have any questions or inquiries, please don&apos;t hesitate to contact me:</p>

            <div className="w-full md:flex justify-around">
                <span className="inline-flex justify-center items-center mr-2">
                    <div className="rounded-full shadow-xl p-6">
                        <FaEnvelope className="w-6 h-6 text-green-500" />
                    </div>
                    <a href="mailto:torben@2x1.dev" className="ml-4">torben@2x1.dev</a>
                </span>
                
                
                <span className="inline-flex justify-center  items-center mr-2">
                    <div className="rounded-full shadow-xl p-6">
                        <FaMapPin className="w-6 h-6 text-green-500" />
                    </div>
                    <a className="ml-4">United States</a>
                </span>
            </div>
              
           
          
        </div>
      </div>
    </>
  )
}
