import axios from "axios";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjIwMGNhYmFjY2YyNGY2OWRlZjJiMjU1MDdjNDdiZiIsIm5iZiI6MTc1NDc0ODczNi4xNTIsInN1YiI6IjY4OTc1NzQwYmU3MjAzZjIzNDJjMGMxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BIx_inAJcp4xmkV-Hod0ImJIutAhBb3OIGH68dKUjQo';


class MovieApi {
    constructor() {
        this.baseUrl = API_BASE_URL;
        this.headers = {
            accept: 'application/json',
            Authorization: `Bearer ${BEARER_TOKEN}`
        }

    }
    async fetchPopularMovies(page = 1) {
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

    async fetchNowPlayingMovies(page = 1) {
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

    async fetchTopRatedMovies(page = 1) {
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

    async fetchUpcomingMovies(page = 1) {
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

    async searchMovies(query, page = 1) {
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

    async fetchMovieDetails(movieId) {
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