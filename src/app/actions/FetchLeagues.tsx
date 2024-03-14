import { useState, useEffect, useCallback } from 'react';
import debounce from '@/utils/debounce';

// Define interfaces for the expected API response structure
interface Time {
  time_id: number;
  nome_popular: string;
  sigla: string;
  escudo: string;
}

interface GrupoItem {
  posicao: number;
  pontos: number;
  time: Time;
  jogos: number;
  vitorias: number;
  empates: number;
  derrotas: number;
  gols_pro: number;
  gols_contra: number;
  saldo_gols: number;
  aproveitamento: number;
  variacao_posicao: number;
  ultimos_jogos: string[];
}
interface BraA1 {
  "Campeonato Brasileiro": {
    "gFase Única": GrupoItem[];
  };
}


const useFetchBra = () => {
    // Use the ApiResponse interface to type the data state
    const [data, setData] = useState<BraA1 | null>(null);
    const [error, setError] = useState<string | null>(null);

    const fetchData = useCallback(async () => {
        const url = "https://api.api-futebol.com.br/v1/campeonatos/10/fases/317 ";
        const API_KEY ='live_af8d45c63929b1b080bde69442268d';
        if (!API_KEY) {
          console.error('API key is not defined');
          setError('API key is not defined');
          return;
      }
        const options = {
            method: "GET",
            headers: {
              "Authorization": `Bearer ${API_KEY}`,
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
//     return ( 
//     <div>
//       <h1>Api Status</h1>
//       {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
//       {error && <p>{error}</p>}
//     </div>
// )
};

export default useFetchBra;
