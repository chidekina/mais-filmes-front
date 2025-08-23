import styled from "styled-components";
import HamburgerMenuOpened from "./HamburgerMenuOpened";
import HamburgerMenuClosed from "./HamburgerMenuClosed";

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

const HamburgerMenu = ({ onClick, isMenuOpen }) => {
    return (  
                <HamburgerButton onClick={onClick} aria-label="Toggle menu">
                    {isMenuOpen ? (
                        <HamburgerMenuOpened />
                    ) : (
                        <HamburgerMenuClosed />
                    )}
                </HamburgerButton>
    );
}
 
export default HamburgerMenu;