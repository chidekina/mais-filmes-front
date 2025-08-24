import styled from "styled-components";
import categories from "../../db/categories.json"
import CategoryTitle from "./CategoryTitle";
import CategoryButton from "./CategoryButton";

const CategoriesContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
    justify-content: center;

    @media (min-width: 640px) {
        gap: 0.75rem;
        justify-content: flex-start;
    }

    @media (min-width: 768px) {
        gap: 1rem;
    }
`
const CategoriesSelect = ({ selectedCategory, onClick, moviesToShow }) => {
    return (
    <>
        <CategoriesContainer>
            {categories.map(cat => (
                <CategoryButton
                    category={cat}
                    onClick={onClick}
                    selectedCategory={selectedCategory}
                />
            ))}
        </CategoriesContainer>
        
            <CategoryTitle
                title={categories.find(c => c.key === selectedCategory)?.label}
                moviesNumber={moviesToShow.length}
            />
    </>
    );
}

export default CategoriesSelect;