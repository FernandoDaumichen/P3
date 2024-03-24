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



  // Adjusted interfaces
  interface ArticleImage {
    url: string;
    caption?: string;
    width: number;
    height: number;
  }
  
  interface ArticleLink {
    href: string;
  }
  
  export interface Article {
    headline: string;
    description: string;
    images: ArticleImage[];
    links: {
      web: ArticleLink;
    };
  }
  
  interface ApiResponse {
    articles: Article[];
  }
  
  export const useFetchNewsDataBraA1 = () => {
      const [data2, setData] = useState<ApiResponse | null>(null);
      const [error2, setError] = useState<string | null>(null);
  
      const fetchData = useCallback(async () => {
          const url = "https://site.api.espn.com/apis/site/v2/sports/soccer/Bra.1/news";
  
          try {
              const response = await fetch(url);
              if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
              }
              const result: ApiResponse = await response.json();
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
  
      return { data2, error2 };
  };
  

  //premier league
  export const useFetchNewsDataPremier = () => {
    const [data2, setData] = useState<ApiResponse | null>(null);
    const [error2, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        const url = "https://site.api.espn.com/apis/site/v2/sports/soccer/Eng.1/news";

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result: ApiResponse = await response.json();
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

    return { data2, error2 };
};

//champions league
export const useFetchNewsDataChampions = () => {
    const [data2, setData] = useState<ApiResponse | null>(null);
    const [error2, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        const url = "https://site.api.espn.com/apis/site/v2/sports/soccer/uefa.champions/news";

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result: ApiResponse = await response.json();
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

    return { data2, error2 };
};

//libertadores

export const useFetchNewsDataLibertadores = () => {
    const [data2, setData] = useState<ApiResponse | null>(null);
    const [error2, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        const url = "https://site.api.espn.com/apis/site/v2/sports/soccer/conmebol.libertadores/news";

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result: ApiResponse = await response.json();
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

    return { data2, error2 };
}
  
  