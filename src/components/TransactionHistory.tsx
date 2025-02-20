
import { Transaction } from "../types/transaction";
import { Card } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";

interface TransactionHistoryProps {
  transactions: Transaction[];
}

export const TransactionHistory = ({ transactions }: TransactionHistoryProps) => {
  return (
    <Card className="p-4 backdrop-blur-sm bg-white/80 border-none shadow-lg animate-fadeIn">
      <h2 className="text-xl font-semibold mb-4 text-commai-text">Recent Transactions</h2>
      <ScrollArea className="h-[300px] pr-4">
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <Card
              key={transaction.id}
              className="p-4 transition-all hover:shadow-md border-none bg-white/50"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium text-commai-text">{transaction.merchant}</p>
                  <p className="text-sm text-gray-500">{transaction.date}</p>
                </div>
                <p className="font-semibold text-commai-text">₹{transaction.amount}</p>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </Card>
  );
};
