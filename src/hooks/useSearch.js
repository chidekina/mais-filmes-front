import { useEffect, useState } from "react";
import api from "../services/api";

const useSearch = () => {
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [searchLoading, setSearchLoading] = useState(false);

    useEffect(() => {
        const fetchSearch = async () => {
            if (!search) {
                setSearchResults([]);
                setSearchLoading(false);
                return;
            }

            setSearchLoading(true);
            
            try {
                const data = await api.searchMovies(search);
                setSearchResults(data.results || []);
            } catch (error) {
                console.error('Erro ao buscar filmes:', error);
                setSearchResults([]);
            } finally {
                setSearchLoading(false);
            }
        };

        const timeoutId = setTimeout(fetchSearch, 300);
        
        return () => clearTimeout(timeoutId);
    }, [search]);

    return {
        search,
        setSearch,
        searchResults,
        searchLoading,
        hasSearch: !!search,
    };
};

export default useSearch;