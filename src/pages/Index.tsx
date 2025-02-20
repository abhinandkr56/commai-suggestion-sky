
import { useState } from "react";
import { ChatBox } from "@/components/ChatBox";
import { TransactionHistory } from "@/components/TransactionHistory";
import { FlightRecommendations } from "@/components/FlightRecommendations";
import { mockTransactions, mockFlights } from "@/data/mockData";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [showRecommendations, setShowRecommendations] = useState(false);

  const handleMessage = (message: string) => {
    // In a real application, this would process the message with Gemini AI
    // and fetch real flight data from Google Flights API
    toast({
      title: "Processing your request",
      description: "Finding the best flights based on your transaction history...",
    });
    
    setShowRecommendations(true);
  };

  return (
    <div className="min-h-screen bg-commai-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center space-y-2 animate-fadeIn">
          <h1 className="text-4xl font-bold text-commai-text">CommAI</h1>
          <p className="text-gray-600">Your Personal Travel Assistant</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <TransactionHistory transactions={mockTransactions} />
          {showRecommendations && <FlightRecommendations flights={mockFlights} />}
        </div>
        
        <div className="max-w-2xl mx-auto">
          <ChatBox onSendMessage={handleMessage} />
        </div>
      </div>
    </div>
  );
};

export default Index;
