class FavoritesService {
    constructor() {
        this.storageKey = 'movieapp_users';
        this.currentUserKey = 'movieapp_current_user';
        this.initializeStorage();
    }

    initializeStorage() {
        if (!localStorage.getItem(this.storageKey)) {
            localStorage.setItem(this.storageKey, JSON.stringify({}));
        }
    }

    loginUser(username) {
        if (!username || username.trim() === '') {
            throw new Error('Nome de usuário é obrigatório');
        }

        const users = this.getAllUsers();
        const normalizedUsername = username.toLowerCase().trim();

        if (!users[normalizedUsername]) {
            users[normalizedUsername] = {
                username: normalizedUsername,
                displayName: username.trim(),
                favorites: [],
                createdAt: new Date().toISOString()
            };
            localStorage.setItem(this.storageKey, JSON.stringify(users));
        }

        localStorage.setItem(this.currentUserKey, normalizedUsername);

        return users[normalizedUsername];
    }

    logoutUser() {
        localStorage.removeItem(this.currentUserKey);
    }

    getCurrentUser() {
        const currentUsername = localStorage.getItem(this.currentUserKey);
        if (!currentUsername) return null;

        const users = this.getAllUsers();
        return users[currentUsername] || null;
    }

    getAllUsers() {
        const users = localStorage.getItem(this.storageKey);
        return users ? JSON.parse(users) : {};
    }

    getUsersList() {
        const users = this.getAllUsers();
        return Object.values(users).map(user => ({
            username: user.username,
            displayName: user.displayName,
            favoritesCount: user.favorites.length,
            createdAt: user.createdAt
        }));
    }

    addToFavorites(movieData) {
        const currentUser = this.getCurrentUser();
        if (!currentUser) {
            throw new Error('Usuário não está logado');
        }

        const users = this.getAllUsers();
        const userFavorites = users[currentUser.username].favorites;

        const existingIndex = userFavorites.findIndex(fav => fav.id === movieData.id);
        if (existingIndex !== -1) {
            return false;
        }

        const favoriteData = {
            ...movieData,
            addedAt: new Date().toISOString()
        };

        users[currentUser.username].favorites.push(favoriteData);
        localStorage.setItem(this.storageKey, JSON.stringify(users));

        return true;
    }

    removeFromFavorites(movieId) {
        const currentUser = this.getCurrentUser();
        if (!currentUser) {
            throw new Error('Usuário não está logado');
        }

        const users = this.getAllUsers();
        const userFavorites = users[currentUser.username].favorites;

        const filteredFavorites = userFavorites.filter(fav => fav.id !== movieId);

        if (filteredFavorites.length === userFavorites.length) {
            return false;
        }

        users[currentUser.username].favorites = filteredFavorites;
        localStorage.setItem(this.storageKey, JSON.stringify(users));

        return true;
    }

    getFavorites() {
        const currentUser = this.getCurrentUser();
        if (!currentUser) return [];

        const users = this.getAllUsers();
        return users[currentUser.username].favorites || [];
    }

    isFavorite(movieId) {
        const favorites = this.getFavorites();
        return favorites.some(fav => fav.id === movieId);
    }

    getUserStats() {
        const currentUser = this.getCurrentUser();
        if (!currentUser) return null;

        const favorites = this.getFavorites();
        const genres = favorites.flatMap(movie => movie.genres || []);
        const genreCount = genres.reduce((acc, genre) => {
            acc[genre.name] = (acc[genre.name] || 0) + 1;
            return acc;
        }, {});

        return {
            totalFavorites: favorites.length,
            averageRating: favorites.length > 0
                ? (favorites.reduce((sum, movie) => sum + (movie.vote_average || 0), 0) / favorites.length).toFixed(1)
                : 0,
            topGenres: Object.entries(genreCount)
                .sort(([, a], [, b]) => b - a)
                .slice(0, 5)
                .map(([genre, count]) => ({ genre, count })),
            oldestFavorite: favorites.length > 0
                ? favorites.reduce((oldest, movie) =>
                    new Date(movie.addedAt) < new Date(oldest.addedAt) ? movie : oldest)
                : null,
            newestFavorite: favorites.length > 0
                ? favorites.reduce((newest, movie) =>
                    new Date(movie.addedAt) > new Date(newest.addedAt) ? movie : newest)
                : null
        };
    }

    exportFavorites() {
        const currentUser = this.getCurrentUser();
        if (!currentUser) return null;

        const exportData = {
            user: currentUser.displayName,
            exportedAt: new Date().toISOString(),
            favorites: this.getFavorites(),
            stats: this.getUserStats()
        };

        return JSON.stringify(exportData, null, 2);
    }

    importFavorites(jsonData) {
        const currentUser = this.getCurrentUser();
        if (!currentUser) {
            throw new Error('Usuário não está logado');
        }

        try {
            const importData = JSON.parse(jsonData);
            if (!importData.favorites || !Array.isArray(importData.favorites)) {
                throw new Error('Formato de dados inválido');
            }

            const users = this.getAllUsers();
            users[currentUser.username].favorites = importData.favorites;
            localStorage.setItem(this.storageKey, JSON.stringify(users));

            return true;
        } catch (error) {
            throw new Error('Erro ao importar favoritos: ' + error.message);
        }
    }

    clearFavorites() {
        const currentUser = this.getCurrentUser();
        if (!currentUser) {
            throw new Error('Usuário não está logado');
        }

        const users = this.getAllUsers();
        users[currentUser.username].favorites = [];
        localStorage.setItem(this.storageKey, JSON.stringify(users));
    }

    deleteAccount() {
        const currentUser = this.getCurrentUser();
        if (!currentUser) {
            throw new Error('Usuário não está logado');
        }

        const users = this.getAllUsers();
        delete users[currentUser.username];
        localStorage.setItem(this.storageKey, JSON.stringify(users));
        this.logoutUser();
    }
}

const favoritesService = new FavoritesService();
export default favoritesService;