import styled from "styled-components";
import categories from "../../db/categories.json"
import CategoryTitle from "../CategoryTitle";

const CategoriesContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;

    & button {
        padding: 0.5rem 1rem;
        border-radius: 8px;
        color: white;
        cursor: pointer;
        font-weight: bold;
        border: none;
    }
`
const CategoriesSelect = ({ selectedCategory, onClick, moviesToShow }) => {
    return (
    <>
        <CategoriesContainer>
            {categories.map(cat => (
                <button
                    key={cat.key}
                    onClick={() => onClick(cat.key)}
                    style={{
                        background: selectedCategory === cat.key ? "var(--highlight-color)" : "var(--medium-gray-color)"
                    }}
                >
                    {cat.label}
                </button>
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