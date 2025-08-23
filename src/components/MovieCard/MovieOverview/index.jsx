import styled from "styled-components";

const Overview = styled.p`
    font-style: italic;
    margin-top: 10px;
    color: var(--medium-gray-color);
    margin: 5px 0;
    font-size: 0.9em;
`

const MovieOverview = ({ movie }) => {
    return (
        <Overview>
            {movie.overview.length > 100 ?
                movie.overview.substring(0, 100) + '...'
                : movie.overview}
        </Overview>
    );
}

export default MovieOverview;