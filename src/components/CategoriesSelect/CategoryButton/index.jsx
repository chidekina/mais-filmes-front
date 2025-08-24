import styled from "styled-components";

const Button = styled.button`
        padding: 0.4rem 0.8rem;
        border-radius: 6px;
        color: white;
        cursor: pointer;
        font-weight: bold;
        border: none;
        font-size: 0.85rem;
        transition: all 0.2s ease;

        @media (min-width: 640px) {
            padding: 0.45rem 0.9rem;
            border-radius: 7px;
            font-size: 0.9rem;
        }

        @media (min-width: 768px) {
            padding: 0.5rem 1rem;
            border-radius: 8px;
            font-size: 1rem;
        }

        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        }
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