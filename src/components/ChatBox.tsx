
import { useState } from "react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

interface ChatBoxProps {
  onSendMessage: (message: string) => void;
}

export const ChatBox = ({ onSendMessage }: ChatBoxProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <Card className="p-4 backdrop-blur-sm bg-white/80 border-none shadow-lg animate-fadeIn">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your requirements..."
          className="flex-1 border-none bg-transparent text-commai-text"
        />
        <Button type="submit" className="bg-commai-accent hover:bg-commai-accent/90">
          <Send className="h-4 w-4" />
        </Button>
      </form>
    </Card>
  );
};
