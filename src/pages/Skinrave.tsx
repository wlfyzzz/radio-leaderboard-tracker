import { PodiumCard } from "@/components/PodiumCard";
import { LeaderboardTable } from "@/components/LeaderboardTable";
import { PodiumCardSkeleton, LeaderboardRowSkeleton } from "@/components/EnhancedSkeleton";
import { NetworkErrorDisplay, ErrorBoundary } from "@/components/ErrorBoundary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useSkinraveLeaderboard } from "@/hooks/useSkinraveLeaderboard";
import { CountdownTimer } from "@/components/CountdownTimer";
import { RefreshCw, TrendingUp, Users, Clock, Radio, Zap, Sword } from "lucide-react";
import { Link } from "react-router-dom";
import skinraveLogo from "@/assets/skinrave.svg";
import rainLogo from "@/assets/rain.png";

const Skinrave = () => {
  const { data, isLoading, error, refetch, isRefetching } = useSkinraveLeaderboard();

  const handleRetry = () => {
    refetch();
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12 space-y-6 animate-fade-in">
            <div className="space-y-4">
              {/* Logo Switcher */}
              <div className="flex justify-center items-center gap-6 mb-8">
                <div className="relative">
                  <img 
                    src={skinraveLogo} 
                    alt="Skinrave" 
                    className="h-16 w-auto cursor-pointer hover-lift transition-all duration-300 border-2 border-gaming-orange rounded-lg shadow-lg" 
                  />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-2 h-2 bg-gaming-orange rounded-full animate-pulse"></div>
                  </div>
                </div>
                <Link to="/">
                  <img 
                    src={rainLogo} 
                    alt="Rain.gg" 
                    className="h-16 w-auto cursor-pointer hover-lift transition-all duration-300 opacity-60 hover:opacity-100 border-2 border-transparent hover:border-gaming-orange/50 rounded-lg" 
                  />
                </Link>
              </div>

              <div className="flex justify-center items-center gap-3 mb-6">
                <Radio className="h-8 w-8 text-gaming-orange animate-pulse-glow" />
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-bounce-in">
                  Skinrave Leaderboard
                </h1>
                <Zap className="h-8 w-8 text-gaming-orange animate-pulse-glow" />
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Track the top performers in our Skinrave competition
              </p>

              <div className="mb-4 p-4 bg-card border border-border rounded-lg hover-lift">
                <p className="text-center text-foreground responsive-text">
                  Use code{" "}
                  <a 
                    href="https://skinrave.gg/r/radiobtw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-gaming-orange bg-gaming-orange/10 px-3 py-2 rounded border-2 border-gaming-orange/30 hover:bg-gaming-orange hover:text-gaming-dark transition-all duration-300 underline decoration-2 underline-offset-2 hover-lift"
                  >
                    radiobtw
                  </a>{" "}
                  to participate
                </p>
              </div>

              {data?.ends_at && (
                <div className="flex justify-center mb-6">
                  <CountdownTimer 
                    endDate={data.ends_at} 
                    title="Skinrave Competition Ends in"
                  />
                </div>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-4">
              {/* <Badge variant="secondary" className="text-sm hover-lift bg-gaming-orange/20 text-gaming-orange border-gaming-orange/30">
                <Clock className="w-4 h-4 mr-1" />
                Updates every 15 minutes
              </Badge>

              
              <Button
                onClick={handleRetry}
                variant="ghost"
                size="sm"
                disabled={isRefetching}
                className="hover-lift"
              >
                <RefreshCw className={`w-4 h-4 mr-1 ${isRefetching ? 'animate-spin' : ''}`} />
                {isRefetching ? 'Refreshing...' : 'Refresh'}
              </Button> */}
            </div>
          </div>

          {/* Error State */}
          {error && (
            <div className="mb-8">
              <NetworkErrorDisplay 
                onRetry={handleRetry} 
                message={error.message || "Failed to load leaderboard data. Please try again."} 
              />
            </div>
          )}

          {/* Top 3 Podium */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-6">
              <TrendingUp className="w-6 h-6 mr-2 text-gaming-orange" />
              <h2 className="text-2xl font-bold">Top Performers</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 responsive-grid max-w-4xl mx-auto">
              {isLoading ? (
                Array.from({ length: 3 }).map((_, index) => (
                  <PodiumCardSkeleton key={index} />
                ))
              ) : (
                <>
                  {/* Second Place */}
                  {data?.participants?.[1] && (
                    <div className="md:order-1">
                      <PodiumCard
                        rank={2}
                        name={data.participants[1].name}
                        wager={data.participants[1].wager}
                        prize={data.participants[1].prize}
                        avatar={data.participants[1].avatar}
                      />
                    </div>
                  )}
                  
                  {/* First Place */}
                  {data?.participants?.[0] && (
                    <div className="md:order-2">
                      <PodiumCard
                        rank={1}
                        name={data.participants[0].name}
                        wager={data.participants[0].wager}
                        prize={data.participants[0].prize}
                        avatar={data.participants[0].avatar}
                        isWinner
                      />
                    </div>
                  )}
                  
                  {/* Third Place */}
                  {data?.participants?.[2] && (
                    <div className="md:order-3">
                      <PodiumCard
                        rank={3}
                        name={data.participants[2].name}
                        wager={data.participants[2].wager}
                        prize={data.participants[2].prize}
                        avatar={data.participants[2].avatar}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Remaining Leaderboard */}
          {(isLoading || (data && data.participants.length > 3)) && (
            <div className="bg-gradient-card  rounded-lg p-6 animate-slide-up hover-lift max-w-6xl mx-auto">
              
              {isLoading ? (
                <div className="space-y-2">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <LeaderboardRowSkeleton key={index} />
                  ))}
                </div>
              ) : (
                data && data.participants.length > 3 && (
                  <LeaderboardTable data={data.participants.slice(3)} startFromRank={4} />
                )
              )}
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-12 text-muted-foreground">
<a href="https://wlfyzz.net" target="_blank" rel="noopener noreferrer" className="text-sm emoji-no-shadow">
  made with ♥ by wlfyzz.net
</a>

          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default Skinrave;