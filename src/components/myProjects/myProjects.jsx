import React, { useEffect, useState } from 'react'

import { projectData } from '../../allApi/getAllProjects'
import { key } from 'localforage'
import { space } from 'postcss/lib/list'

const MyProjects = () => {
    const [projects, setProjects] = useState([])
    useEffect(()=>{
     projectData().then(data=>setProjects(data))
        
    },[])
      
    return (
        <div>
            {projects.map(project => <div key={project.name} className={project?.reverse?'container mx-auto py-20 flex flex-row-reverse gap-5 md:gap-20' : 'container mx-auto py-20 flex gap-5 md:gap-20'}>
                <img className='w-1/2' src="https://camo.githubusercontent.com/f0d22b6e1d9ea19d47597bd0191a797dcbfbf64e18912c1ea88a00cb69a98160/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d317375494d535431474b49594f78575f46596357514b4537723258764a78317172" alt="" />
                <div className='space-y-4'>
                    <h1 className='text-xl md:text-4xl font-semibold'>{project?.projectName}</h1>
                    <p>{project?.description}</p>
                    <div>
                        <h3 className='text-xl font-semibold'>Tecnology</h3>
                        <div className='flex gap-1 flex-wrap'>
                           {
                            project?.tecnology?.map(item=><span className='m-2 bg-neutral-200' key={item}>{item}</span>)
                           }
                        </div>
                    </div>
                    <div className='flex gap-4 pt-10'>
                        <button className='px-6 py-2 rounded-xl bg-purple-400 text-white font-semibold'>Preview The Site</button>
                        <button className='px-6 py-2 rounded-xl bg-purple-400 text-white font-semibold'>Client Side Github Repo</button>
                        <button className='px-6 py-2 rounded-xl bg-purple-400 text-white font-semibold'>Server Side Github Repo</button>
                    </div>
                </div>
            </div>)}
        </div>
    )
}

export default MyProjects