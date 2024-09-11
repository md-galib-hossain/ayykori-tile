import { useState } from "react";
import { ALPHABET } from "../../utils/constant";
import { replaceConsecutiveLetters } from "../../utils/helpers";
import { Button } from "../ui/button";
const AlphabetTile = () => {
  const [outputString, setOutputString] = useState<string>("");
  console.log(outputString);
  const handleTileClick = (letter: string) => {
    const newString = replaceConsecutiveLetters(outputString + letter);
    setOutputString(newString);
  };

  return (
    <div className="flex flex-col items-center p-4">
      
      <div className="grid grid-cols-6 gap-4 mb-8">
        {ALPHABET.map((letter) => (
          <Button className="p-6" key={letter} onClick={() => handleTileClick(letter)}>
            {letter}
          </Button>
        ))}
      </div>
      <div className="text-2xl font-mono border-2 border-gray-300 p-4 rounded-lg">
        {outputString === "" ? "Click tiles to form a string" : outputString}
      </div>
      

      <Button className="mt-4 p-6" onClick={()=> setOutputString("")}>
        CLear
      </Button>
    
    </div>
  );
};

export default AlphabetTile;
