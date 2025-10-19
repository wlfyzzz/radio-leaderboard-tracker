import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface LeaderboardEntry {
  name: string;
  wager: string;
  prize: string;
  avatar: string;
}

interface LeaderboardTableProps {
  data: LeaderboardEntry[];
  startFromRank?: number;
  coinIcon?: string;
}

export const LeaderboardTable = ({ data, startFromRank = 4, coinIcon = "https://toastyy.gg/assets/rain.svg" }: LeaderboardTableProps) => {
  return (
    <div className="rounded-xl border-2 border-gaming-border/20 bg-gaming-card/60 backdrop-blur-lg shadow-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-b-2 border-gaming-border/30 bg-gaming-card/40">
            <TableHead className="text-gaming-orange font-bold text-sm uppercase tracking-wide py-4">Place</TableHead>
            <TableHead className="text-gaming-orange font-bold text-sm uppercase tracking-wide py-4">User</TableHead>
            <TableHead className="text-gaming-orange font-bold text-sm uppercase tracking-wide py-4">Prize</TableHead>
            <TableHead className="text-gaming-orange font-bold text-sm uppercase tracking-wide py-4 text-right">Wagered</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((entry, index) => {
            const rank = startFromRank + index;
            return (
              <TableRow 
                key={`${entry.name}-${rank}`} 
                className="border-b border-gaming-border/10 hover:bg-gaming-card/70 transition-all duration-200 hover-lift"
              >
                <TableCell className="font-extrabold text-gaming-orange text-base py-5">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gaming-orange/10 border border-gaming-orange/30">
                    #{rank}
                  </div>
                </TableCell>
                <TableCell className="font-medium py-5">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img 
                        src={entry.avatar} 
                        alt={`${entry.name}'s avatar`}
                        className="w-10 h-10 rounded-full border-2 border-gaming-orange/40 object-cover ring-2 ring-gaming-orange/10"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="w-10 h-10 rounded-full bg-gaming-orange/20 border-2 border-gaming-orange/40 flex items-center justify-center text-gaming-orange font-bold text-sm ring-2 ring-gaming-orange/10 hidden">
                        {entry.name.charAt(0).toUpperCase()}
                      </div>
                    </div>
                    <span className="truncate max-w-[200px] font-semibold text-foreground">{entry.name}</span>
                  </div>
                </TableCell>
                <TableCell className="py-5">
                  <Badge 
                    variant="secondary" 
                    className="bg-gaming-orange/15 text-gaming-orange border border-gaming-orange/30 font-bold px-3 py-1.5 hover-glow"
                  >
                    <img src={coinIcon} alt="Coin" className="w-4 h-4 mr-1.5" />
                    {entry.prize}
                  </Badge>
                </TableCell>
                <TableCell className="text-right font-mono font-bold text-base text-foreground py-5">
                  {parseFloat(entry.wager).toLocaleString(undefined, { 
                    minimumFractionDigits: 2, 
                    maximumFractionDigits: 2 
                  })}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};