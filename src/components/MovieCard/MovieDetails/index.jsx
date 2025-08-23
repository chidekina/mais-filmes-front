import styled from "styled-components";

const MovieTitle = styled.h3`
    margin: 10px 0;
    font-size: 1.1em;
    color: #333;
`

const MovieSubtitle = styled.p`
    margin: 5px 0;
    font-size: 0.9em;
    color: #666;
`

const MovieDetails = ({ movie }) => {
    return (
        <>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieSubtitle>
                <strong>Nota:</strong>
                ⭐ {movie.vote_average.toFixed(1)}/10
            </MovieSubtitle>
            <MovieSubtitle>
                <strong>Lançamento:</strong>
                {new Date(movie.release_date).toLocaleDateString('pt-BR')}
            </MovieSubtitle>
        </>
    );
}

export default MovieDetails;