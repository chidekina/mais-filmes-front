import styled from "styled-components";

const Card = styled.div`
    background: var(--light-gray-color);
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    padding: 15px;
    transition: transform 0.2s, opacity 0.5s;
    opacity: 0;
    animation: fadeIn 0.6s forwards;
    cursor: pointer;
    position: relative;

    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
    }
`

const MovieCardContainer = ({ onClick, children }) => {
    return ( 
        <Card onClick={onClick}>
            {children}
        </Card>
     );
}
 
export default MovieCardContainer;