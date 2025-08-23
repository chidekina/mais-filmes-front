import { FaHeart, FaRegHeart } from 'react-icons/fa';
import styled from 'styled-components';

const Button = styled.button`
    position: absolute;
    top: 16px;
    right: 16px;
    background: none;
    border: none;
    padding: 0;
    cursor: pointer;
    z-index: 20;
`

const ButtonForFavorite = ({ onClick, favorite }) => {
    return (
        <Button
            onClick={onClick}
            aria-label={favorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
            {favorite ? <FaHeart size={24} color="#e63946" /> : <FaRegHeart size={24} color="#e63946" />}
        </Button>
    );
}

export default ButtonForFavorite;