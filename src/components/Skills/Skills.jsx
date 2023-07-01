import React from 'react'

const MySkills = () => {
    const skills = [
        {
            id: 1,
            name:"react",
            status:"expart",
            image:"https://logos-download.com/wp-content/uploads/2016/09/React_logo_wordmark.png"
        },
        {
            id: 2,
            name:"node.ja",
            status:"expart",
            image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"
        },
        {
            id: 3,
            name:"Express.js",
            status:"expart",
            image:"https://miro.medium.com/v2/resize:fit:1400/1*XP-mZOrIqX7OsFInN2ngRQ.png"
        },
        {
            id: 4,
            name:"MongoDB",
            status:"expat",
            image:"https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png"
        },
        {
            id: 5,
            name:"firebase",
            status:"expart",
            image:"https://upload.wikimedia.org/wikipedia/commons/b/bd/Firebase_Logo.png"
        },
        {
            id: 6,
            name:"github",
            status:"expart",
            image:"https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png"
        },
        {
            id: 7,
            name:"Next.js",
            status:"femiller",
            image:"https://images.ctfassets.net/c63hsprlvlya/IacLLeOBR5WCvdCPqKuff/6860b5cc464c4f54703a2befa3f706b4/nextjs3.webp"
        }
    ]
    return (
        <div className='container mx-auto flex gap-4 justify-between items-center my-20 flex-wrap'>
            {
                skills.map(skil=><div key={skil.id} className='w-32 h-10'>
                    <img className='w-full' src={skil.image} alt="skil" />
                </div>)
            }
        </div>
    )
}

export default MySkills