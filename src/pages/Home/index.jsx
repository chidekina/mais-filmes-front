// pages/Home/Home.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import MainContainer from "../../components/MainContainer";
import Loading from "../../components/Loading";
import PageHeader from "../../components/PageHeader";
import ErrorMessage from "../../components/ErrorMessage";
import MoviesSection from "../../components/MoviesSection";
import useMovies from "../../hooks/useMovies";
import useSearch from "../../hooks/useSearch";
import useMinLoading from "../../hooks/useMinLoading";

const Home = () => {
    const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("popular");
    
    const { movies, loading, error, getMoviesByCategory } = useMovies();
    const { search, setSearch, searchResults, searchLoading, hasSearch } = useSearch();
    const { minLoading, setMinLoading } = useMinLoading(loading);

    const moviesToDisplay = hasSearch ? searchResults : getMoviesByCategory(selectedCategory);

    const handleRetry = () => window.location.reload();
    const handleMovieClick = (id) => navigate(`/filme/${id}`);

    if ((loading || minLoading) && !hasSearch) {
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
                <ErrorMessage error={error} onRetry={handleRetry} />
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
                onMovieClick={handleMovieClick}
            />
        </MainContainer>
    );
};

export default Home;