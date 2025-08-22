import styled from 'styled-components';

const Input = styled.input`
    width: 300px;
    padding: 10px;
    border-radius: 6px;
    border: 1px solid var(--medium-gray-color);

    &:focus {
        outline: none;
    }
    `

const Button = styled.button`
    width: 100%;
    padding: 10px;
    border-radius: 6px;
    background: ${props => props.$bgColor};
    border: none;
    font-weight: 800;
    color: white;
    align-self: center;
`
const FormInput = ({ value, onChange, bgColor, buttonText }) => {
    return (
        <>
            <Input
                type="text"
                placeholder="Nome de usuário"
                value={value}
                onChange={onChange}
            />
            <Button 
            type="submit"
            $bgColor={bgColor}
            >
                {buttonText}
            </Button>
        </>
    );
}

export default FormInput;