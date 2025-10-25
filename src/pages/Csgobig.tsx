import { useNavigate } from "react-router-dom";
import { CountdownTimer } from "@/components/CountdownTimer";
import csgobigLogo from "@/assets/csgobig.png";
import skinraveLogo from "@/assets/skinrave.svg";
import clashLogo from "@/assets/clash.png";
import csgoldLogo from "@/assets/csgold.svg";
import csgowinLogo from "@/assets/csgowin.png";

const Csgobig = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="flex items-center justify-between mb-8 gap-4">
          <img
            src={csgobigLogo}
            alt="CSGOBig"
            className="h-12 w-auto transition-all duration-300 drop-shadow-[0_0_15px_rgba(255,193,7,0.5)] drop-shadow-[0_0_30px_rgba(255,152,0,0.3)]"
          />
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="group relative p-2 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <img
                src={skinraveLogo}
                alt="Skinrave"
                className="h-8 w-auto opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]"
              />
            </button>
            <button
              onClick={() => navigate("/clash")}
              className="group relative p-2 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <img
                src={clashLogo}
                alt="Clash"
                className="h-8 w-auto opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]"
              />
            </button>
            <button
              onClick={() => navigate("/csgold")}
              className="group relative p-2 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <img
                src={csgoldLogo}
                alt="CSGold"
                className="h-8 w-auto opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(234,179,8,0.8)]"
              />
            </button>
            <button
              onClick={() => navigate("/csgowin")}
              className="group relative p-2 rounded-lg transition-all duration-300 hover:scale-110"
            >
              <img
                src={csgowinLogo}
                alt="CSGOWin"
                className="h-8 w-auto opacity-50 group-hover:opacity-100 transition-all duration-300 group-hover:drop-shadow-[0_0_10px_rgba(249,115,22,0.8)]"
              />
            </button>
          </div>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-8 animate-fade-in mt-20">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-yellow-500 via-orange-500 to-yellow-600 bg-clip-text text-transparent">
              Coming Soon
            </h1>
            <p className="text-xl text-muted-foreground">
              CSGOBig leaderboard is launching soon! Stay tuned for exciting competitions.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <CountdownTimer 
              endDate="2025-10-28T20:00:00-04:00" 
              title="Launches in"
            />
          </div>

          <div className="mt-12 p-6 bg-card/50 border border-border rounded-lg backdrop-blur-sm">
            <p className="text-sm text-muted-foreground">
              Get ready for competitive wagering and exclusive prizes when we launch!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Csgobig;
