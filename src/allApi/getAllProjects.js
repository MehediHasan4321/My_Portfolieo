export const projectData = async ()=>{
    const res = await fetch('projects.json')
    const data= await res.json()
    return data
}