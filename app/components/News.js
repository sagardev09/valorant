import React from 'react'
import { useAppContext } from '../context/Globalcontext'

const News = () => {

    const { homenews } = useAppContext()

    const homenewsArray = [1, 2, 3]

    const newscontent = homenews?.[0]?.banner?.url

    if (!newscontent) {
        return (
            <div className='flex items-center justify-between gap-4 w-[70vw] mx-auto my-4'>
                {homenewsArray.map((_, index) => (
                    <div key={index} className='h-[340px] w-full flex flex-col gap-2 cursor-pointer'>
                        <div className='h-[200px] w-full bg-gray-100 p-3 rounded-sm animate-pulse'></div>
                        <div className='flex items-center gap-4'>
                            <h5 className='bg-gray-100 p-3 w-[25%] animate-pulse'></h5>
                            <h5 className='bg-gray-100 p-3 w-[25%] animate-pulse'></h5>
                        </div>
                        <div>
                            <h3 className='bg-gray-100 p-3 w-full animate-pulse'></h3>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    return (
        <div className='w-[70vw] mx-auto bg-[#ECE8E1] border-l-[0.5px] border-l-[#928F8B] border-r-[0.5px] border-r-[#928F8B] py-8 pb-20 relative z-10 '>
            <div className='absolute text-[200px] left-[-80px] top-[-70px] font-black uppercase '>
                <span className='outlined-text'>
                    we are
                </span>
            </div>
            <div className='absolute text-[200px]  bottom-[-20px] right-0 font-black uppercase'>
                <span className='outlined-text'>
                    valorant
                </span>
            </div>
            <div className='flex flex-col'>
                <div className='flex items-start justify-between z-10'>
                    <h1 className='text-[#FF4655] font-extrabold text-8xl'>LATEST NEWS</h1>
                    <div className='cursor-pointer flex items-center gap-4 group'>
                        <h5 className='text-[#FF4655] font-medium text-sm '>GO TO NEWS PAGE</h5>
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-[15px] group-hover:translate-x-3 transition-all 800ms ease-linear' viewBox="0 0 25 15"><path d="M16.2.5 19.9 4m4.6 3.5-8.3 7" fill="none" stroke="#ff4655"></path><path fill="none" stroke="#ff4655" strokeMiterlimit="10" d="M16 7.5H0"></path></svg>
                    </div>
                </div>
                <div className='flex items-center justify-between gap-4 relative top-[-25px]'>
                    {
                        homenews.map((item, index) => {
                            return (
                                <div key={item.id} className='h-[340px] flex flex-col gap-2 cursor-pointer'>
                                    <div className='image-container'>
                                        <img src={item?.banner?.url} alt="" />
                                    </div>
                                    <div className='flex items-center gap-4'>
                                        <h5 className='text-xs text-[#0F1923] font-medium tracking-wider'>{new Intl.DateTimeFormat('en-GB').format(new Date(item.date))}</h5>
                                        <h5 className='text-[#0F1923]'>.</h5>
                                        <h5 className='text-xs text-[#FF4655] uppercase font-medium'>{item?.category?.[0]?.title}</h5>
                                    </div>
                                    <div>
                                        <h3 className='text-2xl font-bold text-[#0F1923]'>{item?.title}</h3>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default News