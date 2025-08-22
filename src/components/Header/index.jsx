import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "../NavLink";
import { useAuth } from '../../hooks/authContext';
// ...existing code...

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

const LogoLink = styled(Link)`
    display: flex;
    align-items: center;
`;

const LogoImg = styled.img`
    height: 10rem;
    width: auto;
    margin-right: 0.75rem;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    filter: brightness(1);
`;

const HamburgerButton = styled.button`
    display: block;
    background: none;
    border: none;
    color: white;
    padding: 0.5rem;
    transition: color 0.2s;
    cursor: pointer;
    @media (min-width: 768px) {
        display: none;
    }
    &:hover {
        color: var(--light-gray-color);
    }
    .icon {
        height: 1.5rem;
        width: 1.5rem;
    }
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
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { currentUser, logoutUser } = useAuth();
    const displayName = currentUser && (currentUser.displayName || currentUser.username);

    const handleLogout = () => {
        logoutUser();
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <StyledHeader>
            <StyledNav>
                <NavRow>
                    <LogoLink to="/">
                        <LogoImg
                            src="./logo-2.png"
                            loading="lazy"
                            onMouseEnter={(e) => {
                                e.target.style.filter = 'brightness(1.2) drop-shadow(0 0 15px rgba(209, 209, 214, 0.6))';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.filter = 'brightness(1)';
                            }}
                            onMouseDown={(e) => {
                                e.target.style.filter = 'brightness(1.3) drop-shadow(0 0 20px rgba(209, 209, 214, 0.8))';
                            }}
                            onMouseUp={(e) => {
                                e.target.style.filter = 'brightness(1.2) drop-shadow(0 0 15px rgba(209, 209, 214, 0.6))';
                            }}
                        />
                    </LogoLink>
                    <NavBar />
                    {displayName && (
                        <>
                            <span style={{ color: '#fff', fontWeight: 'semiBold', marginLeft: 5 }}>Olá, <span></span>{displayName}</span>
                            <button
                                onClick={handleLogout}
                                style={{ marginLeft: 4, background: '#e63946', color: '#fff', border: 'none', borderRadius: 4, padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 'bold' }}
                            >
                                Logout
                            </button>
                        </>
                    )}
                    <HamburgerButton onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? (
                            <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </HamburgerButton>
                </NavRow>
                {isMenuOpen && (
                    <MobileMenu>
                        <MobileMenuContainer>
                            <NavBar isMobile={true} onItemClick={toggleMenu} />
                        </MobileMenuContainer>
                    </MobileMenu>
                )}
            </StyledNav>
        </StyledHeader>
    );

}

export default Header;