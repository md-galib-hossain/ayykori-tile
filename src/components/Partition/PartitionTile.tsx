import React from 'react';
import { PartitionState } from './Partition'; 
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '../ui/resizable';
import { Button } from '../ui/button';

interface PartitionTileProps {
  partition: PartitionState;
  splitPartition: (id: string, direction: 'horizontal' | 'vertical') => void;
  removePartition: (id: string) => void;
}

const PartitionTile: React.FC<PartitionTileProps> = ({ partition, splitPartition, removePartition }) => {
  const isVertical = partition.direction === 'vertical';
  const children = partition.children || [];

  return (
    <ResizablePanelGroup
      direction={isVertical ? 'horizontal' : 'vertical'}
      className="flex-1 overflow-hidden "
      style={{ backgroundColor: partition.color }}
   >
      {children.map((child, index) => (
        <React.Fragment key={child.id}>
          <ResizablePanel defaultSize={50} className="flex flex-1">
            <div
              className={`flex ${isVertical ? 'flex-row' : 'flex-col'} flex-1 border border-gray-400`}
              style={{ backgroundColor: child.color }}
            >
              <PartitionTile
                partition={child}
                splitPartition={splitPartition}
                removePartition={removePartition}
              />
            </div>
          </ResizablePanel>
          {index < children.length - 1 && <ResizableHandle />}
        </React.Fragment>
      ))}
      {children.length === 0 && (
        <ResizablePanel defaultSize={100} className="flex flex-row justify-center items-center space-x-4 p-4">
          <Button
            onClick={() => splitPartition(partition.id, 'vertical')}
            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
          >
            V
          </Button>
          <Button
            onClick={() => splitPartition(partition.id, 'horizontal')}
            className="bg-green-500 text-white py-2 px-4 rounded shadow hover:bg-green-600"
          >
          H
          </Button>
          <Button
            onClick={() => removePartition(partition.id)}
            className="bg-red-500 text-white py-2 px-4 rounded shadow hover:bg-red-600"
          >
           -
          </Button>
         
        </ResizablePanel>
      )}
    </ResizablePanelGroup>
  );
};

export default PartitionTile