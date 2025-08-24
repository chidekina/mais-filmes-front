import styled from "styled-components";

const DetailsContainer = styled.div`
    display: flex;
    gap: 40px;
    background: rgba(40, 40, 40, 0.6);
    padding: 2rem;
    border-radius: 12px;
    color: #fff;
    max-width: 700px;
    margin: 0 auto;
`;
const DetailsBox = ({ children }) => {
    return ( 
        <DetailsContainer>
            {children}
        </DetailsContainer>
     );
}
 
export default DetailsBox;