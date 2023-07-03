export const mySkills = async ()=>{
    const res = await fetch('mySkils.json')
    const data = await res.json()
    return data
}