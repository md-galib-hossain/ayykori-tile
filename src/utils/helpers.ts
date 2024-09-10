export const replaceConsecutiveLetters = (input: string): string => {
    const regex = /(.)\1{2,}/g;
    return input.replace(regex, '_');
  };

export const generateRandomColor = (): string => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  

export const generatePartitionId = (parentId: string, childrenCount: number): string => {
    return `${parentId}.${childrenCount}`;
  };
  
  