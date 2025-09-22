import { useQuery } from "@tanstack/react-query";

interface LeaderboardEntry {
  name: string;
  wager: string;
  prize: string;
  avatar: string;
}
interface RainData {
  participants: LeaderboardEntry[];
  ends_at: string;
}

const fetchLeaderboard = async (): Promise<RainData> => {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout
  
  try {
    const response = await fetch("https://api.wlfyzz.net/radio/clash", {
      signal: controller.signal,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    
    clearTimeout(timeoutId);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json();
    return {
      participants: data.participants || [],
      ends_at: data.ends_at
    };
  } catch (error: any) {
    clearTimeout(timeoutId);
    
    if (error.name === 'AbortError') {
      throw new Error('Request timed out. Please check your connection.');
    } else if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your internet connection.');
    } else {
      throw new Error('Failed to load leaderboard data. Please try again later.');
    }
  }
};

export const useClashLeaderboard = () => {
  return useQuery({
    queryKey: ["clash-leaderboard"],
    queryFn: fetchLeaderboard,
    refetchInterval: 15 * 60 * 1000, // Refetch every 15 minutes
    refetchIntervalInBackground: true,
    retry: (failureCount, error) => {
      // Don't retry on certain errors
      if (error.message.includes('timeout') || error.message.includes('Network error')) {
        return failureCount < 3;
      }
      return failureCount < 2;
    },
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000), // Exponential backoff
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
  });
};