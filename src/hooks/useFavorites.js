
import { useState, useEffect } from 'react';
import favoritesService from '../services/favoritesService';

export const useFavorites = () => {
    const [currentUser, setCurrentUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const user = favoritesService.getCurrentUser();
        setCurrentUser(user);
        if (user) {
            setFavorites(favoritesService.getFavorites());
        }
    }, []);

    const loginUser = (username) => {
        const user = favoritesService.loginUser(username);
        setCurrentUser(user);
        setFavorites(favoritesService.getFavorites());
        return user;
    };

    const logoutUser = () => {
        favoritesService.logoutUser();
        setCurrentUser(null);
        setFavorites([]);
    };

    const addToFavorites = async (movieData) => {
        setLoading(true);
        const success = favoritesService.addToFavorites(movieData);
        if (success) {
            setFavorites(favoritesService.getFavorites());
        }
        setLoading(false);
        return success;
    };

    const removeFromFavorites = async (movieId) => {
        setLoading(true);
        const success = favoritesService.removeFromFavorites(movieId);
        if (success) {
            setFavorites(favoritesService.getFavorites());
        }
        setLoading(false);
        return success;
    };

    const isFavorite = (movieId) => {
        return favoritesService.isFavorite(movieId);
    };

    const getUserStats = () => {
        return favoritesService.getUserStats();
    };

    const getUsersList = () => {
        return favoritesService.getUsersList();
    };

    return {
        currentUser,
        favorites,
        loading,

        loginUser,
        logoutUser,
        getUsersList,

        addToFavorites,
        removeFromFavorites,
        isFavorite,

        getUserStats,
        exportFavorites: () => favoritesService.exportFavorites(),
        importFavorites: (data) => {
            const success = favoritesService.importFavorites(data);
            if (success) setFavorites(favoritesService.getFavorites());
            return success;
        },
        clearFavorites: () => {
            favoritesService.clearFavorites();
            setFavorites([]);
        },
        deleteAccount: () => {
            favoritesService.deleteAccount();
            setCurrentUser(null);
            setFavorites([]);
        }
    };
};

