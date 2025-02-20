
export interface Transaction {
  id: string;
  amount: number;
  merchant: string;
  date: string;
  category: string;
}

export interface Flight {
  id: string;
  airline: string;
  departure: string;
  arrival: string;
  price: number;
  departureTime: string;
  arrivalTime: string;
}
