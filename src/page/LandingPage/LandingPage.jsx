import React from 'react'
import Bannar from '../../components/Bannar/Bannar'
import MySkills from '../../components/Skills/Skills'
import MyProjects from '../../components/myProjects/myProjects'

const LandingPage = () => {
    return (
        <>
            <Bannar />
            <MySkills/>
            <MyProjects/>
        </>
    )
}

export default LandingPage