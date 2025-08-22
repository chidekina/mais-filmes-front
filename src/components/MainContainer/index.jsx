import styled from "styled-components";
import backgroundImg from "/background.png";

const Container = styled.section`
    display: flex;
    flex-direction: column;
    height: ${props => props.$height};
    padding: 0 5rem;
    padding-top: 8rem;
    background-image: url(${props => props.$bg});
    background-size: cover;
    background-position: center;
    `

const MainContainer = ({ children, height="90vh" }) => {
    return ( 
        <Container $bg={backgroundImg} $height={height} >
            {children}
        </Container>
     );
}
 
export default MainContainer;