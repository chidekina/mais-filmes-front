import styled from "styled-components";
import Title from "../Title";
import SubTitle from "../SubTitle";

const HighlightTitle = styled.span`
    font-weight: 800;
    color: var(--highlight-color);
`
const WelcomeTitle = () => {
    return ( 
        <>
           <Title>
                Hello there! Bem vindo à <HighlightTitle>+ FILMES</HighlightTitle>
           </Title>
           <SubTitle>
                O portal amado pelos cinéfilos e amantes do cinema.
           </SubTitle>
        </>
     );
}
 
export default WelcomeTitle;