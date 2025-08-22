import styled from 'styled-components';

const ToastBox = styled.div`
    position: fixed;
    top: 24px;
    right: 24px;
    background: #e63946;
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 2px 8px #0002;
    font-weight: bold;
    z-index: 9999;
    animation: fadein 0.3s;
`;

const Toast = ({ message }) => {
    if (!message) return null;
    return <ToastBox>{message}</ToastBox>;
};

export default Toast;
