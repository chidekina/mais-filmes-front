import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/authContext';
import { useNavigate } from 'react-router-dom';
import Toast from '../../components/Toast';
import Form from '../../components/Form';


const Login = () => {
    const { loginUser } = useAuth();
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();


    useEffect(() => {
        if (error) {
            const timer = setTimeout(() => setError(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [error]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username.trim()) {
            setError('Digite um nome de usuário.');
            return;
        }
        loginUser(username);
        navigate('/');
    };

    return (
        <>
            {error && <Toast>{error}</Toast>}
            <Form
                onSubmit={handleSubmit}
                title="Login"
                value={username}
                onChange={e => setUsername(e.target.value)}
                bgColor="var(--highlight-color)"
                buttonText="Login"
            />
        </>
    );
};

export default Login;
