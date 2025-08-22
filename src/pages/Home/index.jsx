import { useEffect, useState } from "react";
import { fetchNowPlayingMovies, fetchPopularMovies, fetchTopRatedMovies, fetchUpcomingMovies, getImageUrl } from "../../services/api";
import MainContainer from "../../components/MainContainer";
import WelcomeTitle from "../../components/WelcomeTitle";
import CategoryTitle from "../../components/CategoryTitle";
import SearchBar from "../../components/SearchBar";
import MoviesList from "../../components/MoviesList";
import Loading from "../../components/Loading";
import CategoriesSelect from "../../components/CategoriesSelect";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("popular");
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

                const data = await fetchPopularMovies();

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

                const data = await fetchNowPlayingMovies();

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

                const data = await fetchTopRatedMovies();

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

                const data = await fetchUpcomingMovies();

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

    if (loading || minLoading) {
        return (
            <MainContainer>
                <Loading onFinish={() => setMinLoading(false)} />
            </MainContainer>
        );
    }

    if (error) {
        return (
            <MainContainer>
                <h1>❌ {error}</h1>
                <button onClick={() => window.location.reload()}>
                    Tentar Novamente
                </button>
            </MainContainer>
        );
    }


    return (
        <MainContainer>
            <WelcomeTitle />
            <SearchBar />
            <CategoriesSelect
                selectedCategory={selectedCategory}
                onClick={setSelectedCategory}
                moviesToShow={moviesToShow}
            />
            <MoviesList
                movies={moviesToShow}
                getImageUrl={getImageUrl}
            />
        </MainContainer>
    );
};

export default Home;