
import { Flight } from "../types/transaction";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Plane } from "lucide-react";

interface FlightRecommendationsProps {
  flights: Flight[];
}

export const FlightRecommendations = ({ flights }: FlightRecommendationsProps) => {
  return (
    <Card className="p-4 backdrop-blur-sm bg-white/80 border-none shadow-lg animate-fadeIn">
      <h2 className="text-xl font-semibold mb-4 text-commai-text">Recommended Flights</h2>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {flights.map((flight) => (
            <Card
              key={flight.id}
              className="p-4 transition-all hover:shadow-md border-none bg-white/50"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Plane className="h-5 w-5 text-commai-accent" />
                    <span className="font-medium text-commai-text">{flight.airline}</span>
                  </div>
                  <span className="font-semibold text-commai-text">₹{flight.price}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <div>
                    <p>{flight.departure}</p>
                    <p className="font-medium">{flight.departureTime}</p>
                  </div>
                  <div className="text-right">
                    <p>{flight.arrival}</p>
                    <p className="font-medium">{flight.arrivalTime}</p>
                  </div>
                </div>
                <Button className="w-full mt-2 bg-commai-accent hover:bg-commai-accent/90">
                  Book Now
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};
