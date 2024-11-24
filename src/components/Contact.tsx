import React from 'react';
import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Contact = () => {
  return (
    <div id='Contact' className='pt-32 container'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='space-y-8'>
                <h2 className='text-5xl'data-aos="flip-right">Get in touch</h2>
                <p className='text-gray-600 text-[18px] pt-2' data-aos="flip-right">
                    For any inquiries or assistance, please contact us,or send me a message by submitting the form through our website&apos;s support page.
                  </p>

                    <div className='flex gap-3 items-center' data-aos="flip-right">
                        <MdOutlineMailOutline size={30}/>hiraimi608@gmail.com
                    </div>

                    <div className='flex gap-3 items-center' data-aos="flip-right">
                        <BsTelephone size={30}/>(021) 000-0000

                    </div>
                
            </div>
            <div className='space-y-8'>
           <div className='flex flex-col gap-1' data-aos="flip-right">
            <label htmlFor="name">Name</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-accent'
            id='name' />
           </div>
           <div className='flex flex-col gap-1' data-aos="flip-right">
            <label htmlFor="email">Email</label>
            <input type="text"
            className='h-[40px] bg-transparent border border-accent'
            id='email' />
            </div>
            <div className='flex flex-col gap-1' data-aos="flip-right">
            <label htmlFor="msg">Message</label>
            <textarea 
            className='bg-transparent border border-accent'
            id='msg' rows={8}>
            </textarea>
           </div>
           <button className='rounded-2xl py-2 px-7 bg-blue-800'>Send</button>
           
        </div>
        </div>
        
    </div>
)
}

export default Contact
