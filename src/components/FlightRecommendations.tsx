
import { Flight, Hotel, OfficeSpace } from "../types/transaction";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Plane, Building, Building2 } from "lucide-react";

interface FlightRecommendationsProps {
  flights?: Flight[];
  hotels?: Hotel[];
  officeSpaces?: OfficeSpace[];
  type: 'flight' | 'hotel' | 'office';
}

export const FlightRecommendations = ({ flights, hotels, officeSpaces, type }: FlightRecommendationsProps) => {
  const getTitle = () => {
    switch (type) {
      case 'flight':
        return 'Recommended Flights';
      case 'hotel':
        return 'Recommended Hotels';
      case 'office':
        return 'Recommended Office Spaces';
    }
  };

  return (
    <Card className="p-4 backdrop-blur-sm bg-white/80 border-none shadow-lg animate-fadeIn">
      <h2 className="text-xl font-semibold mb-4 text-commai-text">{getTitle()}</h2>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {type === 'flight' && flights?.map((flight) => (
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
                  Book Flight
                </Button>
              </div>
            </Card>
          ))}

          {type === 'hotel' && hotels?.map((hotel) => (
            <Card
              key={hotel.id}
              className="p-4 transition-all hover:shadow-md border-none bg-white/50"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-commai-accent" />
                    <span className="font-medium text-commai-text">{hotel.name}</span>
                  </div>
                  <span className="font-semibold text-commai-text">₹{hotel.pricePerNight}/night</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <div>
                    <p>{hotel.location}</p>
                    <p className="font-medium">Rating: {hotel.rating}★</p>
                  </div>
                  <div className="text-right">
                    <p>Available from</p>
                    <p className="font-medium">{hotel.availableFrom}</p>
                  </div>
                </div>
                <Button className="w-full mt-2 bg-commai-accent hover:bg-commai-accent/90">
                  Book Hotel
                </Button>
              </div>
            </Card>
          ))}

          {type === 'office' && officeSpaces?.map((office) => (
            <Card
              key={office.id}
              className="p-4 transition-all hover:shadow-md border-none bg-white/50"
            >
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <Building2 className="h-5 w-5 text-commai-accent" />
                    <span className="font-medium text-commai-text">{office.name}</span>
                  </div>
                  <span className="font-semibold text-commai-text">₹{office.pricePerDay}/day</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500">
                  <div>
                    <p>{office.location}</p>
                    <p className="font-medium">Capacity: {office.capacity} people</p>
                  </div>
                  <div className="text-right">
                    <p>Available from</p>
                    <p className="font-medium">{office.availableFrom}</p>
                  </div>
                </div>
                <Button className="w-full mt-2 bg-commai-accent hover:bg-commai-accent/90">
                  Book Office Space
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};
