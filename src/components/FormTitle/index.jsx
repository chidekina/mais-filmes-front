import styled from "styled-components";

const Title = styled.h2`
    color: var(--medium-gray-color);
    font-weight: 700;
    font-size: 20px;
`

const FormTitle = ({ title }) => {
    return (
        <Title>{title}</Title>
    );
}

export default FormTitle;