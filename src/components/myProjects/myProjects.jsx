import React, { useEffect, useState } from 'react'

import { projectData } from '../../allApi/getAllProjects'
import { Link } from 'react-router-dom'


const MyProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(()=>{
     projectData().then(data=>setProjects(data))
        
    },[])

      
    return (
        <div>
            {projects.map((project,index) => <div key={index} className={project?.reverse?'container mx-auto py-20 md:flex flex-row-reverse gap-5 md:gap-20' : 'container mx-auto py-20 md:flex gap-5 md:gap-20'}>
                <img className='w-full  md:w-1/2' src={project?.image} alt="my projects Image" />
                <div className='space-y-4'>
                    <h1 className='text-xl md:text-4xl font-semibold'>{project?.projectName}</h1>
                    <p>{project?.description}</p>
                    <div>
                        <h3 className='text-xl font-semibold'>Tecnology</h3>
                        <div className='flex gap-1 flex-wrap'>
                           {
                            project?.tecnology?.map((item,index)=><span className='m-2 bg-neutral-200' key={index}>{item}</span>)
                           }
                        </div>
                    </div>
                    <div className='flex gap-4 pt-10'>
                        {
                            project?.links?.map((link,index)=><Link target='_blank' key={index} to={link.link}><button className='px-6 py-2 rounded-xl bg-purple-400 text-white font-semibold'>{link.name}</button></Link>)    
                        }
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default MyProjects