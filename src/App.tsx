import { useState } from "react";
import "./App.css";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Seats from "@/components/seats";
import { Seat } from "./components/types";

const seats: Seat[] = [
  {
    type: "chair",
    number: 1,
    occupied: [1, 1, 1, 1, 1, 1],
  },
  {
    type: "chair",
    number: 2,
    occupied: [1, 1, 1, 1, 1, 1],
  },
  {
    type: "chair",
    number: 3,
    occupied: [1, 1, 1, 1, 1, 1],
  },
  {
    type: "chair",
    number: 4,
    occupied: [1, 1, 1, 1, 1, 1],
  },
  {
    type: "chair",
    number: 5,
    occupied: [1, 1, 1, 1, 1, 1],
  },
  {
    type: "bed",
    number: 1,
    occupied: [1, 1, 1, 1, 1, 1],
  },
  {
    type: "bed",
    number: 2,
    occupied: [1, 1, 1, 1, 1, 1],
  },
];

function App() {
  const [type, setTab] = useState("all");
  const onTabChange = (value: string) => {
    setTab(value);
  };
  return (
    <>
      <Tabs className="w-full" defaultValue="all" onValueChange={onTabChange}>
        <TabsList className="tab-list">
          <TabsTrigger value="all" className="tab-button">
            全部
          </TabsTrigger>
          <TabsTrigger value="chair" className="tab-button">
            椅
          </TabsTrigger>
          <TabsTrigger value="bed" className="tab-button">
            床
          </TabsTrigger>
        </TabsList>
        <TabsContent className="tab-content" value="all">
          <Seats seats={seats} type={type}></Seats>
        </TabsContent>
        <TabsContent className="tab-content" value="chair">
          <Seats seats={seats} type={type}></Seats>
        </TabsContent>
        <TabsContent className="tab-content" value="bed">
          <Seats seats={seats} type={type}></Seats>
        </TabsContent>
      </Tabs>
    </>
  );
}

export default App;
