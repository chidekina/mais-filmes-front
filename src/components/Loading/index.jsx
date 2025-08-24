import styled from "styled-components";
import { motion } from "framer-motion";
import { useEffect } from "react";
import useMinLoading from "../../hooks/useMinLoading";
import useLoadingPhrases from "../../hooks/useLoadingPhrases";

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

const Loading = ({ onFinish, duration = 3000 }) => {
    const { minLoading } = useMinLoading(false, duration);
    const { currentPhrase } = useLoadingPhrases(minLoading);

    useEffect(() => {
        if (!minLoading && onFinish) {
            onFinish();
        }
    }, [minLoading, onFinish]);

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
                <TitleLoading>{currentPhrase}</TitleLoading>
            </div>
        );
    }
    return null;
};

export default Loading;