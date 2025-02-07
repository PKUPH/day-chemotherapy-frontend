import SeatCard from "@/components/seat";
import { SeatsProps } from "./types";


function Seats({ seats, type }: SeatsProps) {
  const seat_render: JSX.Element[] = [];
  for (const seat of seats) {
    if (seat.type === type || type === "all") {
      seat_render.push(
        <SeatCard {...seat} key={seat.type + " " + seat.number}></SeatCard>,
      );
    }
  }
  return <div className="flex flex-wrap grid grid-cols-5 gap-8 w-full">{seat_render}</div>;
  // return <div className="flex flex-wrap gap-8 w-full">{seat_render}</div>;
}

export default Seats;
