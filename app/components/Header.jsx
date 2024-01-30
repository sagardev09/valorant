import React, { useState } from 'react';
import { useAppContext } from '../context/Globalcontext';

const Header = () => {
    const { header } = useAppContext();
    const [showVideo, setShowVideo] = useState(true);

    const videoUrl = header?.video ? header?.video?.file?.url : header?.alternate_videos?.[0]?.file?.url;
    const imageUrl = header?.static_image?.url;


    const handleVideoEnd = () => {
        setShowVideo(false);
    };
    if (!videoUrl) {
        return (
            <div className='flex items-center justify-center bg-gray-100 h-[650px] w-full'>
                <div className='flex flex-col gap-4 items-center justify-center w-[600px]'>
                    <div className='w-[50%] p-3 bg-gray-300 animate-pulse'></div>
                    <div className='w-[80%] p-3 bg-gray-300 animate-pulse'></div>
                    <div className='w-[20%] p-3 py-5 px-6 bg-gray-300 animate-pulse'></div>
                </div>
            </div>
        )
    }

    return (
        <div className="relative w-full h-[650px]">
            <div class="absolute left-0 bottom-0  w-[0] h-[0] border-solid border-transparent border-[30px] border-l-[#ECE8E1] border-b-[#ECE8E1]">
            </div>
            <div className='absolute border-l-[0.5px] border-l-white border-r-[0.5px] border-r-white  h-[100%] w-[70vw] left-1/2 transform -translate-x-1/2  top-0 '>
            </div>
            <div className='absolute border-l-[0.5px] border-l-white   h-[100%] w-[30vw] left-1/2 transform -translate-x-1/2  top-0 '>
            </div>
            {showVideo ? (
                <video src={videoUrl} autoPlay muted onEnded={handleVideoEnd} className="w-full h-full object-cover"></video>
            ) : (
                <img src={imageUrl} alt="Alternative Image" className="w-full h-full object-cover" />
            )}

            <div className="absolute top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center items-center justify-center flex flex-col h-[300px] w-[400px]">
                <h5 className="text-base font-bold">A 5v5 character-based tactical shooter</h5>
                <div className='my-10'>
                    <svg width={650} xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 690 98.9"><path d="M615.11 19.15h24.69l.08 75.59c0 .97.79 1.77 1.77 1.77l14.14-.01c.98 0 1.77-.79 1.77-1.77l-.08-75.58h30.96c.91 0 1.43-1.06.85-1.77l-10.6-13.26a4.68 4.68 0 0 0-3.65-1.76h-59.93c-.98 0-1.77.79-1.77 1.77v13.26c0 .96.79 1.76 1.77 1.76M19.25 94.75 91.67 4.13c.57-.71.06-1.77-.85-1.77H72.71c-1.42 0-2.77.65-3.65 1.76L17.68 68.4V4.12c0-.98-.79-1.77-1.77-1.77H1.77C.79 2.35 0 3.14 0 4.12v90.62c0 .98.79 1.77 1.77 1.77H15.6c1.42 0 2.76-.65 3.65-1.76m51.06 0 24.91-31.17 24.91 31.17a4.685 4.685 0 0 0 3.66 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-11.6c-2.84 0-5.53 1.29-7.31 3.51L47.69 94.73c-.57.71-.06 1.77.85 1.77h18.11c1.43.01 2.77-.64 3.66-1.75m51.39-66.21v41.75l-16.68-20.87 16.68-20.88zm404.37 66.19L453.65 4.11A4.68 4.68 0 0 0 450 2.35h-13.84c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h13.83c1.42 0 2.77-.65 3.65-1.76l24.91-31.17 24.91 31.17a4.68 4.68 0 0 0 3.65 1.76h18.11c.91 0 1.42-1.06.85-1.78m-57.33-45.31L452.05 70.3V28.54l16.69 20.88zM269.45 0c-27.3 0-49.43 22.13-49.43 49.43s22.13 49.43 49.43 49.43 49.43-22.13 49.43-49.43C318.89 22.13 296.75 0 269.45 0m0 82.06c-17.54 0-31.75-14.61-31.75-32.63 0-18.02 14.21-32.64 31.75-32.64S301.2 31.4 301.2 49.43c.01 18.02-14.21 32.63-31.75 32.63M583.38 4.12V68.4L532 4.11a4.68 4.68 0 0 0-3.65-1.76H514.5c-.97 0-1.77.79-1.77 1.77v43.67c0 1.06.36 2.09 1.03 2.92l14.71 18.41c.65.81 1.95.35 1.95-.68v-38l51.39 64.31a4.68 4.68 0 0 0 3.65 1.76h13.83c.98 0 1.77-.79 1.77-1.77V4.12c0-.97-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.8-1.77 1.77M410.62 23.76V4.12c0-.98-.79-1.77-1.77-1.77h-72.37c-.98 0-1.77.79-1.77 1.77v90.62c0 .98.79 1.77 1.77 1.77h14.14c.98 0 1.77-.79 1.77-1.77V19.16h40.55l-27.37 34.26c-.51.64-.51 1.56 0 2.21l31.27 39.13a4.68 4.68 0 0 0 3.65 1.76h18.11c.91 0 1.42-1.06.85-1.77l-32.14-40.21 22.28-27.84c.66-.85 1.03-1.88 1.03-2.94M162.39 96.51h41.96c1.42 0 2.77-.65 3.65-1.76l10.6-13.27c.57-.71.06-1.77-.85-1.77H178.3V4.12c0-.98-.79-1.77-1.77-1.77h-14.14c-.98 0-1.77.79-1.77 1.77v90.62c0 .97.8 1.77 1.77 1.77"></path></svg>
                </div>
                <div className='play-btn-div absolute bottom-[-10px]  flex group transition p-1 '>
                    <button className='play-btn md:w-auto  bg-[#FF4655] text-white text-base font-semibold'>
                        <span className='span-btn text-sm px-[65px] font-semibold py-[18px]'>
                            PLAY FREE
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;
