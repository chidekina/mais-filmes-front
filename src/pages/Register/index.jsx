import Toast from '../../components/Toast';
import Form from '../../components/Form';
import useAuthForm from '../../hooks/useAuthForm';

const Register = () => {
    const {
        username,
        setUsername,
        isSubmitting,
        toast,
        hasMessage,
        hideToast,
        handleSubmit,
        messages,
    } = useAuthForm('register');

    return (
        <>
            {hasMessage && (
                <Toast 
                    type={toast.type}
                    onClose={hideToast}
                >
                    {toast.message}
                </Toast>
            )}
            
            <Form
                onSubmit={handleSubmit}
                title="Cadastro"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                bgColor="var(--medium-gray-color)"
                buttonText={isSubmitting ? messages.loadingText : messages.buttonText}
                disabled={isSubmitting}
            />
        </>
    );
};

export default Register;