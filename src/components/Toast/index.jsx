import styled from 'styled-components';

const ToastBox = styled.div`
    min-width: 220px;
    max-width: 350px;
    background: #e63946;
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 2px 8px #0002;
    font-weight: bold;
    z-index: 9999;
    animation: fadein 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`;

const Toast = ({ message }) => {
    if (!message) return null;
    return <ToastBox>{message}</ToastBox>;
};

export default Toast;
