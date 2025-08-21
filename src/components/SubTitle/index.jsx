import styled from "styled-components";

const SubTitleHead = styled.span`
    font-size: 28px;
    font-weight: 450;
`

const SubTitle = ({ children }) => {
    return ( 
        <SubTitleHead>
            {children}
        </SubTitleHead>
     );
}
 
export default SubTitle;