import React, { useEffect, useState } from 'react'
import { contactInfo } from '../../allApi/getContactInfo'

const Contact = () => {
    const [contacts, setContacts] = useState({})
    useEffect(() => {
        contactInfo().then(data => setContacts(data))
    }, [])
    const handleContact = (e) => {
        e.preventDefault()
        const from = e.target
        const name = from.name.value;
        const email = from.email.value
        const subject = from.subject.value;
        const message = from.message.value
        const contactInfo = { name, email, subject, message }
        console.log(contactInfo)
    }
    return (
        <div className='container mx-auto my-20 md:flex h-auto w-full'>
            <div>
                <img className='w-96 h-96  rounded-xl object-cover' src={contacts.image} alt="my Image" />
                <div className=' space-y-3 p-4'>
                    <h1 className='text-xl md:text-4xl'>{contacts?.name}</h1>
                    <h1 className='text-xl'>Email : {contacts?.email}</h1>
                    <h1 className='text-xl'>Phone : {contacts?.phone}</h1>
                    <h1 className='text-xl'>My Github : {contacts?.github}</h1>
                </div>
            </div>
            <form onSubmit={handleContact} className='space-y-3 w-full md:ml-10 mt-4'>
                <div className='w-full flex gap-3'>
                    <input required className='py-2 bg-neutral-100 px-4 w-full' type="text" name="name" id="name" placeholder='Enter Your Name' />
                    <input required className='py-2 bg-neutral-100 px-4 w-full' type="email" name="email" id="email" placeholder='Enter Your email' />
                </div>
                <input type="text" name="subject" className='py-2 bg-neutral-100 px-4 w-full' placeholder='Enter Your Subject' />
                <textarea required name="message" className='w-full h-32 bg-neutral-100 p-2' placeholder='Enter Your Message'></textarea>
                <input type="submit" value="Send Message" className='w-full py-2 bg-purple-400 text-white cursor-pointer' />
            </form>
        </div>
    )
}

export default Contact