import { Link } from "react-router-dom";
import styled from "styled-components";

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

const HeaderLogo = () => {
    return ( 
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
     );
}
 
export default HeaderLogo;