import styled from "styled-components";

const SearchInput = styled.input`
    background-color: var(--medium-gray-color);
    border: none;
    margin-top: 40px;
    border-radius: 20px;
    padding: 5px 15px;
    background-image: url("../../assets/magnifying-glass.svg");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 20px 20px;
`

const SearchBar = () => {
    return (
        <SearchInput
            placeholder="Procura filme"
        />
    );
}

export default SearchBar;