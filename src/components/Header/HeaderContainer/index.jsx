import styled from "styled-components";

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 50;
    background: var(--medium-gray-color);
    backdrop-filter: blur(4px);
    border-bottom: 1px solid rgba(209, 209, 214, 0.1);
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
`;

const HeaderContainer = ({ children }) => {
    return ( 
        <StyledHeader>
            {children}
        </StyledHeader>
     );
}
 
export default HeaderContainer;