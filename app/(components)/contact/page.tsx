"use client"

import Animation1 from '@/components/animations/animation1'
import Animation2 from '@/components/animations/animation2'

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
    <div className='min-lg:px-16 px-10 flex flex-row items-center justify-center'>
        <div className='flex flex-col w-[768px] items-center justify-center gap-2 lg:gap-8 min-lg:py-25 py-24'>
        <Animation1>
        <h1 className='text-gray-800 text-[16px] font-semibold'>Get In Touch</h1>
        </Animation1>
        <Animation1>
        <h1 className='text-gray-800 font-semibold text-4xl lg:text-5xl'>Contact Me</h1>
        </Animation1>
        <Animation1>
        <p className='text-gray-800 text-[18px]'>Have any idea in your mind, come build together!</p>
        </Animation1>
        <form className='w-full flex flex-col items-start justify-center gap-6'>
            <div className='w-full grid grid-cols-2 gap-6'>
                    <div className='grid grid-cols-1 gap-1'>
                        <Animation2>
                        <p className='text-[16px] text-black mb-2'>
                            First name
                        </p>
                        </Animation2>
                        <Animation2>
                        <input className='w-full border-1 border-blue-700 rounded-xs px-2 py-3' value={firstName} onChange={e => setFirstName(e.target.value)} required/>
                        </Animation2>
                    </div>
                    <div className='grid grid-cols-1 gap-1'>
                        <Animation2>
                        <p className='text-[16px] text-black mb-2'>
                            Last name
                        </p>
                        </Animation2>
                        <Animation2>
                        <input className='w-full border-1 border-blue-700 rounded-xs px-2 py-3' value={lastName} onChange={e => setLastName(e.target.value)} required/>
                        </Animation2>
                    </div>
                    <div className='grid grid-cols-1 gap-1'>
                        <Animation2>
                        <p className='text-[16px] text-black mb-2'>
                            Email
                        </p>
                        </Animation2>
                        <Animation2>
                        <input className='w-full border-1 border-blue-700 rounded-xs px-2 py-3' value={email} onChange={e => setEmail(e.target.value)} required type='email'/>
                        </Animation2>
                    </div>
                    <div className='grid grid-cols-1 gap-1'>
                        <Animation2>
                        <p className='text-[16px] text-md text-black mb-2'>
                            Phone Number
                        </p>
                        </Animation2>
                        <Animation2>
                        <input className='w-full border-1 border-blue-700 rounded-xs px-2 py-3' value={contact} onChange={e => setContact(e.target.value)} required type='number'/>
                        </Animation2>
                    </div>
            </div>
            <div className='w-full grid grid-cols-1 gap-1'>
                <Animation2>
                <p className='text-[16px] text-black mb-2'>
                    Choose a topic
                </p>
                </Animation2>
                <Animation2>
                <select value={topic} onChange={e => setTopic(e.target.value)} required className='w-full border-1 border-blue-700 rounded-xs text-sm px-2 py-3 text-gray-500'>
                    <option value='' disabled>Select One...</option>
                    <option value='Order'>Be a Client</option>
                    <option value='Information'>Get Info</option>                    
                </select>
                </Animation2>
            </div>
            <div className='w-full grid grid-cols-1 gap-1'>
                <Animation2>
                <p className='text-[16px] text-black mb-2'>
                    Message
                </p>
                </Animation2>
                <Animation2>
                <textarea placeholder='Type your message...' className='w-full border-1 border-blue-700 rounded-xs text-sm p-3 placeholder-gray-500' rows={9} value={message} onChange={e => setMessage(e.target.value)}/>
                </Animation2>
            </div>
            <div className='flex flex-row gap-1'>
                <input type='checkbox' checked={flag} onChange={e => setFlag(e.target.checked)}/>
                <p className='text-sm text-black'>
                    I accept the <span className='text-blue-700 underline'>Terms</span>
                </p>
            </div>
            <div className='w-full flex items-center justify-center'>
                <button className='bg-blue-700 lg:text-sm px-8 py-3.5 rounded-sm text-white max-lg:mt-4' onClick={handleSubmit}>
                    Submit
                </button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Contact