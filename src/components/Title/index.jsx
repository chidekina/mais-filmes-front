import styled from "styled-components";

const TextHead = styled.div`
    font-family: "Inter", sans-serif;
    font-size: 30px;
    font-weight: 600;
    margin: 24px 0;
    text-align: center;
    line-height: 1.3;

    @media (min-width: 640px) {
        margin-bottom: 13px;
    }

    @media (min-width: 768px) {
        font-size: 32px;
        margin-bottom: 15px;
        text-align: left;
    }
`

const Title = ({ children }) => {
    return (
        <TextHead>
            {children}
        </TextHead>
    );
}

export default Title;