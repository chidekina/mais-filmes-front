// hooks/authContext.js - VERSÃO MELHORADA
import { createContext, useContext, useState, useEffect } from 'react';
import favoritesService from '../services/favoritesService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [favorites, setFavorites] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const initializeAuth = async () => {
            try {
                setIsLoading(true);
                setError(null);
                
                const user = favoritesService.getCurrentUser();
                setCurrentUser(user);
                
                if (user) {
                    const userFavorites = favoritesService.getFavorites();
                    setFavorites(userFavorites);
                }
            } catch (err) {
                console.error('Erro ao inicializar autenticação:', err);
                setError('Erro ao carregar dados do usuário.');
            } finally {
                setIsLoading(false);
            }
        };

        initializeAuth();
    }, []);

    const loginUser = (username) => {
        try {
            setError(null);
            const user = favoritesService.loginUser(username);
            setCurrentUser(user);
            
            const userFavorites = favoritesService.getFavorites();
            setFavorites(userFavorites);
            
            return user;
        } catch (err) {
            console.error('Erro ao fazer login:', err);
            setError('Erro ao fazer login.');
            throw err; 
        }
    };

    const registerUser = (username) => {
        try {
            setError(null);
            
            const user = favoritesService.loginUser(username);
            setCurrentUser(user);
            setFavorites([]); 
            
            return user;
        } catch (err) {
            console.error('Erro ao cadastrar:', err);
            setError('Erro ao cadastrar usuário.');
            throw err;
        }
    };

    const logoutUser = () => {
        try {
            setError(null);
            favoritesService.logoutUser();
            setCurrentUser(null);
            setFavorites([]);
        } catch (err) {
            console.error('Erro ao fazer logout:', err);
            setError('Erro ao fazer logout.');
        }
    };

    // Funções auxiliares
    const isAuthenticated = !!currentUser;
    
    const addFavorite = (movie) => {
        try {
            const updatedFavorites = favoritesService.addFavorite(movie);
            setFavorites(updatedFavorites);
        } catch (err) {
            console.error('Erro ao adicionar favorito:', err);
            throw err;
        }
    };

    const removeFavorite = (movieId) => {
        try {
            const updatedFavorites = favoritesService.removeFavorite(movieId);
            setFavorites(updatedFavorites);
        } catch (err) {
            console.error('Erro ao remover favorito:', err);
            throw err;
        }
    };

    const isFavorite = (movieId) => {
        return favorites.some(fav => fav.id === movieId);
    };

    const value = {
        currentUser,
        favorites,
        isLoading,
        error,
        isAuthenticated,
        
        loginUser,
        registerUser,
        logoutUser,
        
        addFavorite,
        removeFavorite,
        isFavorite,
        
        clearError: () => setError(null),
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    
    if (!context) {
        throw new Error('useAuth deve ser usado dentro de AuthProvider');
    }
    
    return context;
};