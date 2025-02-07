export interface Seat {
  type: string;
  number: number;
  occupied: number[];
}

export interface SeatsProps {
  seats: Seat[];
  type: string;
}
