import React from 'react'
import { useAppContext } from '../context/Globalcontext'
import Link from 'next/link'

const MapModule = () => {

    const { homemap } = useAppContext()

    return (
        <div className='w-screen h-[80vh] relative'>
            <img className='object-contain right-0  absolute top-[-100px]' src={homemap?.background?.url} alt="" />
            <div className='w-1/2 absolute left-[5%]'>
                <div className='w-[400px] mx-auto'>
                    <h1 className='text-8xl font-black text-[#EDE8E1]'>{homemap.title}</h1>
                    <h1 className='text-lg font-semibold text-[#EDE8E1] my-5 mt-8 '>{homemap?.subtitle}</h1>
                    <h5 className='text-base font-normal text-[#EDE8E1] text-pretty my-8'>{homemap?.description}</h5>
                    <div className='play-btn-div absolute flex group transition p-1 right-[380px]'>
                        <button className='play-btn md:w-auto  bg-[#FF4655] text-white text-base font-semibold'>
                            <Link href={homemap?.cta?.href ? homemap?.cta?.href : "https://playvalorant.com/en-us/news/announcements/beginners-guide/"} className='span-btn text-sm px-[65px] font-semibold py-[18px]'>
                                {homemap?.cta?.title}
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MapModule