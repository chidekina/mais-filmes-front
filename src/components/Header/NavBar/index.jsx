import React from "react";
import styled from "styled-components";
import menuLinks from "../../../db/menu.json";
import { NavLink } from "react-router-dom";
import { useAuth } from '../../../hooks/authContext';

const NavList = styled.div`
    display: none;
    @media (min-width: 48rem) {
        display: block;
    }
`;

const NavListContainer = styled.div`
    margin-left: 2.5rem; 
    display: flex;
    align-items: baseline;
    gap: 1rem; 
`;

const StyledNavLink = styled(NavLink)`
    color: white;
    padding: 0.5rem 0.75rem; 
    border-radius: 0.375rem; 
    font-size: 0.875rem; 
    font-weight: 500; 
    display: block;
    transition: color 0.2s;
    text-decoration: none;

    &:hover {
        color: var(--highlight-color); 
    }
`;

const NavListMobile = styled.div`
    display: flex;
    flex-direction: column;

    & a {
        color: white;
        text-decoration: none;
        padding: 0.5rem 0.75rem;
        border-radius: 0.375rem; 
        font-size: 1rem;
        font-weight: 500; 
        display: block;
        transition: color 0.2s;

        &:hover {
            color: var(--highlight-color);
        }
    }
`;

const MobileUserSection = styled.div`
    border-top: 1px solid var(--medium-gray-color);
    margin-top: 1rem;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

const MobileUserGreeting = styled.div`
    color: white;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0 0.75rem;
    
    span {
        color: var(--highlight-color);
        font-weight: 800;
    }
`;

const MobileLogoutButton = styled.button`
    background-color: var(--highlight-color);
    color: white;
    border: none;
    border-radius: 0.375rem;
    padding: 0.6rem 0.75rem;
    cursor: pointer;
    font-weight: 600;
    font-size: 0.9rem;
    margin: 0 0.75rem;
    transition: background-color 0.2s;

    &:hover {
        background-color: #e63946;
    }
`

const NavBar = ({ isMobile = false, onItemClick, onLogout }) => {
    const { currentUser } = useAuth();
    const filteredLinks = React.useMemo(() => {
        if (currentUser) {
            return menuLinks.filter(link => link.path !== '/login' && link.path !== '/register');
        }
        return menuLinks;
    }, [currentUser]);

    const displayName = currentUser && (currentUser.displayName || currentUser.username);

    if (isMobile) {
        return (
            <NavListMobile>
                {filteredLinks.map(link => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        onClick={onItemClick}
                    >
                        {link.name}
                    </NavLink>
                ))}
                {currentUser && (
                    <MobileUserSection>
                        <MobileUserGreeting>
                            Olá, <span>{displayName}</span>
                        </MobileUserGreeting>
                        <MobileLogoutButton 
                            onClick={() => {
                                onLogout && onLogout();
                                onItemClick && onItemClick();
                            }}
                        >
                            Logout
                        </MobileLogoutButton>
                    </MobileUserSection>
                )}
            </NavListMobile>
        );
    }

    return (
        <NavList>
            <NavListContainer>
                {filteredLinks.map(link => (
                    <StyledNavLink
                        key={link.id}
                        to={link.path}
                    >
                        {link.name}
                    </StyledNavLink>
                ))}
            </NavListContainer>
        </NavList>
    );
}

export default NavBar;