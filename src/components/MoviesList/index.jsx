import styled from "styled-components";
import MovieCard from "../MovieCard";

const ContainerMovies = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
    padding: 20px 0;

    @media (min-width: 640px) {
        grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
        gap: 18px;
    }

    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 20px;
    }

    @media (min-width: 1024px) {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 22px;
    }
`

const MoviesList = ({ movies, getImageUrl, onMovieClick }) => {
    return (
        <ContainerMovies>
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    getImageUrl={getImageUrl}
                    onClick={() => onMovieClick(movie.id)}
                />
            ))}
        </ContainerMovies>
    );
}

export default MoviesList;