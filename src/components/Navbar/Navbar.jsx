import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full h-20 bg-black text-white'>
            <div className="container mx-auto flex justify-between items-center h-full">
                <h1 className='text-4xl font-semibold'>Mehedi</h1>
                <div className='flex items-center gap-6'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/about'}>About</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <button className='bg-purple-400 py-1 px-2'>Download Resume</button>
                    <button className='bg-purple-400 py-1 px-2'>Hire Me</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar