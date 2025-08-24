// hooks/useAuthForm.js - ATUALIZADO
import { useState } from 'react';
import { useAuth } from './authContext';
import { useNavigate } from 'react-router-dom';
import useToast from './useToast';

const useAuthForm = (type = 'login') => {
    const { loginUser, registerUser } = useAuth();
    const [username, setUsername] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();
    const { toast, showError, showSuccess, hideToast, hasMessage } = useToast();

    const getMessages = () => ({
        error: type === 'login' 
            ? 'Erro ao fazer login. Tente novamente.'
            : 'Erro ao cadastrar usuário. Tente novamente.',
        success: type === 'login'
            ? 'Login realizado com sucesso!'
            : 'Cadastro realizado com sucesso!',
        validation: 'Digite um nome de usuário.',
        buttonText: type === 'login' ? 'Login' : 'Cadastrar',
        loadingText: type === 'login' ? 'Entrando...' : 'Cadastrando...'
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (isSubmitting) return;
        
        if (!username.trim()) {
            showError(getMessages().validation);
            return;
        }

        setIsSubmitting(true);
        
        try {
            const authFunction = type === 'login' ? loginUser : registerUser;
            await authFunction(username);
            
            showSuccess(getMessages().success);
            
            setTimeout(() => {
                navigate('/');
            }, 1500);
            
        } catch (err) {
            showError(getMessages().error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const resetForm = () => {
        setUsername('');
    };

    return {
        username,
        setUsername,
        isSubmitting,
        
        toast,
        hasMessage,
        hideToast,
        
        handleSubmit,
        resetForm,
        
        messages: getMessages(),
    };
};

export default useAuthForm;