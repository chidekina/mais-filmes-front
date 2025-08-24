import { useState } from "react";

const useMinLoading = (mainLoading) => {
    const [minLoading, setMinLoading] = useState(true);

    return {
        minLoading,
        setMinLoading,
        isLoading: mainLoading || minLoading,
    };
};

export default useMinLoading;