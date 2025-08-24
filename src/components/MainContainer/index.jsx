import styled from "styled-components";
import backgroundImg from "/background.png";

const Container = styled.section`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    padding: 6rem 1rem;
    padding-top: 6rem;
    background-image: url(${props => props.$bg});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    min-height: 100vh;
    width: 100%;

    @media (min-width: 640px) {
        padding: 7rem 1.5rem;
        padding-top: 7rem;
    }

    @media (min-width: 768px) {
        padding: 8rem 2rem;
        padding-top: 8rem;
    }

    @media (min-width: 1024px) {
        padding: 8rem 2.5rem;
        padding-top: 8rem;
    }
`

const MainContainer = ({ children }) => {
    return (
        <Container $bg={backgroundImg} >
            {children}
        </Container>
    );
}

export default MainContainer;