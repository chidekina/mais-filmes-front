import styled from "styled-components";
import categories from "../../db/categories.json"
import CategoryTitle from "./CategoryTitle";
import CategoryButton from "./CategoryButton";

const CategoriesContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;

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