"use client";
import React, { useEffect } from 'react';
import { useAppContext } from '../context/Globalcontext';

const Maps = () => {
    const { fetchmaps, maps } = useAppContext();

    useEffect(() => {
        fetchmaps();
        console.log(maps);
    }, []);

    const openFullImage = (splashUrl) => {
        window.open(splashUrl, '_blank');
    };

    return (
        <div className="p-4 bg-black">
            <h1 className="text-3xl font-bold text-white mb-4">Valorant Maps</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {maps.map((map) => (
                    <div
                        key={map.uuid}
                        className="bg-white rounded-lg shadow-md  hover:shadow-xl transition duration-300 ease-in-out cursor-pointer"

                    >
                        <img
                            src={map.listViewIcon}
                            alt={map.displayName}
                            className="w-full h-40 mx-auto mb-4 object-cover"
                        />
                        <h2 className="text-xl font-semibold mb-2 px-2">{map.displayName}</h2>
                        <p className="text-gray-700 mb-4 px-2">{map.narrativeDescription}</p>
                        <span onClick={() => openFullImage(map.splash)} className="text-indigo-500 hover:underline cursor-pointer p-2">View Map</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Maps;
