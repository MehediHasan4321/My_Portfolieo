import React, { useEffect, useState } from 'react'
import { mySkills } from '../../allApi/getMySkils'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick';
const MySkills = () => {
    const [skills, setSkills] = useState([])
    useEffect(() => {
        mySkills().then(data => setSkills(data))
    }, [])
    const settings = {
   
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
          ]
    };
    return (
        <div className=' container mx-auto w-full my-10'>
            <Slider {...settings}>
                {
                    skills.map(skil => <div key={skil.id} className=''>
                        <img className='w-32 h-auto' src={skil.image} alt="skil" />
                    </div>)
                }
            </Slider>
        </div>
    )
}

export default MySkills

//className='container mx-auto flex flex-col gap-4 justify-between items-center my-20 flex-wrap'