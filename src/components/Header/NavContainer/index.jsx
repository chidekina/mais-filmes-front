import styled from "styled-components";
import NavBar from "../NavBar";

const StyledNav = styled.nav`
    max-width: 80rem;
    margin: 0 auto;
    padding-left: 1rem;
    padding-right: 1rem;
    @media (min-width: 640px) {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
    @media (min-width: 1024px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;

const NavRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4rem;
`;

const MobileMenu = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
    margin-top: 0.5rem;
`;

const MobileMenuContainer = styled.div`
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 0.5rem;
    padding-bottom: 0.75rem;
    background: var(--medium-gray-color);
    backdrop-filter: blur(4px);
    border-radius: 0.5rem;
`;

const NavContainer = ({ children, isMenuOpen, onItemClick, onLogout }) => {
    return (
        <StyledNav>
            <NavRow>
                {children}
            </NavRow>
            {isMenuOpen && (
                <MobileMenu>
                    <MobileMenuContainer>
                        <NavBar
                            isMobile={true}
                            onItemClick={onItemClick}
                            onLogout={onLogout}
                        />
                    </MobileMenuContainer>
                </MobileMenu>
            )}
        </StyledNav>
    );
}

export default NavContainer;