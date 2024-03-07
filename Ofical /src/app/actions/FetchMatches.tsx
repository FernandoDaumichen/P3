
'use client';
import { useState, useEffect, useCallback } from 'react';


interface Match {
  infoOf: string;
  teamA: string;
  teamB: string;
  teamAResult: string;
  teamBResult: string;
  teamALogo: string;
  teamBLogo: string;
  liveStatus: string;
  over: boolean;
  live: boolean;
  startIn: string;
  matchId: string;
}

interface Competition {
  competition: string;
  competitionLogo: string;
  matchDay: string;
  match: Match[];
  id: string;
}
interface MatchesResponse {
  length: number;
  map(arg0: (competition: Competition) => import("react").JSX.Element): import("react").ReactNode;
  data?: Competition[]; 
  error?: string;
}

export default function FetchTransfers ()  {
  const [data, setData] = useState<MatchesResponse | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const url = `https://football-results-of-today.p.rapidapi.com/today`;
    const API_KEY = process.env.NEXT_PUBLIC_FOOTBALL_RESULTS;
    if (!API_KEY) {
      console.error('API key is not defined');
      setError('API key is not defined');
      return;
  }
    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key':API_KEY ,
        'X-RapidAPI-Host': 'football-results-of-today.p.rapidapi.com'
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
      const result: MatchesResponse = await response.json();
      setData(result); 
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      }
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, error };
// return ( 
//     <div>
    //   <h1>Api Status</h1>
    //   {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    //   {error && <p>{error}</p>}
    // </div>
// )

};

