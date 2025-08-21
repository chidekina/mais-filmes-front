import styled from "styled-components";
import backgroundImg from "/background.png";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: 90vh;
    padding: 0 5rem;
    padding-top: 8rem;
    background-image: url(${props => props.$bg});
    background-size: cover;
    background-position: center;
    `

const MainContainer = ({ children }) => {
    return ( 
        <Container $bg={backgroundImg}>
            {children}
        </Container>
     );
}
 
export default MainContainer;