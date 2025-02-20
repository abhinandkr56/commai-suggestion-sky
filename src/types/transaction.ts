
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

export interface Hotel {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
  availableFrom: string;
  availableTo: string;
}

export interface OfficeSpace {
  id: string;
  name: string;
  location: string;
  pricePerDay: number;
  capacity: number;
  availableFrom: string;
  availableTo: string;
}
