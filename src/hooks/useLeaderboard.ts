import { useQuery } from "@tanstack/react-query";

interface LeaderboardEntry {
  name: string;
  wager: string;
  prize: string;
  avatar: string;
}

const fetchLeaderboard = async (): Promise<LeaderboardEntry[]> => {
  const response = await fetch("https://api.wlfyzz.net/leaderboard/radio");
  
  if (!response.ok) {
    throw new Error("Failed to fetch leaderboard data");
  }
  
  const data = await response.json();
  return data;
};

export const useLeaderboard = () => {
  return useQuery({
    queryKey: ["leaderboard"],
    queryFn: fetchLeaderboard,
    refetchInterval: 15 * 60 * 1000, // Refetch every 15 minutes
    refetchIntervalInBackground: true,
  });
};