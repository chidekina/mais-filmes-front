import Toast from '../../components/Toast';
import Form from '../../components/Form';
import useAuthForm from '../../hooks/useAuthForm';

const Login = () => {
    const {
        username,
        setUsername,
        isSubmitting,
        toast,
        hasMessage,
        hideToast,
        handleSubmit,
        messages,
    } = useAuthForm('login');

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
                title="Login"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                bgColor="var(--highlight-color)"
                buttonText={isSubmitting ? messages.loadingText : messages.buttonText}
                disabled={isSubmitting}
            />
        </>
    );
};

export default Login;