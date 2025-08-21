import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LogoLoading = styled.img`
    width: 300px;
    height: fit-content;
    filter: brightness(1.2) drop-shadow(0 0 15px var(--light-gray-color));
    animation: glow 1.5s ease-in-out infinite alternate;
    @keyframes glow {
        0% {
            filter: brightness(1.2) drop-shadow(0 0 15px var(--light-gray-color));
        }
        100% {
            filter: brightness(1.4) drop-shadow(0 0 25px var(--light-gray-color));
        }
    }
`;

const TitleLoading = styled.h1`
    margin-top: 2rem;
    font-size: 32px;
    color: var(--highlight-color);
    font-weight: 700;
`


const phrases = [
    "Escolhendo os melhores filmes...",
    "Buscando novidades para você...",
    "Preparando a pipoca...",
    "Ajustando as luzes do cinema...",
    "Carregando sucessos de bilheteria..."
];

const Loading = ({ onFinish }) => {
    const [minLoading, setMinLoading] = useState(true);
    const [phraseIndex, setPhraseIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinLoading(false);
            if (onFinish) onFinish();
        }, 3000);
        return () => clearTimeout(timer);
    }, [onFinish]);

    useEffect(() => {
        if (!minLoading) return;
        const phraseTimer = setInterval(() => {
            setPhraseIndex(idx => (idx + 1) % phrases.length);
        }, 500);
        return () => clearInterval(phraseTimer);
    }, [minLoading]);

    if (minLoading) {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh' }}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5 }}
                >
                    <LogoLoading src="/logo-2.png" alt="Logo" />
                </motion.div>
                <TitleLoading>{phrases[phraseIndex]}</TitleLoading>
            </div>
        );
    }
    return null;
};

export default Loading;