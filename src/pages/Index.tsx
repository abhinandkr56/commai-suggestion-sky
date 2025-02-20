
import { useState } from "react";
import { ChatBox } from "@/components/ChatBox";
import { TransactionHistory } from "@/components/TransactionHistory";
import { FlightRecommendations } from "@/components/FlightRecommendations";
import { mockTransactions, mockFlights, mockHotels, mockOfficeSpaces } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";
import { Plane, Building, Building2, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";

type RecommendationType = 'flight' | 'hotel' | 'office';

const Index = () => {
  const { toast } = useToast();
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendationType, setRecommendationType] = useState<RecommendationType>('flight');

  const handleMessage = (message: string) => {
    // In a real application, this would process the message with Gemini AI
    // and determine the type of booking required
    const lowerMessage = message.toLowerCase();
    let type: RecommendationType = 'flight';
    let description = "Finding the best flights based on your transaction history...";

    if (lowerMessage.includes('hotel')) {
      type = 'hotel';
      description = "Finding the best hotels based on your transaction history...";
    } else if (lowerMessage.includes('office')) {
      type = 'office';
      description = "Finding the best office spaces based on your transaction history...";
    }

    toast({
      title: "Processing your request",
      description,
    });
    
    // Add a 5-second delay before showing recommendations
    setTimeout(() => {
      setRecommendationType(type);
      setShowRecommendations(true);
    }, 5000);
  };

  const getQuickActionText = (type: RecommendationType) => {
    switch (type) {
      case 'flight':
        return "Book a flight to Delhi";
      case 'hotel':
        return "Book a Marriott hotel";
      case 'office':
        return "Book a WeWork space";
    }
  };

  const handleQuickAction = (type: RecommendationType) => {
    handleMessage(getQuickActionText(type));
  };

  return (
    <div className="min-h-screen bg-[#FFE44D] p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-4 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-bold text-commai-text">CommAI</h1>
          <p className="text-xl text-gray-700">Your Personal Travel & Work Assistant</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-8">
            <Card 
              className="p-6 backdrop-blur-sm bg-white/80 border-none shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => handleQuickAction('flight')}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center">
                  <Plane className="h-6 w-6 text-sky-500" />
                </div>
                <h3 className="font-semibold text-commai-text">Flight Booking</h3>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </Card>

            <Card 
              className="p-6 backdrop-blur-sm bg-white/80 border-none shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => handleQuickAction('hotel')}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                  <Building className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="font-semibold text-commai-text">Hotel Booking</h3>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </Card>

            <Card 
              className="p-6 backdrop-blur-sm bg-white/80 border-none shadow-lg hover:shadow-xl transition-all cursor-pointer"
              onClick={() => handleQuickAction('office')}
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-emerald-500" />
                </div>
                <h3 className="font-semibold text-commai-text">Office Booking</h3>
                <ArrowRight className="h-5 w-5 text-gray-400" />
              </div>
            </Card>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <TransactionHistory transactions={mockTransactions} />
          {showRecommendations && (
            <FlightRecommendations
              flights={recommendationType === 'flight' ? mockFlights : undefined}
              hotels={recommendationType === 'hotel' ? mockHotels : undefined}
              officeSpaces={recommendationType === 'office' ? mockOfficeSpaces : undefined}
              type={recommendationType}
            />
          )}
        </div>
        
        <div className="max-w-2xl mx-auto">
          <ChatBox onSendMessage={handleMessage} />
        </div>
      </div>
    </div>
  );
};

export default Index;
