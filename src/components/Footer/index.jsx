
import styled from "styled-components";

const FooterContainer = styled.footer`
    width: 100%;
    background: var(--medium-gray-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
`;

const FooterTitle = styled.h2`
    font-size: 0.75rem;
    text-align: center;
    font-weight: 400;
    @media (min-width: 768px) {
        font-size: 0.9rem;
    }
`;

const FooterLinks = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 0.75rem;
    font-size: 0.75rem;
    @media (min-width: 768px) {
        font-size: 0.9rem;
    }
`;

const FooterLink = styled.a`
    color: #fff;
    text-decoration: none;
    transition: color 0.2s;
    &:hover {
        color: var(--highlight-color);
    }
`;

const FooterSeparator = styled.span`
    display: none;
    color: rgba(255,255,255,0.6);
    @media (min-width: 768px) {
        display: inline;
    }
`;

const Footer = () => {
    return (
        <FooterContainer>
            <FooterTitle>
                © 2025 + Filmes. Todos os direitos reservados.
            </FooterTitle>
            <FooterLinks>
                <FooterLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/cesar-hideki-nagano-326b75115/"
                >
                    LinkedIn
                </FooterLink>
                <FooterSeparator>|</FooterSeparator>
                <FooterLink
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/chidekina"
                >
                    GitHub
                </FooterLink>
                <FooterSeparator>|</FooterSeparator>
                <FooterLink href="mailto:cesar.nagano1@gmail.com">
                    cesar.nagano1@gmail.com
                </FooterLink>
            </FooterLinks>
        </FooterContainer>
    );
}

export default Footer;