import styled from "styled-components";

const CategoryHeader = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    
    & div {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 30px;
        color: var(--highlight-color);
        font-weight: 800;
    }

    & p {
        font-size: 18px;
        font-weight: 600;
        color: var(--light-gray-color);
        
        & span {
            font-weight: 800;
            color: white;
        }
    }
`

const CategoryTitle = ({ moviesNumber }) => {
    return (
        <CategoryHeader>
            <div>
                <img src="/film-reel.svg" alt="Icone de um filme" />
                <h1>Filmes Populares</h1>
            </div>
            <p>Total de filmes: <span>{moviesNumber}</span></p>
        </CategoryHeader>
    );
}

export default CategoryTitle;