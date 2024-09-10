export const replaceConsecutiveLetters = (input: string): string => {
    const regex = /(.)\1{2,}/g;
    return input.replace(regex, '_');
  };
  
  // src/utils/helpers.ts

export const generateRandomColor = (): string => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  };
  