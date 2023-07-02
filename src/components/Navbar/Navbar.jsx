import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='w-full h-24 bg-black text-white'>
            <div className="container mx-auto flex justify-between items-center h-full">
                <div>
                <h1 className='text-4xl font-semibold uppercase'>Mehedi Hasan</h1>
                <small className=' tracking-[4px] uppercase'>MERN Stack Web Developer</small>
                </div>
                <div className='flex items-center gap-6'>
                    <Link to={'/'}>Home</Link>
                    <Link to={'/contact'}>Contact</Link>
                    <Link to={'https://github.com/MehediHasan4321'} target='_blank"'>My Github</Link>
                    <button className='bg-purple-400 py-1 px-2'>Download Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar