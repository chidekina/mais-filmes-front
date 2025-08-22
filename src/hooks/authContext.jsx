import React, { createContext, useContext, useState, useEffect } from 'react';
import favoritesService from '../services/favoritesService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [favorites, setFavorites] = useState([]);

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

    // ...outros métodos do useFavorites podem ser adicionados aqui

    return (
        <AuthContext.Provider value={{ currentUser, favorites, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
