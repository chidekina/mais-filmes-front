import { useState } from "react";
import NavBar from "./NavBar";
import { useAuth } from '../../hooks/authContext';
import UserGreeting from "./UserGreeting";
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
                onLogout={handleLogout}
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