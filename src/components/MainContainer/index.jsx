import styled from "styled-components";
import backgroundImg from "/background.png";

const Container = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    height: ${props => props.$height};
    padding: 0 2.5rem;
    padding-top: 8rem;
    background-image: url(${props => props.$bg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
    width: 100%;
    `

const MainContainer = ({ children }) => {
    return (
        <Container $bg={backgroundImg} >
            {children}
        </Container>
    );
}

export default MainContainer;