import { useEffect, useState } from "react";
import api from "../services/api";

const useMovies = () => {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchMovies = async (fetchFunction, setMovies) => {
        try {
            const data = await fetchFunction();
            setMovies(data.results || []);
        } catch (error) {
            console.error('Erro ao carregar filmes:', error);
            setError('Erro ao carregar filmes. Tente novamente.');
            throw error;
        }
    };

    useEffect(() => {
        const loadAllMovies = async () => {
            try {
                setLoading(true);
                setError(null);

                await Promise.all([
                    fetchMovies(api.fetchPopularMovies, setPopularMovies),
                    fetchMovies(api.fetchNowPlayingMovies, setNowPlayingMovies),
                    fetchMovies(api.fetchTopRatedMovies, setTopRatedMovies),
                    fetchMovies(api.fetchUpcomingMovies, setUpcomingMovies),
                ]);
            } catch (error) {
                // Error já foi setado na função fetchMovies
            } finally {
                setLoading(false);
            }
        };

        loadAllMovies();
    }, []);

    const getMoviesByCategory = (category) => {
        const categoryMap = {
            popular: popularMovies,
            nowPlaying: nowPlayingMovies,
            topRated: topRatedMovies,
            upcoming: upcomingMovies,
        };
        return categoryMap[category] || [];
    };

    return {
        movies: {
            nowPlaying: nowPlayingMovies,
            popular: popularMovies,
            topRated: topRatedMovies,
            upcoming: upcomingMovies,
        },
        loading,
        error,
        getMoviesByCategory,
    };
};

export default useMovies;