import React from 'react'
import { useAppContext } from '../context/Globalcontext'
import Link from 'next/link'

const Hero = () => {

    const { hero } = useAppContext()

    return (
        <div className='relative w-screen h-[800px] '>
            <div className='absolute border-l-[0.5px] border-l-white  h-[100%] w-[70vw] left-1/2 transform -translate-x-1/2  top-0 '>
            </div>
            <img src={hero?.background?.url} className='w-full h-full object-cover' alt="" />
            <div className='absolute w-[70vw] left-[55%] transform -translate-x-1/2 top-[40%] h-[300px]  text-white'>
                <h1 className='text-3xl font-medium tracking-wider'>{hero?.subtitle}</h1>
                <h5 className='text-7xl font-bold my-14 '>{hero?.title}</h5>
                <div className='play-btn-div absolute flex group transition p-1 '>
                    <button className='play-btn md:w-auto  bg-[#FF4655] text-white text-base font-semibold'>
                        <Link href={hero?.cta?.href ? hero?.cta?.href : "https://www.youtube.com/watch?v=MCcSsfjguQw"} className='span-btn text-sm px-[65px] font-semibold py-[18px]'>
                            {hero?.cta?.title}
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Hero