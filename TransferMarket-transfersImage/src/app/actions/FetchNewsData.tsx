import { useState, useEffect, useCallback } from 'react';
import debounce from '@/utils/debounce';

// Define interfaces for the expected API response structure
interface NewsItem {
  id: number;
  publishDate: string;
  sourceId: number;
  title: string;
  image: string;
  url: string;
  isMagazine: boolean;
}

interface ApiResponse {
  news: NewsItem[];
  newsSources: {
    id: number;
    name: string;
    imageVersion: number;
  }[];
}

const useFetchNewsData = () => {
    // Use the ApiResponse interface to type the data state
    const [data, setData] = useState<ApiResponse | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        const url = "https://allscores.p.rapidapi.com/api/allscores/news?sport=1&timezone=America%2FChicago&langId=1";
        const API_KEY = process.env.NEXT_PUBLIC_ALL_SCORES;
        if (!API_KEY) {
          console.error('API key is not defined');
          setError('API key is not defined');
          return;
      }
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": API_KEY ,
                "X-RapidAPI-Host": "allscores.p.rapidapi.com",
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

export default useFetchNewsData;
