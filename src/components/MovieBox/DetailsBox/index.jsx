import styled from "styled-components";

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    background: rgba(40, 40, 40, 0.6);
    padding: 1.5rem;
    border-radius: 10px;
    color: #fff;
    max-width: 90%;
    margin: 0 auto;
    width: 100%;

    @media (min-width: 640px) {
        padding: 1.75rem;
        max-width: 600px;
        gap: 25px;
        border-radius: 11px;
    }

    @media (min-width: 768px) {
        flex-direction: row;
        padding: 2rem;
        max-width: 700px;
        gap: 40px;
        border-radius: 12px;
    }

    @media (min-width: 1024px) {
        max-width: 800px;
    }
`;
const DetailsBox = ({ children }) => {
    return ( 
        <DetailsContainer>
            {children}
        </DetailsContainer>
     );
}
 
export default DetailsBox;