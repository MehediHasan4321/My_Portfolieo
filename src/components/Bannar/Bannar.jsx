import React from 'react'
import { Link } from 'react-router-dom'

const Bannar = () => {
    return (
        <div className='px-4 w-full bg-black h-[70vh] text-white'>
            <div className='container mx-auto flex gap-5 items-center justify-between h-full' style={{backgroundImage:'url(https://i.ibb.co/BKTQC6d/my-crop-image-removebg-preview.png)',backgroundRepeat:'no-repeat',backgroundPosition:'right'}}>
                <div className=' space-y-5 text-center md:text-left'>
                    <span className='text-3xl md:text-6xl font-semibold'>Hi,</span>
                    <h1 className='text-3xl md:text-4xl xl:text-6xl font-semibold'>My Name is Mehedi Hasan</h1>
                    <h1 className='text-md md:text-3xl font-semibold '>I Am A MERN Stack Web Developer</h1>
                    <p className='text-sm'>I have done more than 20 projects with MERN, Now I am looking for some small and medium size projects</p>
                    <button> <Link to={'/myProjects'} className=' bg-purple-400 px-6 py-2'>Explore My Projects</Link></button>
                </div>
            
            </div>
        </div>
    )
}

export default Bannar