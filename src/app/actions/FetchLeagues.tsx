import { useState, useEffect, useCallback } from 'react';
import debounce from '@/utils/debounce';

const useFetchLeague = () => {
  const [imageUrl, setImageUrl] = useState(null); // Store the image URL
  const [error, setError] = useState<string | null>(null);

  const fetchData = useCallback(async () => {
    const url = "https://sportapi7.p.rapidapi.com/api/v1/unique-tournament/7/image/light";
    const API_KEY = process.env.NEXT_PUBLIC_ALL_SCORES;
    if (!API_KEY) {
      console.error('API key is not defined');
      setError('API key is not defined');
      return;
    }
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": API_KEY,
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
      const imageUrl = await response.json(); // Assuming the response is directly the URL
      setImageUrl(imageUrl); // Update state with the image URL
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

  return { imageUrl, error };
};

export default useFetchLeague;
