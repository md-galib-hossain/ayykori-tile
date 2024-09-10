import React from 'react';
import PartitionTile from './PartitionTile';
import { PartitionState } from './Partition'; 

interface PartitionContainerProps {
  partitions: PartitionState[];
  splitPartition: (id: string, direction: 'horizontal' | 'vertical') => void;
  removePartition: (id: string) => void;
}

const PartitionContainer: React.FC<PartitionContainerProps> = ({ partitions, splitPartition, removePartition }) => {
  return (
    <div className="w-full h-full border border-gray-300">
      {partitions.map((partition) => (
        <PartitionTile
          key={partition.id}
          partition={partition}
          splitPartition={splitPartition}
          removePartition={removePartition}
        />
      ))}
    </div>
  );
};

export default PartitionContainer;
