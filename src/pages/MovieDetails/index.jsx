import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../../services/api";
import MainContainer from "../../components/MainContainer";
import Loading from "../../components/Loading";
import styled from "styled-components";

const Poster = styled.img`
  width: 100%;
  width: 300px;
  border-radius: 12px;
  margin-bottom: 2rem;
`;

const DetailsBox = styled.div`
    display: flex;
    gap: 40px;
    background: rgba(40, 40, 40, 0.6);
    padding: 2rem;
    border-radius: 12px;
    color: #fff;
    max-width: 700px;
    margin: 0 auto;
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

    & div {
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
    }

`;

const MovieDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            setLoading(true);
            try {
                const data = await api.fetchMovieDetails(id);
                setDetails(data);
            } catch (error) {
                setError("Erro ao carregar detalhes do filme.");
            } finally {
                setLoading(false);
            }
        };
        fetchDetails();
    }, [id]);

    if (loading) return <MainContainer><Loading /></MainContainer>;
    if (error) return <MainContainer><h2>{error}</h2></MainContainer>;
    if (!details) return null;

    return (
        <MainContainer height="82vh">
            <DetailsBox>
                <Poster src={api.getImageUrl(details.poster_path)} alt={details.title} />
                <MovieInfo>
                    <h1>{details.title}</h1>
                    <p><strong>Sinopse:</strong> {details.overview}</p>
                    <div>
                        <p><strong>Lançamento:</strong> {details.release_date}</p>
                        <p><strong>Nota:</strong> ⭐ {details.vote_average}/10</p>
                    </div>
                </MovieInfo>
                {/* Adicione mais campos se quiser */}
            </DetailsBox>
        </MainContainer>
    );
};

export default MovieDetails;
