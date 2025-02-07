import { Seat } from "./types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RiArmchairLine as Chair } from "react-icons/ri";
import { RiHotelBedLine as Bed } from "react-icons/ri";

function SeatCard(seat: Seat) {
  let icon: JSX.Element;
  if (seat.type === "chair") {
    icon = <Chair className="type-icon" />;
  } else {
    icon = <Bed className="type-icon" />;
  }
  return (
    <Card className="col-span-1 min-w-[300px]">
      {/* <Card className="w-[40%] max-w-[400px] min-w-[10px]"> */}
      {/* <Card className="w-[40%]"> */}
      <CardHeader className="text-left">
        <CardTitle className="flex gap-4 items-center">
          {icon}
          {seat.type + " " + seat.number}
        </CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut odio
        non risus pharetra elementum. Vestibulum malesuada vehicula vulputate.
        Fusce aliquet massa in purus dictum pellentesque. Quisque pretium urna
        justo, eget laoreet justo molestie eget. Mauris molestie bibendum leo,
        quis pulvinar urna porta vitae. Cras tristique turpis in porta euismod.
        Etiam varius pulvinar sagittis. Suspendisse volutpat fermentum quam a
        eleifend. Morbi mauris neque, porta egestas leo vitae, mattis dapibus
        dolor. Maecenas felis nulla, luctus ullamcorper mollis eget, pharetra
        sit amet nibh. Morbi eu est nec nisl congue posuere.
      </CardContent>
      <CardFooter>Footer test.</CardFooter>
    </Card>
  );
}

export default SeatCard;
