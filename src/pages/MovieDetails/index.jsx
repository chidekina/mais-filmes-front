// pages/MovieDetails/MovieDetails.js
import { useParams } from "react-router-dom";
import api from "../../services/api";
import MainContainer from "../../components/MainContainer";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import useMovieDetails from "../../hooks/useMovieDetails";
import MovieBox from "../../components/MovieBox";



const MovieDetails = () => {
    const { id } = useParams();
    const { details, loading, error, refetch } = useMovieDetails(id);

    if (loading) {
        return (
            <MainContainer>
                <Loading />
            </MainContainer>
        );
    }

    if (error) {
        return (
            <MainContainer>
                <ErrorMessage error={error} onRetry={refetch} />
            </MainContainer>
        );
    }

    if (!details) return null;

    return (
        <MainContainer>
            <MovieBox
                api={api}
                details={details}
            />
        </MainContainer>
    );
};

export default MovieDetails;