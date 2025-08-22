import styled from "styled-components";
import { getImageUrl } from "../../services/api";

const Overlay = styled.div`
  position: fixed;
  top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

const Content = styled.div`
  background: #222;
  padding: 2rem;
  border-radius: 12px;
  max-width: 500px;
  width: 100%;
  color: #fff;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  background: transparent;
  color: #fff;
  font-size: 1.5rem;
  border: none;
  cursor: pointer;
`;

const Poster = styled.img`
  width: 100%;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const MovieModal = ({ details, onClose }) => {
    if (!details) return null;
    return (
        <Overlay onClick={onClose}>
            <Content onClick={e => e.stopPropagation()}>
                <CloseButton onClick={onClose}>&times;</CloseButton>
                <h2>{details.title}</h2>
                <Poster src={getImageUrl(details.poster_path)} alt={details.title} />
                <p><strong>Sinopse:</strong> {details.overview}</p>
                <p><strong>Lançamento:</strong> {details.release_date}</p>
                <p><strong>Nota:</strong> ⭐ {details.vote_average}/10</p>
            </Content>
        </Overlay>
    );
};

export default MovieModal;
