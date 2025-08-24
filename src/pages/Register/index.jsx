import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/authContext';
import { useNavigate } from 'react-router-dom';
import Form from '../../components/Form';


const Register = () => {
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
                title="Cadastro"
                value={username}
                onChange={e => setUsername(e.target.value)}
                bgColor="var(--medium-gray-color)"
                buttonText="Cadastrar"
            />
        </>
    );
};

export default Register;