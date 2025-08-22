import styled from "styled-components";
import MovieCard from "../MovieCard";

const ContainerMovies = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
    padding: 20px 0;
`

const MoviesList = ({ movies, getImageUrl }) => {
    return (
        <ContainerMovies>
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    movie={movie}
                    getImageUrl={getImageUrl}
                />
            ))}
        </ContainerMovies>
    );
}

export default MoviesList;