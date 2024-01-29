import React from 'react'
import logo from "@/public/logo.svg"
import logosec from "@/public/logosec.svg"
import Image from 'next/image'
import { ChevronDown, Globe, Search } from 'lucide-react'

const Navbar = () => {
    return (
        <div className='sticky top-0 w-full flex items-center xl:gap-7  lg:gap-5 md:gap-4 sm:gap-3 justify-between bg-[#111111] p-3 px-4 text-white'>
            <div className='flex items-center xl:gap-6 lg:gap-4 md:gap-2 p-1'>
                <div className='flex items-center gap-4'>
                    <Image className='h-10 w-20 object-contain ' src={logo} alt='' />
                    <ChevronDown className='text-white cursor-pointer h-6 w-6' />
                </div>
                <div>
                    <Image className='h-10 w-10 object-contain ' src={logosec} alt='' />
                </div>
                <div className='cursor-pointer md:flex hidden flex-col relative group '>
                    <div>
                        <h1 className='uppercase font-medium xl:text-sm lg:text-xs md:text-[10px] hover:bg-[#ffffff7f] p-1 px-4 rounded-lg cursor-pointer'>
                            Game Info
                        </h1>
                    </div>
                    <div className='group-hover:bg-red-500 transition-all 400ms ease-linear w-full  p-1 rounded-lg absolute bottom-[-18px]'></div>
                </div>
                <div className='cursor-pointer md:flex hidden flex-col group relative '>
                    <div>
                        <h1 className='uppercase font-medium group xl:text-sm lg:text-xs md:text-[10px] hover:bg-[#ffffff7f] p-1 px-4 rounded-lg cursor-pointer'>
                            media
                        </h1>
                    </div>
                    <div className='group-hover:bg-red-500 transition-all 400ms ease-linear w-full p-1 rounded-lg absolute bottom-[-18px]'></div>
                </div>
                <div className='cursor-pointer group md:flex hidden flex-col relative '>
                    <div>
                        <h1 className='uppercase font-medium xl:text-sm lg:text-xs md:text-[10px] hover:bg-[#ffffff7f] p-1 px-4 rounded-lg cursor-pointer'>
                            news
                        </h1>
                    </div>
                    <div className='group-hover:bg-red-500 transition-all 400ms ease-linear w-full p-1 rounded-lg absolute bottom-[-18px]'></div>
                </div>
                <div className='cursor-pointer md:flex hidden flex-col group relative '>
                    <div>
                        <h1 className='uppercase font-medium xl:text-sm lg:text-xs md:text-[10px] hover:bg-[#ffffff7f] p-1 px-4 rounded-lg cursor-pointer'>
                            leaderboards
                        </h1>
                    </div>
                    <div className='group-hover:bg-red-500 transition-all 400ms ease-linear w-full p-1 rounded-lg absolute bottom-[-18px]'></div>
                </div>
                <div className='cursor-pointer group md:flex hidden flex-col relative '>
                    <div>
                        <h1 className='uppercase font-medium xl:text-sm lg:text-xs md:text-[10px] hover:bg-[#ffffff7f] p-1 px-4 rounded-lg cursor-pointer'>
                            support
                        </h1>
                    </div>
                    <div className='group-hover:bg-red-500 transition-all 400ms ease-linear w-full p-1 rounded-lg absolute bottom-[-18px]'></div>
                </div>
                <div className='cursor-pointer group md:flex hidden flex-col relative '>
                    <div>
                        <h1 className='uppercase font-medium xl:text-sm lg:text-xs md:text-[10px] hover:bg-[#ffffff7f] p-1 px-4 rounded-lg cursor-pointer'>
                            our socials
                        </h1>
                    </div>
                    <div className='group-hover:bg-red-500 transition-all 400ms ease-linear w-full p-1 rounded-lg absolute bottom-[-18px]'></div>
                </div>
            </div>
            <div className='flex items-center gap-4'>
                <div className='p-2 rounded-lg bg-[#ffffff36]  cursor-pointer'>
                    <Search className='lg:h-6 lg:w-6 md:h-4 md:w-4 sm:h-[13px] sm:w-[13px] h-[12px] w-[12px]' />
                </div>
                <div>
                    <Globe className='lg:h-6 lg:w-6 md:h-4 md:w-4 sm:h-[13px] sm:w-[13px] h-[12px] w-[12px]' />
                </div>
                <button className=' p-1 px-4 bg-gradient-to-tr from-red-600 to-red-500 rounded-2xl xl:text-base lg:text-sm md:text-xs sm:text-[10px]'>Play now</button>
            </div>
        </div>
    )
}

export default Navbar