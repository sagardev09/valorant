"use client"
import React, { useEffect, useState } from 'react';
import { useAppContext } from '../context/Globalcontext';
import AgentDetailsModal from '../components/AgentModal';

const Agents = () => {
    const { fetchagents, agents } = useAppContext();
    const [selectedAgent, setSelectedAgent] = useState(null);


    const handleViewDetails = (agent) => {
        setSelectedAgent(agent);
    };

    const handleCloseModal = () => {
        setSelectedAgent(null);
    };


    useEffect(() => {
        fetchagents();

    }, []);

    return (
        <div className='p-4 bg-black'>
            <h1 className='text-3xl font-bold mb-4'>Agents</h1>
            <div className='flex items-center justify-evenly gap-7 flex-wrap'>
                {agents.map((item, index) => (
                    <div key={item.uuid} className={`p-4 bg-[#28282B] rounded-lg shadow-md text-white mb-4 max-w-lg`}>
                        <h2 className='text-xl font-semibold mb-2'>{item?.displayName}</h2>
                        <img src={item.fullPortrait ? item?.fullPortrait : item.fullPortraitV2}
                            alt={item?.displayName} loading='lazy' className='w-full h-56 object-contain rounded-md mb-2' />
                        <p className=''>{item?.description}</p>
                        <div className='mt-3'>
                            <p className=' mb-1'>{item?.role?.displayName}</p>
                            <div className='flex items-center gap-2'>
                                {item.backgroundGradientColors.map((color, index) => (
                                    <div
                                        key={index}
                                        className='w-6 h-6 rounded-full cursor-pointer'
                                        style={{ backgroundColor: `#${color}` }}

                                    ></div>
                                ))}
                            </div>
                        </div>
                        <button
                            onClick={() => handleViewDetails(item)}
                            className='bg-indigo-500 text-white px-4 py-2 mt-3 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring focus:border-indigo-300'>
                            View Details
                        </button>
                    </div>
                ))}
                {selectedAgent && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <AgentDetailsModal agent={selectedAgent} onClose={handleCloseModal} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Agents;
