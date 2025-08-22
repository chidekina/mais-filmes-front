import styled from "styled-components";

const FormBox = styled.div`
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 14px;

    & div {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;
        max-width: 400px;
        width: 100%;
        margin-top: 80px;
        padding: 24px;
        background: var(--light-gray-color);
        border-radius: 12px;
        box-shadow: 0 2px 8px var(--black-graphite-color);
    
        & form {
            display: flex;
            gap: 16px;
            flex-direction: column;
            justify-content: center;

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