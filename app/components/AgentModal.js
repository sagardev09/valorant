// AgentDetailsModal.js
import { X } from 'lucide-react';
import React from 'react';

const AgentDetailsModal = ({ agent, onClose }) => {
    return (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-md shadow-lg">
            <h2 className="text-xl font-semibold mb-2">{agent?.displayName}</h2>
            <img
                src={agent.fullPortrait ? agent?.fullPortrait : agent.fullPortraitV2}
                alt={agent?.displayName}
                className="w-full h-48 object-contain rounded-md mb-4"
            />
            <p className="text-gray-700 text-sm">{agent?.description}</p>
            <div className="mt-3">
                <p className="text-gray-500 mb-1 capitalize ">{agent?.role?.displayName}</p>
                <div className="mt-2">
                    <h3 className="text-lg font-semibold mb-2">Abilities</h3>
                    {agent?.abilities.map((ability, index) => (
                        <div key={index} className="mb-4 flex items-center gap-4">
                            <div>
                                <img
                                    src={ability?.displayIcon}
                                    alt={ability.displayName}
                                    className="w-12 h-12 object-contain rounded-md mt-2"
                                    loading='lazy'
                                />
                            </div>
                            <div>
                                <h4 className="text-md font-semibold">{ability?.displayName}</h4>
                                <p className="text-gray-700 text-xs overflow-hidden overflow-ellipsis whitespace-nowrap max-w-[720px]">
                                    {ability.description.length > 200 ? `${ability.description.slice(0, 200)}...` : ability.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <button
                className="bg-red-500 text-white px-2 py-2  rounded-md hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300 absolute top-4 right-4"
                onClick={onClose}
            >
                <X />
            </button>
        </div>
    );
};

export default AgentDetailsModal;
