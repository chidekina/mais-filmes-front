import styled from "styled-components";

const SearchInput = styled.input`
    background-color: var(--medium-gray-color);
    border: none;
    margin: 40px 0;
    border-radius: 20px;
    padding: 5px 15px;
    background-image: url("/magnifying-glass.svg");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 20px 20px;
    color: var(--light-gray-color);
    width: 650px;
    height: 30px;

    &:focus {
        outline: 1px solid var(--light-gray-color);
        color: transparent;
    }
`

const SearchBar = () => {
    return ( 
        <SearchInput 
            placeholder="Procura filme"
        />
     );
}
 
export default SearchBar;