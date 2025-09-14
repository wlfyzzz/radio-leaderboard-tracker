import { useParams, Link } from "react-router-dom";
import { PodiumCard } from "@/components/PodiumCard";
import { LeaderboardTable } from "@/components/LeaderboardTable";
import { PodiumCardSkeleton, LeaderboardRowSkeleton } from "@/components/EnhancedSkeleton";
import { NetworkErrorDisplay, ErrorBoundary } from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { usePrevLeaderboard } from "@/hooks/usePrevLeaderboard";
import { ArrowLeft, TrendingUp, Radio, Zap } from "lucide-react";
import rainLogo from "@/assets/rain.png";
import skinraveLogo from "@/assets/skinrave.svg";
import clashLogo from "@/assets/clash.png";
import skinraveCoin from "@/assets/skinrave-coin.png";
import gemCoin from "@/assets/gem.svg";

const PrevLeaderboard = () => {
  const { site } = useParams<{ site: string }>();
  const { data, isLoading, error, refetch } = usePrevLeaderboard(site || "rain");

  const handleRetry = () => {
    refetch();
  };

  const getSiteConfig = (siteName: string) => {
    switch (siteName) {
      case "skinrave":
        return {
          logo: skinraveLogo,
          title: "Skinrave Previous Leaderboard",
          coinIcon: skinraveCoin,
          backUrl: "/skinrave",
          siteUrl: "https://skinrave.gg/r/radiobtw"
        };
      case "clash":
        return {
          logo: clashLogo,
          title: "Clash.gg Previous Leaderboard",
          coinIcon: gemCoin,
          backUrl: "/clash",
          siteUrl: "https://clash.gg/r/radiobtw"
        };
      default:
        return {
          logo: rainLogo,
          title: "Rain.gg Previous Leaderboard",
          coinIcon: undefined,
          backUrl: "/",
          siteUrl: "https://rain.gg/r/radiobtw"
        };
    }
  };

  const config = getSiteConfig(site || "rain");

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-12 space-y-6 animate-fade-in">
            <div className="space-y-4">
              {/* Back Button */}
              <div className="flex justify-start mb-6">
                <Button asChild variant="outline" className="hover-lift">
                  <Link to={config.backUrl}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Current Leaderboard
                  </Link>
                </Button>
              </div>

              {/* Logo Switcher */}
              <div className="flex justify-center items-center gap-6 mb-8">
                <div className={`relative ${site === "rain" ? "border-2 border-gaming-orange" : "opacity-60 hover:opacity-100 border-2 border-transparent hover:border-gaming-orange/50"}`}>
                  <Link to="/prev-leaderboard/rain">
                    <img 
                      src={rainLogo} 
                      alt="Rain.gg Previous" 
                      className="h-16 w-auto cursor-pointer hover-lift transition-all duration-300 rounded-lg shadow-lg" 
                    />
                  </Link>
                  {site === "rain" && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-gaming-orange rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                
                <div className={`relative ${site === "skinrave" ? "border-2 border-gaming-orange" : "opacity-60 hover:opacity-100 border-2 border-transparent hover:border-gaming-orange/50"}`}>
                  <Link to="/prev-leaderboard/skinrave">
                    <img 
                      src={skinraveLogo} 
                      alt="Skinrave Previous" 
                      className="h-16 w-auto cursor-pointer hover-lift transition-all duration-300 rounded-lg" 
                    />
                  </Link>
                  {site === "skinrave" && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-gaming-orange rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
                
                <div className={`relative ${site === "clash" ? "border-2 border-gaming-orange" : "opacity-60 hover:opacity-100 border-2 border-transparent hover:border-gaming-orange/50"}`}>
                  <Link to="/prev-leaderboard/clash">
                    <img 
                      src={clashLogo} 
                      alt="Clash.gg Previous" 
                      className="h-16 w-auto cursor-pointer hover-lift transition-all duration-300 rounded-lg shadow-lg" 
                    />
                  </Link>
                  {site === "clash" && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                      <div className="w-2 h-2 bg-gaming-orange rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex justify-center items-center gap-3 mb-6">
                <h1 className="text-4xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-bounce-in">
                  {config.title}
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Previous competition results
              </p>

              <div className="mb-4 p-4 bg-card border border-border rounded-lg hover-lift">
                <p className="text-center text-foreground responsive-text">
                  Use code{" "}
                  <a 
                    href={config.siteUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-bold text-gaming-orange bg-gaming-orange/10 px-3 py-2 rounded border-2 border-gaming-orange/30 hover:bg-gaming-orange hover:text-gaming-dark transition-all duration-300 underline decoration-2 underline-offset-2 hover-lift"
                  >
                    radiobtw
                  </a>{" "}
                  to participate in current competitions
                </p>
              </div>
            </div>
          </div>

          {/* Error State */}
          {error && (
            <div className="mb-8">
              <NetworkErrorDisplay 
                onRetry={handleRetry} 
                message={error.message || "Failed to load previous leaderboard data. Please try again."} 
              />
            </div>
          )}

          {/* No Data State */}
          {!isLoading && !error && data && data.participants.length === 0 && (
            <div className="text-center py-12">
              <div className="bg-card border border-border rounded-lg p-8 hover-lift max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold mb-4">No Previous Data Available</h3>
                <p className="text-muted-foreground text-lg">
                  No previous leaderboard data is available for this site yet.
                </p>
                <Button asChild className="mt-6" variant="outline">
                  <Link to={config.backUrl}>
                    View Current Leaderboard
                  </Link>
                </Button>
              </div>
            </div>
          )}

          {/* Top 3 Podium */}
          {!isLoading && !error && data && data.participants.length > 0 && (
            <div className="mb-8">
              <div className="flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 mr-2 text-gaming-orange" />
                <h2 className="text-2xl font-bold">Final Results</h2>
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
                          coinIcon={config.coinIcon}
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
                          coinIcon={config.coinIcon}
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
                          coinIcon={config.coinIcon}
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            </div>
          )}

          {/* Remaining Leaderboard */}
          {!isLoading && !error && data && data.participants.length > 3 && (
            <div className="bg-gradient-card rounded-lg p-6 animate-slide-up hover-lift max-w-6xl mx-auto">
              {isLoading ? (
                <div className="space-y-2">
                  {Array.from({ length: 7 }).map((_, index) => (
                    <LeaderboardRowSkeleton key={index} />
                  ))}
                </div>
              ) : (
                <LeaderboardTable 
                  data={data.participants.slice(3)} 
                  startFromRank={4} 
                  coinIcon={config.coinIcon} 
                />
              )}
            </div>
          )}

          {/* Footer */}
          <div className="text-center mt-12 text-muted-foreground">
            <a href="https://wlfyzz.net" target="_blank" rel="noopener noreferrer" className="text-sm">
              made with ♥ by wlfyzz.net
            </a>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default PrevLeaderboard;