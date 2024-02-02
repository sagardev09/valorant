"use client"
import React, { useEffect } from 'react';
import { useAppContext } from '../context/Globalcontext';

const Agents = () => {
    const { fetchagents, agents } = useAppContext();

    useEffect(() => {
        fetchagents();

    }, []);

    return (
        <div className='p-4'>
            <h1 className='text-3xl font-bold mb-4'>Agents</h1>
            <div className='flex items-center justify-evenly gap-7 flex-wrap'>
                {agents.map((item, index) => (
                    <div key={item.uuid} className='p-4 bg-white rounded-lg shadow-md mb-4 max-w-lg'>
                        <h2 className='text-xl font-semibold mb-2'>{item?.displayName}</h2>
                        <img src={item.fullPortrait ? item?.fullPortrait : item.fullPortraitV2}
                            alt={item?.displayName} className='w-full h-48 object-contain rounded-md mb-2' />
                        <p className='text-gray-700'>{item?.description}</p>
                        <div className='mt-3'>
                            <p className='text-gray-500 mb-1'>{item?.role?.displayName}</p>
                            <div className='flex items-center gap-2'>
                                {item.backgroundGradientColors.map((color, index) => (
                                    <div key={index} className='w-6 h-6 rounded-full' style={{ backgroundColor: `#${color}` }}></div>
                                ))}
                            </div>
                        </div>
                        <button className='bg-indigo-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300'>
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Agents;
