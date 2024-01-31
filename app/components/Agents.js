import React, { useState, useEffect } from 'react';
import { useAppContext } from '../context/Globalcontext';
import Link from 'next/link';

const Agents = () => {
    const [currentIframe, setCurrentIframe] = useState(0);
    const { agentsdata } = useAppContext()

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIframe((prevIndex) => (prevIndex + 1) % iframeUrls.length);
        }, 8000);

        return () => clearInterval(interval);
    }, []);

    const iframeUrls = [
        'https://giphy.com/embed/464GpkFezKm3LLJGTe',
        'https://giphy.com/embed/WDIL1Ax7uQfwGSnV2W',
        'https://giphy.com/embed/e2HHUuc4x2VaHIhjlf',
    ];

    return (
        <div className='bg-[#ff4655]'>
            <div className=' h-[80vh] w-[70vw] mx-auto overflow-hidden bg-[#ff4655] flex border-l-[1px] border-l-[#928F8B]'>
                <div className="w-1/2 relative flex-1">
                    {iframeUrls.map((item, index) => (
                        <div
                            key={index}
                            className={`h-full opacity-${index === currentIframe ? '100' : '0'} transition-opacity`}
                        >
                            {index === currentIframe && (
                                <iframe
                                    src={item}
                                    width="100%"
                                    height="100%"
                                    className="absolute inset-0 pointer-events-none h-[700px] w-[700px]"
                                    frameBorder="0"
                                    allowFullScreen
                                    title="Giphy Embed"
                                ></iframe>
                            )}
                        </div>
                    ))}
                </div>
                <div className='w-1/2 flex-1 my-auto'>
                    <div className='w-[400px] mx-auto'>
                        <h1 className='text-8xl font-black text-[#EDE8E1]'>{agentsdata.title}</h1>
                        <h1 className='text-lg font-semibold text-[#EDE8E1] my-5 mt-8 '>{agentsdata?.subtitle}</h1>
                        <h5 className='text-base font-normal text-[#EDE8E1] text-pretty my-8'>{agentsdata?.description}</h5>
                        <div className='play-btn-div2 absolute flex group transition p-1 right-[380px]'>
                            <button className='play-btn2 md:w-auto  bg-[#FF4655] text-white text-base font-semibold'>
                                <Link href={agentsdata?.cta?.href ? agentsdata?.cta?.href : "https://playvalorant.com/en-us/news/announcements/beginners-guide/"} className='span-btn2 text-sm px-[65px] font-semibold py-[18px]'>
                                    {agentsdata?.cta?.title}
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agents;
