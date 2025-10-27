import React from "react";
import { Info } from "lucide-react";

const FairPlayNotice: React.FC = () => {
  return (
    <div className="fixed left-4 right-4 bottom-6 z-50 flex justify-center pointer-events-none">
      <div className="pointer-events-auto max-w-3xl w-full p-4 bg-card/80 border border-border rounded-lg shadow-lg glass-card backdrop-blur-md flex items-start gap-3">
        <Info className="w-5 h-5 text-gaming-orange flex-shrink-0" />
        <div className="text-sm text-foreground leading-tight">
          Wager abusing will result in removal from the leaderboard and prizes. Fair play is enforced.
        </div>
      </div>
    </div>
  );
};

export default FairPlayNotice;
