import axios from "axios";

const API_BASE_URL = 'https://api.themoviedb.org/3';
const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMjIwMGNhYmFjY2YyNGY2OWRlZjJiMjU1MDdjNDdiZiIsIm5iZiI6MTc1NDc0ODczNi4xNTIsInN1YiI6IjY4OTc1NzQwYmU3MjAzZjIzNDJjMGMxMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BIx_inAJcp4xmkV-Hod0ImJIutAhBb3OIGH68dKUjQo';

// Headers padrão para todas  requisições
const defaultHeaders = {
    accept: 'application/json',
    Authorization: `Bearer ${BEARER_TOKEN}`
};

// Função para buscar filmes populares
export const fetchPopularMovies = async (page = 1) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
            headers: defaultHeaders,
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
};

// Função para buscar filmes em cartaz (now playing)
export const fetchNowPlayingMovies = async (page = 1) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/now_playing`, {
            headers: defaultHeaders,
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
};

// Função para buscar filmes mais bem avaliados
export const fetchTopRatedMovies = async (page = 1) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/top_rated`, {
            headers: defaultHeaders,
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
};

// Função para buscar próximos lançamentos
export const fetchUpcomingMovies = async (page = 1) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/upcoming`, {
            headers: defaultHeaders,
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
};

// Função para pesquisar filmes
export const searchMovies = async (query, page = 1) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/search/movie`, {
            headers: defaultHeaders,
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
};

// Função para buscar detalhes de um filme específico
export const fetchMovieDetails = async (movieId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/${movieId}`, {
            headers: defaultHeaders,
            params: {
                language: 'pt-BR'
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Erro ao buscar detalhes do filme ${movieId}:`, error);
        throw error;
    }
};

// Função para buscar gêneros de filmes
export const fetchMovieGenres = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/genre/movie/list`, {
            headers: defaultHeaders,
            params: {
                language: 'pt-BR'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Erro ao buscar gêneros:', error);
        throw error;
    }
};

// Função para gerar URL completa da imagem
export const getImageUrl = (imagePath, size = 'w500') => {
    if (!imagePath) return null;
    return `https://image.tmdb.org/t/p/${size}${imagePath}`;
};

// Para manter compatibilidade com seu código atual
export const fetchUserData = fetchPopularMovies;