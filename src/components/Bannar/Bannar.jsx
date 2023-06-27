import React from 'react'

const Bannar = () => {
    return (
        <div className='w-full bg-black h-[70vh] text-white'>
            <div className='container mx-auto flex gap-5 items-center justify-between h-full'>
                <div className=' space-y-5'>
                    <span className='text-6xl font-semibold'>Hi,</span>
                    <h1 className='text-6xl font-semibold'>My Name is Mehedi Hasan</h1>
                    <h1 className='text-3xl font-semibold'>I Am A MERN Stack Web Developer</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit enim dicta eveniet saepe numquam itaque minima ratione adipisci, provident animi cum ipsam delectus dolorum quos illum quasi at sed placeat?</p>
                    <button className=' bg-purple-400 px-6 py-2'>Explore My Projects</button>
                </div>
                <img className='w-1/ h-full' src="https://i.ibb.co/w09nhXF/women-bg-transparent.png" alt="My Image" />
            </div>
        </div>
    )
}

export default Bannar