import DetailsBox from "./DetailsBox";
import MovieDetails from "../MovieCard/MovieDetails";

const MovieBox = ({ api, details }) => {
    return (
            <DetailsBox>
                <MovieDetails
                    api={api}
                    details={details}    
                />
            </DetailsBox>
    );
}
 
export default MovieBox;