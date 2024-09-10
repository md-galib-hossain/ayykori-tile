import React from 'react';
import { PartitionState } from './Partition'; 

interface PartitionTileProps {
  partition: PartitionState;
  splitPartition: (id: string, direction: 'horizontal' | 'vertical') => void;
  removePartition: (id: string) => void;
}

const PartitionTile: React.FC<PartitionTileProps> = ({ partition, splitPartition, removePartition }) => {
  return (
    <div
      className={`flex ${partition.direction === 'vertical' ? 'flex-row' : 'flex-col'} flex-1 border border-gray-400`}
      style={{ backgroundColor: partition.color }}
    >
      {partition.children && partition.children.length > 0 ? (
        partition.children.map((child) => (
          <PartitionTile
            key={child.id}
            partition={child}
            splitPartition={splitPartition}
            removePartition={removePartition}
          />
        ))
      ) : (
        <div className="flex flex-col justify-center items-center space-y-2 w-full h-full p-4">
          <button onClick={() => splitPartition(partition.id, 'vertical')} className="bg-blue-500 text-white py-1 px-3 rounded">V</button>
          <button onClick={() => splitPartition(partition.id, 'horizontal')} className="bg-green-500 text-white py-1 px-3 rounded">H</button>
          <button onClick={() => {
            
            removePartition(partition.id)
          }} className="bg-red-500 text-white py-1 px-3 rounded">-</button>
        <h2>{partition.id}</h2>
        </div>
      )}
    </div>
  );
};

export default PartitionTile;
