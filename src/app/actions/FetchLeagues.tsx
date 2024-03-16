import { useState, useEffect, useCallback } from 'react';
import debounce from '@/utils/debounce';
export interface TeamStanding {
    rank: number;
  position: number;
  teamName: string;
  playedGames: number;
  wins: number;
  draws: number;
  losses: number;
  points: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
}

export interface LeagueStandings {
  season: string;
  leagueName: string;
  standings: TeamStanding[]; // An array of TeamStanding
}

export interface ApiResponse {
  response: {
    league: {
      standings: TeamStanding[];
    }
  }[];
}
//braA1=71
export const useFetchBraA1= () => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
      const url = 'https://api-football-beta.p.rapidapi.com/standings?season=2023&league=71';
      const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_API;
        if (!API_KEY) {
          console.error('API key is not defined');
          setError('API key is not defined');
          return;
      }
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": API_KEY ,
                "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                const errorMessage = response.status === 401 ? "Unauthorized: Check if the API key is correct."
                                : response.status === 429 ? "Too Many Requests: You have hit the rate limit. Please try again later."
                                : `HTTP error! status: ${response.status}`;
                throw new Error(errorMessage);
            }
            const result = await response.json();
            // Ensure to validate or adjust this according to the actual structure of your API response
            setData(result); 
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        }
    }, []);

    useEffect(() => {
        const debouncedFetchData = debounce(fetchData, 1000);
        debouncedFetchData();
    }, [fetchData]);

    
    return { data, error };
};




//premier league=39
export const useFetchPremier= () => {
    const [data, setData] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
      const url = 'https://api-football-beta.p.rapidapi.com/standings?season=2023&league=39';
      const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_APIF;
        if (!API_KEY) {
          console.error('API key is not defined');
          setError('API key is not defined');
          return;
      }
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": API_KEY ,
                "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
            },
        };

        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                const errorMessage = response.status === 401 ? "Unauthorized: Check if the API key is correct."
                                : response.status === 429 ? "Too Many Requests: You have hit the rate limit. Please try again later."
                                : `HTTP error! status: ${response.status}`;
                throw new Error(errorMessage);
            }
            const result = await response.json();
            // Ensure to validate or adjust this according to the actual structure of your API response
            setData(result); 
        } catch (error) {
            if (error instanceof Error) {
                setError(error.message);
            }
        }
    }, []);

    useEffect(() => {
        const debouncedFetchData = debounce(fetchData, 1000);
        debouncedFetchData();
    }, [fetchData]);

    
    return { data, error };
};

//libertadores=13
export const useFetchLibertadores= () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const url = 'https://api-football-beta.p.rapidapi.com/standings?season=2023&league=13';
    const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_APIF;
      if (!API_KEY) {
        console.error('API key is not defined');
        setError('API key is not defined');
        return;
    }
      const options = {
          method: "GET",
          headers: {
              "X-RapidAPI-Key": API_KEY ,
              "X-RapidAPI-Host": "api-football-beta.p.rapidapi.com",
          },
      };

      try {
          const response = await fetch(url, options);
          if (!response.ok) {
              const errorMessage = response.status === 401 ? "Unauthorized: Check if the API key is correct."
                              : response.status === 429 ? "Too Many Requests: You have hit the rate limit. Please try again later."
                              : `HTTP error! status: ${response.status}`;
              throw new Error(errorMessage);
          }
          const result = await response.json();
          // Ensure to validate or adjust this according to the actual structure of your API response
          setData(result); 
      } catch (error) {
          if (error instanceof Error) {
              setError(error.message);
          }
      }
  }, []);

  useEffect(() => {
      const debouncedFetchData = debounce(fetchData, 1000);
      debouncedFetchData();
  }, [fetchData]);

  
  return { data, error };
};
