import React from 'react';
import { useFavorites } from '../../hooks/useFavorites';
import FavoritesSection from '../../components/FavoritesSection';

const Favorites = () => {
    const {
        currentUser,
        favorites,
        removeFromFavorites,
        loading,
        logoutUser
    } = useFavorites();

    return (
        <FavoritesSection
            currentUser={currentUser}
            logoutUser={logoutUser}
            loading={loading}
            favorites={favorites}
            removeFromFavorites={removeFromFavorites}
        />
    );
};

export default Favorites;
