import { useState, useEffect } from "react";

const useMinLoading = (mainLoading, minDuration = 3000) => {
    const [minLoading, setMinLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setMinLoading(false);
        }, minDuration);
        
        return () => clearTimeout(timer);
    }, [minDuration]);

    return {
        minLoading,
        setMinLoading,
        isLoading: mainLoading || minLoading,
    };
};

export default useMinLoading;