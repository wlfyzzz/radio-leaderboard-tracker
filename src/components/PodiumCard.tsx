import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface PodiumCardProps {
  rank: number;
  name: string;
  wager: string;
  prize: string;
  avatar: string;
  isWinner?: boolean;
}

export const PodiumCard = ({ rank, name, wager, prize, avatar, isWinner }: PodiumCardProps) => {
  const getRankStyle = () => {
    switch (rank) {
      case 1:
        return "bg-gradient-primary shadow-glow scale-110 z-10";
      case 2:
        return "bg-gradient-card border-gaming-border/50";
      case 3:
        return "bg-gradient-card border-gaming-border/30";
      default:
        return "bg-gradient-card border-gaming-border/20";
    }
  };

  const getRankBadge = () => {
    switch (rank) {
      case 1:
        return "🥇";
      case 2:
        return "🥈";
      case 3:
        return "🥉";
      default:
        return `#${rank}`;
    }
  };

  return (
    <Card
      className={cn(
        "relative p-6 border-2 transition-all duration-300 hover:scale-105",
        getRankStyle()
      )}
    >
      <div className="text-center space-y-4">
        <div className="text-3xl font-bold text-gaming-orange mb-2">
          {getRankBadge()}
        </div>
        
        <div className="space-y-2">
          <h3 className="font-semibold text-lg truncate">{name}</h3>
          <div className="text-sm text-muted-foreground">
            Wagered
          </div>
          <div className="text-xl font-bold text-foreground">
            {parseFloat(wager).toLocaleString(undefined, { 
              minimumFractionDigits: 2, 
              maximumFractionDigits: 2 
            })}
          </div>
        </div>

        <Badge 
          variant="secondary" 
          className="bg-gaming-orange text-gaming-dark font-bold text-lg px-4 py-2"
        >
          <img src="https://toastyy.gg/assets/rain.svg" alt="Rain" className="w-5 h-5 mr-2" />
          {prize}
        </Badge>
      </div>
    </Card>
  );
};