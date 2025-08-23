import styled from "styled-components";

const Image = styled.img`
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
`

const MovieCardImage = ({ getImageUrl, movie }) => {
    return (
        <Image
            src={getImageUrl(movie.poster_path)}
            alt={movie.title}
            onError={(e) => {
                e.target.src = 'https://via.placeholder.com/300x450/cccccc/666666?text=Sem+Imagem';
            }}
        />
    );
}

export default MovieCardImage;