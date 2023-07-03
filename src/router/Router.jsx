import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Home from '../Loayout/Home/Home'
import About from '../page/About/About'
import Contact from '../page/Contact/Contact'
import LandingPage from '../page/LandingPage/LandingPage'
import MyProjects from '../components/myProjects/myProjects'

const router = createBrowserRouter([
    {
        path:'/',
        element:<Home/>,
        children:[
            {
                path:'/',
                element:<LandingPage/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/contact',
                element:<Contact/>
            },
            {
                path:'/myProjects',
                element:<MyProjects/>
            }
        ]
    }
])
export default router