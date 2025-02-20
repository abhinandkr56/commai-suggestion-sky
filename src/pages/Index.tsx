
import { useState } from "react";
import { ChatBox } from "@/components/ChatBox";
import { TransactionHistory } from "@/components/TransactionHistory";
import { FlightRecommendations } from "@/components/FlightRecommendations";
import { mockTransactions, mockFlights, mockHotels, mockOfficeSpaces } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";

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

    if (lowerMessage.includes('hotel') || lowerMessage.includes('stay')) {
      type = 'hotel';
      description = "Finding the best hotels based on your transaction history...";
    } else if (lowerMessage.includes('office') || lowerMessage.includes('work')) {
      type = 'office';
      description = "Finding the best office spaces based on your transaction history...";
    }

    toast({
      title: "Processing your request",
      description,
    });
    
    setRecommendationType(type);
    setShowRecommendations(true);
  };

  return (
    <div className="min-h-screen bg-[#FFE44D] p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2 animate-fadeIn">
          <h1 className="text-4xl font-bold text-commai-text">CommAI</h1>
          <p className="text-gray-600">Your Personal Travel & Work Assistant</p>
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
