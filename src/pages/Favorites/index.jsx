import React from 'react';
import { useFavorites } from '../../hooks/useFavorites';

const FavoritesPage = () => {
    const {
        currentUser,
        favorites,
        removeFromFavorites,
        loading,
        logoutUser
    } = useFavorites();

    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', paddingTop: '3rem' }}>
            <div style={{ width: '100%', maxWidth: 800, display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ marginBottom: 0 }}>
                    Favoritos de {currentUser?.displayName || currentUser?.username || 'Visitante'}
                </h2>
                {currentUser && (
                    <button
                        style={{ background: '#e63946', color: '#fff', border: 'none', borderRadius: 4, padding: '0.5rem 1rem', cursor: 'pointer', fontWeight: 'bold' }}
                        onClick={logoutUser}
                    >
                        Logout
                    </button>
                )}
            </div>
            {loading && <p>Carregando...</p>}
            {favorites.length === 0 ? (
                <p>Nenhum filme favorito encontrado.</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0, width: '100%', maxWidth: 800, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {favorites.map(movie => (
                        <li key={movie.id} style={{ marginBottom: '1.5rem', background: '#222', borderRadius: 8, padding: '1rem', color: '#fff', width: '100%', display: 'flex', alignItems: 'center', gap: 24 }}>
                            <img
                                src={movie.poster_path ? `https://image.tmdb.org/t/p/w200${movie.poster_path}` : 'https://via.placeholder.com/100x150/cccccc/666666?text=Sem+Imagem'}
                                alt={movie.title}
                                style={{ width: 100, height: 150, objectFit: 'cover', borderRadius: 8, marginRight: 16 }}
                            />
                            <div style={{ flex: 1 }}>
                                <strong style={{ fontSize: 18 }}>{movie.title}</strong>
                                <div style={{ fontSize: 14, margin: '0.5rem 0' }}>{movie.release_date}</div>
                                <div style={{ fontSize: 14, marginBottom: '0.5rem' }}>Nota: ⭐ {movie.vote_average}/10</div>
                                <button
                                    style={{ background: '#e63946', color: '#fff', border: 'none', borderRadius: 4, padding: '0.5rem 1rem', cursor: 'pointer', marginTop: 8 }}
                                    onClick={() => removeFromFavorites(movie.id)}
                                >
                                    Remover dos favoritos
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default FavoritesPage;
