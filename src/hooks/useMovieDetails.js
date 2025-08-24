import { useEffect, useState } from "react";
import api from "../services/api";

const useMovieDetails = (movieId) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!movieId) return;

        const fetchDetails = async () => {
            setLoading(true);
            setError(null);
            
            try {
                const data = await api.fetchMovieDetails(movieId);
                setDetails(data);
            } catch (error) {
                console.error('Erro ao carregar detalhes do filme:', error);
                setError("Erro ao carregar detalhes do filme.");
            } finally {
                setLoading(false);
            }
        };

        fetchDetails();
    }, [movieId]);

    const refetch = () => {
        if (movieId) {
            setDetails(null);
        }
    };

    return {
        details,
        loading,
        error,
        refetch,
    };
};

export default useMovieDetails;