import styled from "styled-components";

const SubTitleHead = styled.span`
    font-size: 16px;
    font-weight: 450;
    text-align: center;

    @media (min-width: 640px) {
        font-size: 24px;
        margin-bottom: 13px;
    }

    @media (min-width: 768px) {
        font-size: 28px;
        margin-bottom: 15px;
        text-align: left;
    }
`

const SubTitle = ({ children }) => {
    return ( 
        <SubTitleHead>
            {children}
        </SubTitleHead>
     );
}
 
export default SubTitle;