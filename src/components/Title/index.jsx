import styled from "styled-components";

const TextHead = styled.div`
    font-family: "Inter", sans-serif;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 15px;
`

const Title = ({ children }) => {
    return (
        <TextHead>
            {children}
        </TextHead>
    );
}

export default Title;