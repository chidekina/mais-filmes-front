import { useState, useEffect } from "react";

const phrases = [
    "Escolhendo os melhores filmes...",
    "Buscando novidades para você...",
    "Preparando a pipoca...",
    "Ajustando as luzes do cinema...",
    "Carregando sucessos de bilheteria..."
];

const useLoadingPhrases = (isActive = true, interval = 400) => {
    const [phraseIndex, setPhraseIndex] = useState(0);

    useEffect(() => {
        if (!isActive) return;
        
        const phraseTimer = setInterval(() => {
            setPhraseIndex(idx => (idx + 1) % phrases.length);
        }, interval);
        
        return () => clearInterval(phraseTimer);
    }, [isActive, interval]);

    return {
        currentPhrase: phrases[phraseIndex],
        phraseIndex,
        totalPhrases: phrases.length
    };
};

export default useLoadingPhrases;