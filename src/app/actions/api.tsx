'use client'
import React, { useEffect, useState, useCallback } from "react";
import debounce from "@/utils/debounce";

const ApiStatus = () => {
  const [data, setData] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);2

  const fetchData = useCallback(async () => {
    const url = 'https://allscores.p.rapidapi.com/api/allscores/news?sport=1&timezone=America%2FChicago&langId=1  ';
    
    // const API_KEY = process.env.RAPIDAPI_KEY ;

    // if (!API_KEY) {
    //   setError('API key is not set.');
    //   return;
    // }
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'ee75c3cc9dmsha7e377714a18573p11f471jsn38c6ba464127',
        'X-RapidAPI-Host': 'allscores.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        const errorMessage = response.status === 401 ? 'Unauthorized: Check if the API key is correct.' :
                             response.status === 429 ? 'Too Many Requests: You have hit the rate limit. Please try again later.' :
                             `HTTP error! status: ${response.status}`;
        throw new Error(errorMessage);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      if (error instanceof Error) {
        console.error('Fetch error:', error);
        setError(error.message);
      }
    }
  }, []);

  const debouncedFetchData = useCallback(debounce(fetchData, 1000), [fetchData]);

  useEffect(() => {
    debouncedFetchData();
  }, [debouncedFetchData]); 

  return (
    <div>
      <h1>Api Status</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ApiStatus;
