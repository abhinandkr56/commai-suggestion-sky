
import { Transaction, Flight } from "../types/transaction";

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
    amount: 16800,
    merchant: "Indigo Airlines",
    date: "2024-02-28",
    category: "Travel",
  },
  {
    id: "3",
    amount: 17200,
    merchant: "Indigo Airlines",
    date: "2024-02-15",
    category: "Travel",
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
    amount: 16500,
    merchant: "Indigo Airlines",
    date: "2024-01-15",
    category: "Travel",
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
