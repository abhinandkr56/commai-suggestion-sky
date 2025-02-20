import { Transaction, Flight, Hotel, OfficeSpace } from "../types/transaction";

export const mockTransactions: Transaction[] = [
  {
    id: "1",
    amount: 18500,
    merchant: "Indigo Airlines",
    date: "2024-03-15",
    category: "Travel",
  },
  {
    id: "2",
    amount: 25000,
    merchant: "Marriott Hotels",
    date: "2024-02-28",
    category: "Accommodation",
  },
  {
    id: "3",
    amount: 35000,
    merchant: "WeWork",
    date: "2024-02-15",
    category: "Office Space",
  },
  {
    id: "4",
    amount: 19000,
    merchant: "Indigo Airlines",
    date: "2024-01-30",
    category: "Travel",
  },
  {
    id: "5",
    amount: 28000,
    merchant: "Marriott Hotels",
    date: "2024-01-15",
    category: "Accommodation",
  },
];

export const mockFlights: Flight[] = [
  {
    id: "1",
    airline: "Indigo Airlines",
    departure: "Mumbai",
    arrival: "Delhi",
    price: 17500,
    departureTime: "07:00 PM",
    arrivalTime: "09:00 PM",
  },
  {
    id: "2",
    airline: "Indigo Airlines",
    departure: "Mumbai",
    arrival: "Delhi",
    price: 16800,
    departureTime: "08:00 PM",
    arrivalTime: "10:00 PM",
  },
  {
    id: "3",
    airline: "Indigo Airlines",
    departure: "Mumbai",
    arrival: "Delhi",
    price: 18200,
    departureTime: "06:00 PM",
    arrivalTime: "08:00 PM",
  },
];

export const mockHotels: Hotel[] = [
  {
    id: "1",
    name: "Marriott Executive Apartments",
    location: "Mumbai Central",
    pricePerNight: 12500,
    rating: 4.5,
    availableFrom: "2024-03-20",
    availableTo: "2024-03-25",
  },
  {
    id: "2",
    name: "JW Marriott",
    location: "Juhu Beach",
    pricePerNight: 15000,
    rating: 4.8,
    availableFrom: "2024-03-20",
    availableTo: "2024-03-25",
  },
  {
    id: "3",
    name: "Marriott Suites",
    location: "Andheri East",
    pricePerNight: 9500,
    rating: 4.3,
    availableFrom: "2024-03-20",
    availableTo: "2024-03-25",
  },
];

export const mockOfficeSpaces: OfficeSpace[] = [
  {
    id: "1",
    name: "WeWork Premium Suite",
    location: "BKC Mumbai",
    pricePerDay: 15000,
    capacity: 20,
    availableFrom: "2024-03-20",
    availableTo: "2024-03-25",
  },
  {
    id: "2",
    name: "WeWork Executive Office",
    location: "Andheri West",
    pricePerDay: 12000,
    capacity: 15,
    availableFrom: "2024-03-20",
    availableTo: "2024-03-25",
  },
  {
    id: "3",
    name: "WeWork Coworking Space",
    location: "Lower Parel",
    pricePerDay: 8000,
    capacity: 30,
    availableFrom: "2024-03-20",
    availableTo: "2024-03-25",
  },
];
