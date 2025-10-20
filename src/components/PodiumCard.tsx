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
  coinIcon?: string;
}

export const PodiumCard = ({ rank, name, wager, prize, avatar, isWinner, coinIcon = "https://toastyy.gg/assets/rain.svg" }: PodiumCardProps) => {
  const getRankStyle = () => {
    switch (rank) {
      case 1:
        return "bg-gradient-card border-gaming-border/50 scale-105 shadow-[0_0_40px_hsl(var(--gaming-orange)/0.4)] hover:shadow-[0_0_60px_hsl(var(--gaming-orange)/0.6)] animate-pulse-glow";
      case 2:
        return "bg-gradient-card border-gaming-border/40 shadow-[0_0_30px_hsl(var(--gaming-orange)/0.3)] hover:shadow-[0_0_45px_hsl(var(--gaming-orange)/0.5)]";
      case 3:
        return "bg-gradient-card border-gaming-border/30 shadow-[0_0_20px_hsl(var(--gaming-orange)/0.2)] hover:shadow-[0_0_35px_hsl(var(--gaming-orange)/0.4)]";
      default:
        return "bg-gradient-card border-gaming-border/20";
    }
  };

  const getRankBadge = () => {
    switch (rank) {
      case 1:
        return "#1";
      case 2:
        return "#2";
      case 3:
        return "#3";
      default:
        return `#${rank}`;
    }
  };

  return (
    <Card
      className={cn(
        "relative p-8 border-2 hover-lift animate-bounce-in overflow-hidden backdrop-blur-sm",
        getRankStyle()
      )}
      style={{ animationDelay: `${rank * 0.1}s` }}
    >
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-50 pointer-events-none" />
      
      <div className="relative z-10 text-center space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gaming-orange text-gaming-dark text-2xl font-extrabold shadow-glow hover:scale-110 transition-transform duration-300">
          {getRankBadge()}
        </div>
        
        <div className="flex justify-center">
          <div className="relative">
            <img 
              src={avatar} 
              alt={`${name}'s avatar`}
              className="w-24 h-24 rounded-full border-4 border-gaming-orange/70 object-cover shadow-[0_0_30px_rgba(249,115,22,0.5)] ring-4 ring-gaming-orange/20 hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="w-24 h-24 rounded-full bg-gaming-orange/20 border-4 border-gaming-orange/70 flex items-center justify-center text-gaming-orange font-bold text-3xl shadow-[0_0_30px_rgba(249,115,22,0.5)] ring-4 ring-gaming-orange/20 hidden">
              {name.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
        
        <div className="space-y-3 pt-2">
          <h3 className="font-bold text-xl truncate text-foreground">{name}</h3>
          <div className="space-y-1">
            <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Wagered
            </div>
            <div className="text-2xl font-extrabold text-gaming-orange">
              {parseFloat(wager).toLocaleString(undefined, { 
                minimumFractionDigits: 2, 
                maximumFractionDigits: 2 
              })}
            </div>
          </div>
        </div>

        <div className="pt-2">
          <Badge 
            variant="secondary" 
            className="bg-gaming-orange text-gaming-dark font-bold text-base px-5 py-2.5 shadow-lg hover-glow"
          >
            <img src={coinIcon} alt="Coin" className="w-5 h-5 mr-2" />
            {prize}
          </Badge>
        </div>
      </div>
    </Card>
  );
};