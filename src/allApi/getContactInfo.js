export const contactInfo = async ()=>{
    const res = await fetch("contact.json")
    const data = await res.json()
    return data
}