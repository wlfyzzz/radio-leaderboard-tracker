import { ErrorBoundary } from "@/components/ErrorBoundary";
import { Button } from "@/components/ui/button";
import { CountdownTimer } from "@/components/CountdownTimer";
import FairPlayNotice from "@/components/FairPlayNotice";
import { TrendingUp, Lock } from "lucide-react";
import { Link } from "react-router-dom";
import skinraveLogo from "@/assets/skinrave.svg";
import clashLogo from "@/assets/clash.png";
import csgoldLogo from "@/assets/csgold.svg";
import csgowinLogo from "@/assets/csgowin.png";
import csgobigLogo from "@/assets/csgobig.png";

const Csgobig = () => {
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
                <Link to="/clash" className="group">
                  <img 
                    src={clashLogo} 
                    alt="Clash.gg" 
                    className="h-16 md:h-24 w-auto transition-all duration-300 opacity-40 hover:opacity-100 drop-shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:drop-shadow-[0_0_35px_rgba(249,115,22,0.8)] hover:scale-105" 
                  />
                </Link>
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
                <div className="relative group">
                  <img 
                    src={csgobigLogo} 
                    alt="CSGOBig" 
                    className="h-16 md:h-24 w-auto transition-all duration-300 drop-shadow-[0_0_35px_rgba(255,193,7,0.8)] hover:drop-shadow-[0_0_50px_rgba(255,152,0,1)] hover:scale-105" 
                  />
                </div>
              </div>

              <div className="flex justify-center items-center gap-4 mb-8">
                <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-primary bg-clip-text text-transparent animate-bounce-in drop-shadow-2xl">
                  CSGOBig Leaderboard
                </h1>
              </div>
              
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
                Track the top performers in our CSGOBig competition
              </p>

              <div className="mb-6 p-6 glass-card rounded-xl hover-lift max-w-2xl mx-auto">
                <p className="text-center text-foreground text-lg font-medium">
                  Use code{" "}
                  <a 
                    href="https://csgobig.com/r/radiobtw" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="font-extrabold text-gaming-orange bg-gaming-orange/15 px-4 py-2.5 rounded-lg border-2 border-gaming-orange/40 hover:bg-gaming-orange hover:text-gaming-dark transition-all duration-300 underline decoration-2 underline-offset-4 hover-lift inline-flex items-center gap-2 shadow-lg"
                  >
                    radiobtw
                  </a>{" "}
                  to participate
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <CountdownTimer 
                  endDate="2025-10-28T20:00:00-04:00" 
                  title="Competition Launches in"
                />
              </div>

              <div className="flex justify-center mb-8">
                <Button asChild variant="outline" className="hover-lift border-2 border-gaming-orange/30 hover:border-gaming-orange hover:bg-gaming-orange/10 font-semibold text-base px-6 py-3">
                  <Link to="/prev-leaderboard/csgobig">
                    Previous Leaderboard
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Coming Soon Section */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-10 gap-3">
              <div className="h-1 w-12 bg-gradient-primary rounded-full"></div>
              <TrendingUp className="w-7 h-7 text-gaming-orange" />
              <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-primary bg-clip-text text-transparent">Top Performers</h2>
              <TrendingUp className="w-7 h-7 text-gaming-orange" />
              <div className="h-1 w-12 bg-gradient-primary rounded-full"></div>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative p-12 border-2 border-gaming-border/20 bg-gradient-card rounded-lg backdrop-blur-lg">
                <div className="text-center space-y-6">
                  <Lock className="w-16 h-16 mx-auto text-gaming-orange opacity-50" />
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
                    Coming Soon
                  </h3>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    The CSGOBig leaderboard will be available when the competition launches on October 28th, 2025 at 8pm EST
                  </p>
                </div>
              </div>
            </div>
          </div>

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

export default Csgobig;
