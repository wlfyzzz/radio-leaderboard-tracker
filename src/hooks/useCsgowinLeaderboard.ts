import { useQuery } from "@tanstack/react-query";

interface LeaderboardEntry {
  name: string;
  wager: number;
  prize: number;
  avatar: string;
}

interface RainData {
  participants: LeaderboardEntry[];
  ends_at: string;
}

async function fetchLeaderboard(): Promise<RainData> {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const response = await fetch("https://api.wlfyzz.net/radio/csgowin", {
      signal: controller.signal,
      headers: {
        "Content-Type": "application/json",
      },
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    if (error.name === "AbortError") {
      throw new Error("Request timeout - please check your connection");
    }
    throw new Error(error.message || "Failed to fetch leaderboard data");
  }
}

export const useCsgowinLeaderboard = () => {
  return useQuery({
    queryKey: ["csgowin-leaderboard"],
    queryFn: fetchLeaderboard,
    refetchInterval: 15 * 60 * 1000,
    retry: 2,
    retryDelay: (attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000),
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });
};
