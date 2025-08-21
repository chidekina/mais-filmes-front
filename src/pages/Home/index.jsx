import { useEffect, useState } from "react";
import { fetchPopularMovies, getImageUrl } from "../../services/api";
import MainContainer from "../../components/MainContainer";
import WelcomeTitle from "../../components/WelcomeTitle";
import CategoryTitle from "../../components/CategoryTitle";
import SearchBar from "../../components/SearchBar";
import PopularMovies from "../../components/PopularMovies";
import Loading from "../../components/Loading";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [minLoading, setMinLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getMovies = async () => {
            try {
                setLoading(true);
                setError(null);

                const data = await fetchPopularMovies();
                console.log('Dados da API:', data);

                setMovies(data.results || []);
            } catch (error) {
                console.error('Erro ao carregar filmes:', error);
                setError('Erro ao carregar filmes. Tente novamente.');
            } finally {
                setLoading(false);
            }
        };

        getMovies();
    }, []);

    // Só mostra conteúdo quando ambos loading e minLoading forem false
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
            <CategoryTitle moviesNumber={movies.length} />
            <PopularMovies
                movies={movies}
                getImageUrl={getImageUrl}
            />

        </MainContainer>
    );
};

export default Home;