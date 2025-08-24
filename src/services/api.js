import axios from "axios";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const BEARER_TOKEN = import.meta.env.VITE_BEARER_TOKEN;


class MovieApi {
    constructor() {
        this.baseUrl = API_BASE_URL;
        this.headers = {
            accept: 'application/json',
            Authorization: `Bearer ${BEARER_TOKEN}`
        }

    }
    fetchPopularMovies = async (page = 1) => {
        try {
            const response = await axios.get(`${this.baseUrl}/movie/popular`, {
                headers: this.headers,
                params: {
                    language: 'pt-BR',
                    page: page
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar filmes populares:', error);
            throw error;
        }
    }

    fetchNowPlayingMovies = async (page = 1) => {
        try {
            const response = await axios.get(`${this.baseUrl}/movie/now_playing`, {
                headers: this.headers,
                params: {
                    language: 'pt-BR',
                    page: page
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar filmes em cartaz:', error);
            throw error;
        }
    }

    fetchTopRatedMovies = async (page = 1) => {
        try {
            const response = await axios.get(`${this.baseUrl}/movie/top_rated`, {
                headers: this.headers,
                params: {
                    language: 'pt-BR',
                    page: page
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar filmes mais bem avaliados:', error);
            throw error;
        }
    }

    fetchUpcomingMovies = async (page = 1) => {
        try {
            const response = await axios.get(`${this.baseUrl}/movie/upcoming`, {
                headers: this.headers,
                params: {
                    language: 'pt-BR',
                    page: page
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao buscar próximos lançamentos:', error);
            throw error;
        }
    }

    searchMovies = async (query, page = 1) => {
        try {
            const response = await axios.get(`${this.baseUrl}/search/movie`, {
                headers: this.headers,
                params: {
                    language: 'pt-BR',
                    query: query,
                    page: page
                }
            });
            return response.data;
        } catch (error) {
            console.error('Erro ao pesquisar filmes:', error);
            throw error;
        }
    }

    fetchMovieDetails = async (movieId) => {
        try {
            const response = await axios.get(`${this.baseUrl}/movie/${movieId}`, {
                headers: this.headers,
                params: {
                    language: 'pt-BR'
                }
            });
            return response.data;
        } catch (error) {
            console.error(`Erro ao buscar detalhes do filme ${movieId}:`, error);
            throw error;
        }
    }
    getImageUrl(imagePath, size = 'w500') {
        if (!imagePath) return null;
        return `https://image.tmdb.org/t/p/${size}${imagePath}`;
    }
}





export default new MovieApi()