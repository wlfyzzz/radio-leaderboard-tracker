import { PodiumCard } from "@/components/PodiumCard";
import { LeaderboardTable } from "@/components/LeaderboardTable";
import { PodiumCardSkeleton, LeaderboardRowSkeleton } from "@/components/EnhancedSkeleton";
import { NetworkErrorDisplay, ErrorBoundary } from "@/components/ErrorBoundary";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useClashLeaderboard } from "@/hooks/useClashLeaderboard";
import { CountdownTimer } from "@/components/CountdownTimer";
import FairPlayNotice from "@/components/FairPlayNotice";
import { RefreshCw, TrendingUp, Users, Clock, Radio, Zap, Sword } from "lucide-react";
import { Link } from "react-router-dom";
import clashLogo from "@/assets/clash.png";
import rainLogo from "@/assets/rain.png";
import skinraveLogo from "@/assets/skinrave.svg";
import csgoldLogo from "@/assets/csgold.svg";
import csgowinLogo from "@/assets/csgowin.png";
import csgobigLogo from "@/assets/csgobig.png";
import gemCoin from "@/assets/gem.svg";

const Clash = () => {
  const { data, isLoading, error, refetch, isRefetching } = useClashLeaderboard();

  const handleRetry = () => {
    refetch();
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 bg-gradient-mesh pointer-events-none opacity-30" />
        
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="text-center mb-16 space-y-8 animate-fade-in">
            <div className="space-y-6">
              {/* Logo Switcher */}
              <div className="flex justify-center items-center gap-4 md:gap-8 mb-12 flex-wrap">
                <Link to="/" className="group">
                  <img 
                    src={skinraveLogo} 
                    alt="Skinrave" 
                    className="h-16 md:h-24 w-auto transition-all duration-300 opacity-40 hover:opacity-100 drop-shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:drop-shadow-[0_0_35px_rgba(34,197,94,0.8)] hover:scale-105" 
                  />
                </Link>
                <div className="relative group">
                  <img 
                    src={clashLogo} 
                    alt="Clash.gg" 
                    className="h-16 md:h-24 w-auto transition-all duration-300 drop-shadow-[0_0_35px_rgba(249,115,22,0.8)] hover:drop-shadow-[0_0_50px_rgba(249,115,22,1)] hover:scale-105" 
                  />
                </div>
                <Link to="/csgold" className="group">
                  <img 
                    src={csgoldLogo} 
                    alt="CSGold" 
                    className="h-16 md:h-24 w-auto transition-all duration-300 opacity-40 hover:opacity-100 drop-shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:drop-shadow-[0_0_35px_rgba(234,179,8,0.8)] hover:scale-105" 
                  />
                </Link>
                <Link to="/csgowin" className="group">
                  <img 
                    src={csgowinLogo} 
                    alt="CSGOWin" 
                    className="h-16 md:h-24 w-auto transition-all duration-300 opacity-40 hover:opacity-100 drop-shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:drop-shadow-[0_0_35px_rgba(234,179,8,0.8)] hover:scale-105" 
                  />
                </Link>
                <Link to="/csgobig" className="group">
                  <img 
                    src={csgobigLogo} 
                    alt="CSGOBig" 
                    className="h-16 md:h-24 w-auto transition-all duration-300 opacity-40 hover:opacity-100 drop-shadow-[0_0_20px_rgba(255,193,7,0.3)] hover:drop-shadow-[0_0_35px_rgba(255,152,0,0.8)] hover:scale-105" 
                  />
                </Link>
              </div>

              <div className="flex justify-center items-center gap-4 mb-8">
                <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-primary bg-clip-text text-transparent animate-bounce-in drop-shadow-2xl whitespace-nowrap">
                  Clash.gg Leaderboard
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                Track the top performers in our Clash.gg competition
              </p>

              <div className="mb-6 p-6 glass-card rounded-xl hover-lift max-w-2xl mx-auto">
                <p className="text-center text-foreground text-lg font-medium">
                  Use code{" "}
                  <a 
                    href="https://clash.gg/r/radiobtw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-extrabold text-gaming-orange bg-gaming-orange/15 px-4 py-2.5 rounded-lg border-2 border-gaming-orange/40 hover:bg-gaming-orange hover:text-gaming-dark transition-all duration-300 underline decoration-2 underline-offset-4 hover-lift inline-flex items-center gap-2 shadow-lg"
                  >
                    radiobtw
                  </a>{" "}
                  to participate
                </p>
              </div>

              {data?.ends_at && (
                <div className="flex justify-center mb-8">
                  <CountdownTimer 
                    endDate={data.ends_at} 
                    title="Clash.gg Competition Ends in"
                  />
                </div>
              )}

              <div className="flex justify-center mb-8">
                <Button asChild variant="outline" className="hover-lift border-2 border-gaming-orange/30 hover:border-gaming-orange hover:bg-gaming-orange/10 font-semibold text-base px-6 py-3">
                  <Link to="/prev-leaderboard/clash">
                    Previous Leaderboard
                  </Link>
                </Button>
              </div>
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
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10 gap-3">
              <div className="h-1 w-12 bg-gradient-primary rounded-full"></div>
              <TrendingUp className="w-7 h-7 text-gaming-orange" />
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">Top Performers</h2>
              <TrendingUp className="w-7 h-7 text-gaming-orange" />
              <div className="h-1 w-12 bg-gradient-primary rounded-full"></div>
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
                        coinIcon={gemCoin}
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
                        coinIcon={gemCoin}
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
                        coinIcon={gemCoin}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Remaining Leaderboard */}
          {(isLoading || (data && data.participants.length > 3)) && (
            <div className="animate-slide-up max-w-6xl mx-auto">
              {isLoading ? (
                <div className="space-y-2 rounded-xl border-2 border-gaming-border/20 bg-gaming-card/60 backdrop-blur-lg shadow-card p-6">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <LeaderboardRowSkeleton key={index} />
                  ))}
                </div>
              ) : (
                data && data.participants.length > 3 && (
                  <LeaderboardTable data={data.participants.slice(3)} startFromRank={4} coinIcon={gemCoin} />
                )
              )}
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-20 text-muted-foreground pb-8">
            <a 
              href="https://wlfyzz.net" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-base emoji-no-shadow hover:text-gaming-orange transition-colors duration-300 font-medium"
            >
              made with ♥ by wlfyzz.net
            </a>
          </div>
        </div>
        <FairPlayNotice />
      </div>
    </ErrorBoundary>
  );
};

export default Clash;