import { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "./NavLink";
import { useAuth } from '../../hooks/authContext';
import UserGreeting from "../UserGreeting";
import HeaderContainer from "./HeaderContainer";
import NavContainer from "./NavContainer";
import HeaderLogo from "./HeaderLogo";
import HamburgerMenu from "./HamburgerMenu";




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
        <HeaderContainer>
            <NavContainer
                isMenuOpen={isMenuOpen}
                onItemClick={toggleMenu}
            >
                <HeaderLogo />
                <NavBar />
                {displayName && (
                    <UserGreeting
                        displayName={displayName}
                        onClick={handleLogout}
                    />
                )}
                <HamburgerMenu
                    onClick={toggleMenu}
                    isMenuOpen={isMenuOpen}
                />
            </NavContainer>
        </HeaderContainer>
    );

}

export default Header;