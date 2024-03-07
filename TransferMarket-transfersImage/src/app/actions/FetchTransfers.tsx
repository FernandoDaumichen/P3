'use client';
import { useState, useEffect, useCallback } from 'react';

interface TransferFee {
  value: string;
  currency: string;
  progression: null | string;
}

interface Transfer {
  id: string;
  playerID: string;
  fromClubID: string;
  toClubID: string;
  transferredAt: number;
  isLoan: null | boolean;
  wasLoan: null | boolean;
  season: string;
  fromCompetitionID: string;
  toCompetitionID: string;
  transferFee: TransferFee;
  transferMarketValue: TransferFee;
}

interface TransfersResponse {
  data: Transfer[];
}

export default function useFetchTransfers() {
  const [transfers, setTransfers] = useState<Transfer[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // This callback will fetch the transfer data
  const fetchData = useCallback(async () => {
    const url = "https://transfermarkt-db.p.rapidapi.com/v1/transfers/list?locale=US&top_transfers_first=true&page_number=0";
    const API_KEY = process.env.NEXT_PUBLIC_TRANSFERMARKT_DB;

    if (!API_KEY) {
      console.error('API key is not defined');
      setError('API key is not defined');
      return;
    }

    const options = {
      method: "GET",
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'transfermarkt-db.p.rapidapi.com'
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
      const result: TransfersResponse = await response.json();
      setTransfers(result.data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  }, []);

  // Effect to initiate the fetch when the component using this hook is mounted
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { transfers, error };
}
// return ( 
//     <div>
//       <h1>Api Status</h1>
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//       {error && <p>{error}</p>}
//     </div>
// )




