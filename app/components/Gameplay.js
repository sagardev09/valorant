import React from 'react'
import { useAppContext } from '../context/Globalcontext'
import Link from 'next/link'

const Gameplay = () => {

    const { gameplay } = useAppContext()

    return (
        <div className='h-full w-full relative'>
            <div className='absolute left-0 bottom-[-1px] clip-path'></div>
            <div className='w-[70vw] mx-auto bg-[#ECE8E1] border-l-[0.5px] border-l-[#928F8B]   relative z-10  flex flex-col space-y-20 pt-10 pb-44'>

                <span className='h-2 w-2 bg-[#FF4655] absolute left-0 top-[200px]'></span>
                <span className='h-3 w-3 bg-[#FF4655] absolute left-0 bottom-[50px]'></span>
                <span className='h-2 w-2 bg-[#FF4655] absolute left-[8%] bottom-[320px]'></span>
                <span className='h-[1px] w-full bg-[#928F8B] absolute left-[50px] top-0'></span>
                <div className='relative left-[50px]'>
                    <h1 className='font-black text-8xl'>{gameplay?.title}</h1>
                </div>
                <div className='flex items-start justify-end gap-10'>
                    <div className='flex-1 flex items-start justify-end w-full pr-10'>
                        <div className='w-[300px]'>
                            <h1 className='text-xl font-semibold '>{gameplay?.subtitle}</h1>
                            <h5 className='text-base font-normal text-gray-500  text-balance my-10'>{gameplay?.description}</h5>
                            <div className='play-btn-div absolute flex group transition p-1 '>
                                <button className='play-btn md:w-auto  bg-[#FF4655] text-white text-base font-semibold'>
                                    <Link href={gameplay?.cta?.href ? gameplay?.cta?.href : "https://playvalorant.com/en-us/news/announcements/beginners-guide/"} className='span-btn text-sm px-[65px] font-semibold py-[18px]'>
                                        {gameplay?.cta?.title}
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className=' h-auto w-[700px] relative'>
                        <h5 className='absolute bg-[#ff4655] p-1 px-6 top-14 left-[-20px] text-white text-sm'>{gameplay?.video?.label}</h5>
                        <div className='flex items-center gap-7 absolute left-0 top-[0px] '>
                            <span className='h-2 w-2 bg-[#FF4655]'></span>
                            <span className='h-2 w-2 bg-[#FF4655]'></span>
                        </div>
                        <span className='h-1 rounded-sm w-32 bg-[#FF4655] absolute bottom-0 left-0'></span>
                        <video className=' mt-10' autoPlay loop muted src={gameplay?.video?.preview?.[0]?.video?.file?.url}></video>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Gameplay