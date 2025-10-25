import { useQuery } from "@tanstack/react-query";

interface LeaderboardEntry {
  name: string;
  wager: number;
  prize: number;
  avatar?: string;
}

export const useCsgobigLeaderboard = () => {
  return useQuery({
    queryKey: ["csgobig-leaderboard"],
    queryFn: async (): Promise<LeaderboardEntry[]> => {
      // Return empty array for coming soon page
      return [];
    },
    refetchInterval: 30000,
  });
};
