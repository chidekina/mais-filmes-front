// components/Toast/Toast.js
import styled from 'styled-components';

const ToastBox = styled.div`
    position: fixed;
    top: 20px;
    right: 20px;
    min-width: 220px;
    max-width: 350px;
    background: ${props => {
        switch (props.type) {
            case 'success': return '#28a745';
            case 'warning': return '#ffc107';
            case 'info': return '#17a2b8';
            default: return '#e63946'; // error
        }
    }};
    color: #fff;
    padding: 12px 24px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    font-weight: bold;
    z-index: 9999;
    animation: ${props => props.isVisible ? 'fadeIn' : 'fadeOut'} 0.3s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateX(100%);
        }
        to {
            opacity: 1;
            transform: translateX(0);
        }
    }
    
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100%);
        }
    }
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
    margin-left: 12px;
    padding: 0;
    opacity: 0.8;
    
    &:hover {
        opacity: 1;
    }
`;

const Toast = ({ 
    children, 
    message,
    type = 'error', 
    onClose,
    autoClose = true 
}) => {
    const content = children || message;
    
    if (!content) return null;

    return (
        <ToastBox type={type} isVisible={true}>
            <span>{content}</span>
            {onClose && (
                <CloseButton onClick={onClose} type="button">
                    ×
                </CloseButton>
            )}
        </ToastBox>
    );
};

export default Toast;