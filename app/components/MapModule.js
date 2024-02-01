import React from 'react'
import { useAppContext } from '../context/Globalcontext'
import Link from 'next/link'

const MapModule = () => {

    const { homemap } = useAppContext()

    return (
        <div className='w-screen h-[80vh] relative'>
            <img className='object-contain right-0  absolute top-[-100px]' src={homemap?.background?.url} alt="" />
            <div className='w-[70vw] z-20 h-[8vh] absolute mx-auto overflow-hidden  flex border-l-[1px] border-l-[#676C6F]'></div>
            <div className='w-1/2 absolute left-[5%] top-[5%]'>
                <div className='w-[400px] mx-auto'>
                    <h1 className='text-8xl font-black text-[#0F1923]'>{homemap.title}</h1>
                    <h1 className='text-lg font-semibold text-[#0F1923] my-5 mt-8 '>{homemap?.subtitle}</h1>
                    <h5 className='text-base font-normal text-[#768079] text-pretty my-8'>{homemap?.description}</h5>
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