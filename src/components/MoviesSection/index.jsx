import CategoriesSelect from "../CategoriesSelect";
import MoviesList from "../MoviesList";

const MoviesSection = ({ selectedCategory, setSelectedCategory, moviesToDisplay, getImageUrl, onMovieClick }) => (
    <>
        <CategoriesSelect
            selectedCategory={selectedCategory}
            onClick={setSelectedCategory}
            moviesToShow={moviesToDisplay}
        />
        <MoviesList
            movies={moviesToDisplay}
            getImageUrl={getImageUrl}
            onMovieClick={onMovieClick}
        />
    </>
);

export default MoviesSection;
