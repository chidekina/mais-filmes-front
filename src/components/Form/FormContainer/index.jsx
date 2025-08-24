import styled from "styled-components";

const FormBox = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;

    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 16px;
        max-width: 320px;
        width: 100%;
        margin-top: 60px;
        padding: 20px;
        background: var(--light-gray-color);
        border-radius: 10px;
        box-shadow: 0 2px 8px var(--black-graphite-color);
    
        & form {
            display: flex;
            gap: 14px;
            flex-direction: column;
            justify-content: center;
        }

        @media (min-width: 640px) {
            gap: 18px;
            max-width: 360px;
            margin-top: 70px;
            padding: 22px;
            border-radius: 11px;
            
            & form {
                gap: 15px;
            }
        }

        @media (min-width: 768px) {
            gap: 20px;
            max-width: 400px;
            margin-top: 80px;
            padding: 24px;
            border-radius: 12px;
            
            & form {
                gap: 16px;
            }
        }
    }
`

const FormContainer = ({ onSubmit, children }) => {
    return (
        <FormBox>
            <div>
                <form onSubmit={onSubmit}>
                    {children}
                </form>
            </div>
        </FormBox>
    );
}

export default FormContainer;