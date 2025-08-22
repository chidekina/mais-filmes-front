import { useEffect, useState } from "react";
import api from "../../services/api";
import MainContainer from "../../components/MainContainer";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import ErrorMessage from "../../components/ErrorMessage";
import MoviesSection from "../../components/MoviesSection";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("popular");
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    const [popularMovies, setPopularMovies] = useState([]);
    const [topRatedMovies, setTopRatedMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [minLoading, setMinLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getPopularMovies = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await api.fetchPopularMovies();

                setPopularMovies(data.results || []);
            } catch (error) {
                console.error('Erro ao carregar filmes:', error);
                setError('Erro ao carregar filmes. Tente novamente.');
            } finally {
                setLoading(false);
            }
        };

        const getNowPlayingMovies = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await api.fetchNowPlayingMovies();

                setNowPlayingMovies(data.results || []);
            } catch (error) {
                console.error('Erro ao carregar filmes:', error);
                setError('Erro ao carregar filmes. Tente novamente.');
            } finally {
                setLoading(false);
            }
        };

        const getTopRatedMovies = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await api.fetchTopRatedMovies();

                setTopRatedMovies(data.results || []);
            } catch (error) {
                console.error('Erro ao carregar filmes:', error);
                setError('Erro ao carregar filmes. Tente novamente.');
            } finally {
                setLoading(false);
            }
        };

        const getUpcomingMovies = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await api.fetchUpcomingMovies();

                setUpcomingMovies(data.results || []);
            } catch (error) {
                console.error('Erro ao carregar filmes:', error);
                setError('Erro ao carregar filmes. Tente novamente.');
            } finally {
                setLoading(false);
            }
        };

        getUpcomingMovies();
        getNowPlayingMovies();
        getTopRatedMovies();
        getPopularMovies();
    }, []);

    let moviesToShow = [];
    if (selectedCategory === "popular") moviesToShow = popularMovies;
    if (selectedCategory === "nowPlaying") moviesToShow = nowPlayingMovies;
    if (selectedCategory === "topRated") moviesToShow = topRatedMovies;
    if (selectedCategory === "upcoming") moviesToShow = upcomingMovies;

    // Busca na API quando o usuário digita
    useEffect(() => {
        const fetchSearch = async () => {
            if (!search) {
                setSearchResults([]);
                setSearchLoading(false);
                return;
            }
            try {
                const data = await api.searchMovies(search);
                setSearchResults(data.results || []);
            } catch (error) {
                setSearchResults([]);
            } finally {
                setSearchLoading(false);
            }
        };
        fetchSearch();
    }, [search]);

    const moviesToDisplay = search ? searchResults : moviesToShow;

    if ((loading || minLoading) && !search) {
        return (
            <MainContainer>
                <Loading onFinish={() => setMinLoading(false)} />
            </MainContainer>
        );
    }

    if (searchLoading) {
        return (
            <MainContainer>
                <Loading />
            </MainContainer>
        );
    }

    if (error) {
        return (
            <MainContainer>
                <ErrorMessage error={error} onRetry={() => window.location.reload()} />
            </MainContainer>
        );
    }

    return (
        <MainContainer>
            <PageHeader search={search} setSearch={setSearch} />
            <MoviesSection
                selectedCategory={selectedCategory}
                setSelectedCategory={setSelectedCategory}
                moviesToDisplay={moviesToDisplay}
                getImageUrl={api.getImageUrl}
                onMovieClick={id => navigate(`/filme/${id}`)}
            />
        </MainContainer>
    );
};

export default Home;