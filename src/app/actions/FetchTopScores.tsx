import { useEffect, useState, useCallback } from 'react';
import debounce from '@/utils/debounce';

interface ApiResponse {
    errors: any; // You might want to specify the structure more precisely if you know the possible error formats
    results: number;
    paging: {
      current: number;
      total: number;
    };
    response: PlayerTopScorer[];
  }
  
  interface PlayerTopScorer {
    player: PlayerDetails;
    statistics: PlayerStatistics[];
  }
  
  interface PlayerDetails {
    id: number;
    name: string;
    firstname: string;
    lastname: string;
    age: number;
    birth: {
      date: string;
      place: string;
      country: string;
    };
    nationality: string;
    height: string;
    weight: string;
    injured: boolean;
    photo: string;
  }
  
  interface PlayerStatistics {
    team: TeamDetails;
    league: LeagueDetails;
    games: GameStatistics;
    shots: ShotStatistics;
    goals: GoalStatistics;
    passes: PassStatistics;
    tackles: TackleStatistics;
    duels: DuelStatistics;
    dribbles: DribbleStatistics;
    fouls: FoulStatistics;
    cards: CardStatistics;
    penalty: PenaltyStatistics;
  }
  
  interface TeamDetails {
    id: number;
    name: string;
    logo: string;
  }
  
  interface LeagueDetails {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  }
  
  interface GameStatistics {
    appearences: number;
    lineups: number;
    minutes: number;
    number: null | number;
    position: string;
    rating: string;
    captain: boolean;
    substitutes: {
      in: number;
      out: number;
      bench: number;
    };
  }
  
  interface ShotStatistics {
    total: number;
    on: number;
  }
  
  interface GoalStatistics {
    total: number;
    conceded: number;
    assists: number;
    saves: null | number;
  }
  
  interface PassStatistics {
    total: number;
    key: number;
    accuracy: string;
  }
  
  interface TackleStatistics {
    total: number;
    blocks: number;
    interceptions: number;
  }
  
  interface DuelStatistics {
    total: number;
    won: number;
  }
  
  interface DribbleStatistics {
    attempts: number;
    success: number;
    past: null | number;
  }
  
  interface FoulStatistics {
    drawn: number;
    committed: number;
  }
  
  interface CardStatistics {
    yellow: number;
    yellowred: number;
    red: number;
  }
  
  interface PenaltyStatistics {
    won: null | number;
    commited: null | number;
    scored: number;
    missed: number;
    saved: null | number;
  }

  
//braA1=71
export const useFetchBraA1TopScores= () => {
    const [data3, setData] = useState<ApiResponse | null>(null);
    const [error3, setError] = useState<string | null>(null);



    const fetchData = useCallback(async () => {
        const url = "https://api-football-beta.p.rapidapi.com/players/topscorers?season=2023&league=71";
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

    // console.log(data3);
    return { data3, error3};
};

//premier league

export const useFetchPremierTopScores= () => {
    const [data3, setData] = useState<ApiResponse | null>(null);
    const [error3, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        const url = "https://api-football-beta.p.rapidapi.com/players/topscorers?season=2023&league=39";
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

    // console.log(data3);
    return { data3, error3};
}


//Champions league
export const useFetchChampionsTopScores= () => {
const [data3, setData] = useState<ApiResponse | null>(null);
const [error3, setError] = useState<string | null>(null);

const fetchData = useCallback(async () => {
    const url = "https://api-football-beta.p.rapidapi.com/players/topscorers?season=2023&league=2";
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


}

//libertadores=113

export const useFetchLibertadoresTopScores= () => {
const [data3, setData] = useState<ApiResponse | null>(null);
const [error3, setError] = useState<string | null>(null);

const fetchData = useCallback(async () => {
    const url = "https://api-football-beta.p.rapidapi.com/players/topscorers?season=2023&league=113";
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
}
