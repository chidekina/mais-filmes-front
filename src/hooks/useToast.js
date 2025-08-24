// hooks/useToast.js
import { useState, useEffect, useCallback } from 'react';

const useToast = (duration = 3000) => {
    const [toast, setToast] = useState({
        message: '',
        type: 'error',
        isVisible: false
    });

    useEffect(() => {
        if (toast.message && toast.isVisible) {
            const timer = setTimeout(() => {
                setToast(prev => ({ ...prev, isVisible: false }));
                
                // Remove completamente após animação
                setTimeout(() => {
                    setToast({ message: '', type: 'error', isVisible: false });
                }, 300); // Tempo da animação
                
            }, duration);
            
            return () => clearTimeout(timer);
        }
    }, [toast.message, toast.isVisible, duration]);

    const showToast = useCallback((message, type = 'error') => {
        setToast({
            message,
            type,
            isVisible: true
        });
    }, []);

    const hideToast = useCallback(() => {
        setToast(prev => ({ ...prev, isVisible: false }));
        setTimeout(() => {
            setToast({ message: '', type: 'error', isVisible: false });
        }, 300);
    }, []);

    const showSuccess = useCallback((message) => showToast(message, 'success'), [showToast]);
    const showError = useCallback((message) => showToast(message, 'error'), [showToast]);
    const showWarning = useCallback((message) => showToast(message, 'warning'), [showToast]);
    const showInfo = useCallback((message) => showToast(message, 'info'), [showToast]);

    return {
        toast,
        showToast,
        hideToast,
        showSuccess,
        showError,
        showWarning,
        showInfo,
        hasMessage: !!toast.message,
        
        message: toast.message,
    };
};

export default useToast;