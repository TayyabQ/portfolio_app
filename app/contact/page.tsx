"use client"

import React, {useState} from 'react'

const Contact = () => {

    const [firstName, setFirstName] = useState ("");
    const [lastName, setLastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [contact, setContact] = useState ("");
    const [topic, setTopic] = useState ("");
    const [message, setMessage] = useState ("");
    const [flag, setFlag] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {

        e.preventDefault();

        if (!flag) {
            alert("Please accept the terms to proceed.");
            return;
        }

        if (!topic) {
            alert("Please select a topic.");
            return;
        }

        console.log(firstName)
        console.log(lastName)
        console.log(email)
        console.log(contact)
        console.log(topic)
        console.log(message)
        console.log(flag)
    }

  return (
    <div className='mt-12 py-4 pt-8 mb-6 lg:mb-20 flex flex-col items-center justify-center gap-2 lg:gap-8 px-4 min-lg:px-25 min-lg:py-0'>
        <h1 className='text-gray-800 text-md lg:text-xs font-semibold'>Get In Touch</h1>
        <h1 className='text-gray-800 font-semibold text-4xl lg:text-5xl'>Contact Me</h1>
        <p className='text-md text-gray-800'>Have any idea in your mind, come build together!</p>
        <form className='w-4/5 flex flex-col items-start justify-center gap-6'>
            <div className='w-full grid grid-cols-2 gap-6'>
                    <div className='grid grid-cols-1 gap-1'>
                        <p className='text-md'>
                            First name
                        </p>
                        <input className='border-1 border-blue-700 rounded-xs' value={firstName} onChange={e => setFirstName(e.target.value)} required/>
                    </div>
                    <div className='grid grid-cols-1 gap-1'>
                        <p className='text-md'>
                            Last name
                        </p>
                        <input className='border-1 border-blue-700 rounded-xs' value={lastName} onChange={e => setLastName(e.target.value)} required/>
                    </div>
                    <div className='grid grid-cols-1 gap-1'>
                        <p className='text-md'>
                            Email
                        </p>
                        <input className='border-1 border-blue-700 rounded-xs' value={email} onChange={e => setEmail(e.target.value)} required type='email'/>
                    </div>
                    <div className='grid grid-cols-1 gap-1'>
                        <p className='text-md'>
                            Phone Number
                        </p>
                        <input className='border-1 border-blue-700 rounded-xs' value={contact} onChange={e => setContact(e.target.value)} required type='number'/>
                    </div>
            </div>
            <div className='w-full grid grid-cols-1 gap-1'>
                <p className='text-md'>
                    Choose a topic
                </p>
                <select value={topic} onChange={e => setTopic(e.target.value)} required className='border-1 border-blue-700 rounded-xs text-sm p-2'>
                    <option value='' disabled>Select One...</option>
                    <option value='Order'>Be a Client</option>
                    <option value='Information'>Get Info</option>                    
                </select>
            </div>
            <div className='w-full grid grid-cols-1 gap-1'>
                <p className='text-md'>
                    Message
                </p>
                <textarea placeholder='Type your message...' className='border-1 border-blue-700 rounded-xs text-sm p-2' value={message} onChange={e => setMessage(e.target.value)}/>
            </div>
            <div className='flex flex-row gap-1'>
                <input type='checkbox' checked={flag} onChange={e => setFlag(e.target.checked)}/>
                <p className='text-sm'>
                    I accept the <span className='text-blue-700 underline'>Terms</span>
                </p>
            </div>
            <div className='w-full flex items-center justify-center'>
                <button className='bg-blue-700 lg:text-sm px-8 py-4 rounded-sm text-white max-lg:mt-4' onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </form>
    </div>
  )
}

export default Contact