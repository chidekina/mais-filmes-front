import styled from "styled-components";

const Button = styled.button`
        padding: 0.5rem 1rem;
        border-radius: 8px;
        color: white;
        cursor: pointer;
        font-weight: bold;
        border: none;
`

const CategoryButton = ({ category, onClick, selectedCategory }) => {
    return (
        <Button
            key={category.key}
            onClick={() => onClick(category.key)}
            style={{
                background: selectedCategory === category.key ? "var(--highlight-color)" : "var(--medium-gray-color)"
            }}
        >
            {category.label}
        </Button>
    );
}

export default CategoryButton;