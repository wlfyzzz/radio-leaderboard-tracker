import { useLeaderboard } from "@/hooks/useLeaderboard";
import { PodiumCard } from "@/components/PodiumCard";
import { LeaderboardTable } from "@/components/LeaderboardTable";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AlertCircle, Radio, Trophy, Zap } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const Index = () => {
  const { data: leaderboardData, isLoading, error } = useLeaderboard();

  const topThree = leaderboardData?.slice(0, 3) || [];
  const remainingEntries = leaderboardData?.slice(3) || [];

  if (error) {
    return (
      <div className="min-h-screen bg-background p-6 flex items-center justify-center">
        <Alert className="max-w-md border-destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Failed to load leaderboard data. Please try again later.
          </AlertDescription>
        </Alert>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="container mx-auto px-6 py-8">
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Radio className="h-8 w-8 text-gaming-orange" />
            <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Rain.gg Leaderboard
            </h1>
            <Zap className="h-8 w-8 text-gaming-orange" />
          </div>
          
          <p className="text-lg text-muted-foreground mb-4">
            Track the top performers in our rain competition
          </p>
          
          <div className="mb-4 p-4 bg-card border border-border rounded-lg">
            <p className="text-center text-foreground">
              Use code <a href="https://rain.gg/r/radiobtw" target="_blank" rel="noopener noreferrer" className="font-bold text-gaming-orange bg-gaming-orange/10 px-2 py-1 rounded hover:bg-gaming-orange/20 transition-colors">radiobtw</a> to participate
            </p>
          </div>
          
          <Badge 
            variant="secondary" 
            className="bg-gaming-orange/20 text-gaming-orange border-gaming-orange/30 px-4 py-2"
          >
            Updates every 15 minutes
          </Badge>
        </div>

        {/* Top 3 Podium */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6 bg-gaming-card border-gaming-border/30">
                <div className="text-center space-y-4">
                  <Skeleton className="h-8 w-8 mx-auto rounded-full" />
                  <Skeleton className="h-6 w-24 mx-auto" />
                  <Skeleton className="h-4 w-16 mx-auto" />
                  <Skeleton className="h-6 w-20 mx-auto" />
                  <Skeleton className="h-8 w-16 mx-auto" />
                </div>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
            {/* Second Place */}
            {topThree[1] && (
              <div className="md:order-1">
                <PodiumCard
                  rank={2}
                  name={topThree[1].name}
                  wager={topThree[1].wager}
                  prize={topThree[1].prize}
                  avatar={topThree[1].avatar}
                />
              </div>
            )}
            
            {/* First Place */}
            {topThree[0] && (
              <div className="md:order-2">
                <PodiumCard
                  rank={1}
                  name={topThree[0].name}
                  wager={topThree[0].wager}
                  prize={topThree[0].prize}
                  avatar={topThree[0].avatar}
                  isWinner
                />
              </div>
            )}
            
            {/* Third Place */}
            {topThree[2] && (
              <div className="md:order-3">
                <PodiumCard
                  rank={3}
                  name={topThree[2].name}
                  wager={topThree[2].wager}
                  prize={topThree[2].prize}
                  avatar={topThree[2].avatar}
                />
              </div>
            )}
          </div>
        )}

        {/* Remaining Leaderboard */}
        {remainingEntries.length > 0 && (
          <div className="max-w-6xl mx-auto">
            <div className="flex items-center gap-2 mb-6">
              <Trophy className="h-5 w-5 text-gaming-orange" />
              <h2 className="text-2xl font-bold text-gaming-orange">
                Full Leaderboard
              </h2>
            </div>
            
            {isLoading ? (
              <Card className="p-6 bg-gaming-card border-gaming-border/30">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex items-center space-x-4">
                      <Skeleton className="h-4 w-8" />
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-4 w-32" />
                      <Skeleton className="h-4 w-16" />
                      <div className="flex-1" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  ))}
                </div>
              </Card>
            ) : (
              <LeaderboardTable data={remainingEntries} startFromRank={4} />
            )}
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 text-muted-foreground">
          <p className="text-sm">
            Data updates automatically every 15 minutes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
