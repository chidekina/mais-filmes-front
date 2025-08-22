import { useState, useEffect } from 'react';
import { useAuth } from '../../hooks/authContext';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../../components/FormContainer';
import FormTitle from '../../components/FormTitle';
import FormInput from '../../components/FormInput';
import Toast from '../../components/Toast';


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
            <FormContainer onSubmit={handleSubmit}>
                    <FormTitle title="Cadastro" />
                    <FormInput
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        bgColor="var(--medium-gray-color)"
                        buttonText="Cadastrar"
                    />
            </FormContainer>
        </>
    );
};

export default Register;