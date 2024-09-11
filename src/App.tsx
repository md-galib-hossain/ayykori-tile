import AlphabetTile from "./components/AlphabetTile/AlphabetTile";
import Partition from "./components/Partition/Partition";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import "./index.css";

function App() {
  return (
    <div className="App container mx-auto p-10 ">
  
      <Tabs defaultValue="AlphabetTile">
        <div className="flex items-center justify-center">

        <TabsList className="grid w-full grid-cols-2 max-w-96 h-12">
          <TabsTrigger value="AlphabetTile" className="h-full">AlphabetTile</TabsTrigger>
          <TabsTrigger value="Partition" className="h-full">Partition</TabsTrigger>
        </TabsList>
        </div>
     
      <TabsContent value="AlphabetTile">
        <AlphabetTile />
      </TabsContent>
      <TabsContent value="Partition">
        <Partition />
      </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
