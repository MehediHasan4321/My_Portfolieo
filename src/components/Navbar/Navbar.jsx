import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
const Navbar = () => {
    const [show, setShow] = useState(false)
    return (
        <>
            <div className='w-full h-24 bg-black text-white'>
                <div className="container mx-auto flex justify-between items-center h-full px-4">
                    <Link className=' cursor-pointer'>
                        <h1 className='text-2xl md:text-4xl font-semibold uppercase'>Mehedi Hasan</h1>
                        <small className=' md:tracking-[4px] uppercase'>MERN Stack Web Developer</small>
                    </Link>
                    <div className='md:flex items-center gap-6 hidden'>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/contact'}>Contact</Link>
                        <Link to={'https://github.com/MehediHasan4321'} target='_blank"'>My Github</Link>
                        <a href="" download={''}><button className='bg-purple-400 py-1 px-2'>Download Resume</button></a>
                    </div>
                    <FaBars onClick={() => setShow(!show)} className='text-2xl cursor-pointer md:hidden mr-4' />
                </div>
            </div>
            <div className='flex flex-col bg-base-300 gap-5 font-semibold md:hidden w-48 py-10 items-center fixed z-10 transition-all' style={{ left: `${show ? '0px' : "-192px"}` }}>
                <Link to={'/'}>Home</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'https://github.com/MehediHasan4321'} target='_blank"'>My Github</Link>
                <a href="" download={''}><button className='bg-purple-400 py-1 px-2'>Download Resume</button></a>
            </div>
        </>
    )
}

export default Navbar