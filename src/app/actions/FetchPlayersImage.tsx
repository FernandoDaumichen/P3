'use client';
import { useState, useEffect, useCallback } from 'react';


interface TransferFee {
  value: string;
  currency: string;
  progression?: string | null;
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
  image?: string;
}

interface ImagesResponse {
  data: Transfer[];
}

// Default playerIDs to an empty array if no value is passed
export default function useFetchImages(playerIDs: string[] = []) {
  const [images, setImages] = useState<Transfer[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    // Check if playerIDs is defined and is an array
    if (!Array.isArray(playerIDs) || playerIDs.length === 0) {
      setImages([]);
      return;
    }

    const playerIDsParam = playerIDs.join('%2C');
    const url = `https://transfermarkt-db.p.rapidapi.com/v1/players/images?player_ids=${playerIDsParam}&locale=WORLD`;
    const API_KEY = process.env.NEXT_PUBLIC_TRANSFERMARKT_DB;
    console.log("Fetching from URL:", url)

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
      const result: ImagesResponse = await response.json();
      setImages(result.data);
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      }
    }
  }, [playerIDs.join(',')]); // Dependency on the concatenated playerIDs

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { images, error };
}
