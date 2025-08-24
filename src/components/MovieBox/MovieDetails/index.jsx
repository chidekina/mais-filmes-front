import styled from "styled-components";
import MovieLine from "../MovieLine";

const Poster = styled.img`
    width: 100%;
    width: 300px;
    border-radius: 12px;
    margin-bottom: 2rem;
`;



const MovieInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;
    
    & h1 {
        font-size: 32px;
        font-weight: 700;
        color: var(--highlight-color);
    }
    
    & p {
        font-size: 18px;
        font-weight: 500;
    }
    
`;

const MovieBrief = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    
    & p {
        font-size: 20px;
        
        & strong {
            color: var(--light-gray-color);
            font-weight: 700;
        }
    }
`;

const MoviesDetails = ({ api, details }) => {
    return (
        <>
            <Poster
                src={api.getImageUrl(details.poster_path)}
                alt={details.title}
            />
            <MovieInfo>
                <h1>{details.title}</h1>
                <MovieLine
                    title="Sinopse:"
                    details={details.overview}
                />
                <MovieBrief>
                    <MovieLine
                        title="Lançamento:"
                        details={details.release_date}
                    />
                    <MovieLine
                        title="Nota:"
                        details={`⭐ ${details.vote_average}/10`}
                    />
                </MovieBrief>
            </MovieInfo>
        </>
    );
}

export default MoviesDetails;