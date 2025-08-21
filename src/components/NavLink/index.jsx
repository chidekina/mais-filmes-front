import styled from "styled-components";
import menuLinks from "../../db/menu.json";
import { NavLink } from "react-router";

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
`

const NavBar = ({ isMobile = false, onItemClick }) => {
    if (isMobile) {
        return (
            <NavListMobile>
                {menuLinks.map(link => (
                    <NavLink
                        key={link.id}
                        to={link.path}
                        onClick={onItemClick}
                    >
                        {link.name}
                    </NavLink>
                ))}
            </NavListMobile>
        );
    }

    return (
        <NavList>
            <NavListContainer>
                {menuLinks.map(link => (
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