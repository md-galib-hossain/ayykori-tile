import React, { useState } from "react";
import PartitionContainer from "./PartitionContainer"; 
import { generatePartitionId, generateRandomColor } from "../../utils/helpers"; 

export interface PartitionState {
  id: string;
  direction: "none" | "horizontal" | "vertical";
  color: string;
  children?: PartitionState[];
}

const Partition: React.FC = () => {
  const [partitions, setPartitions] = useState<PartitionState[]>([
    {
      id: "partition1",
      direction: "none",
      color: generateRandomColor(),
      children: [],
    },
  ]);

  const splitPartition = (id: string, direction: "horizontal" | "vertical") => {
    setPartitions((prev) =>
      prev.map((partition) =>
        partition.id === id
          ? {
              ...partition,
              direction,
              children: [
                {
                  id: generatePartitionId(partition.id, 1),
                  direction: "none",
                  color: partition.color,
                  children: [],
                },
                {
                  id: generatePartitionId(partition.id, 2),
                  direction: "none",
                  color: generateRandomColor(),
                  children: [],
                },
              ],
            }
          : {
              ...partition,
              children: updateChildren(partition.children ?? [], id, direction),
            }
      )
    );
  };

  const updateChildren = (
    children: PartitionState[],
    id: string,
    direction: "horizontal" | "vertical"
  ): PartitionState[] =>
    children.map((child) =>
      child.id === id
        ? {
            ...child,
            direction,
            children: [
              {
                id: generatePartitionId(child.id, 1),
                direction: "none",
                color: child.color,
                children: [],
              },
              {
                id: generatePartitionId(child.id, 2),
                direction: "none",
                color: generateRandomColor(),
                children: [],
              },
            ],
          }
        : {
            ...child,
            children: updateChildren(child.children ?? [], id, direction),
          }
    );
    
//delete partition by the id
  const removePartition = (id: string) => {
    const removeNestedPartition = (
      partitions: PartitionState[]
    ): PartitionState[] => {
      return partitions
        .map((partition) => {
          if (partition.id === id) {
            return null;
          }

          return {
            ...partition,
            children: removeNestedPartition(partition.children ?? []),
          };
        })
        .filter((partition) => partition !== null);
    };

    setPartitions((prev) => removeNestedPartition(prev));
  };

  return (
    <div className="w-full h-screen p-4">
      <PartitionContainer
        partitions={partitions}
        splitPartition={splitPartition}
        removePartition={removePartition}
      />
    </div>
  );
};

export default Partition;
