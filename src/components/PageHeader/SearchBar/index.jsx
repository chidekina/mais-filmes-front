import styled from "styled-components";

const SearchInput = styled.input`
    background-color: var(--medium-gray-color);
    border: none;
    margin: 30px 0;
    border-radius: 20px;
    padding: 8px 15px;
    background-image: url("/magnifying-glass.svg");
    background-repeat: no-repeat;
    background-position: right 15px center;
    background-size: 18px 18px;
    color: var(--light-gray-color);
    width: 100%;
    max-width: 300px;
    height: 35px;
    box-sizing: border-box;

    @media (min-width: 640px) {
        margin: 35px 0;
        max-width: 400px;
        background-size: 19px 19px;
    }

    @media (min-width: 768px) {
        margin: 40px 0;
        max-width: 500px;
        height: 30px;
        background-size: 20px 20px;
        padding: 5px 15px;
    }

    @media (min-width: 1024px) {
        max-width: 650px;
    }

    &:focus {
        outline: 1px solid var(--light-gray-color);
    }
`

const SearchBar = ({ value, onChange }) => {
    return (
        <SearchInput
            placeholder="Procurar filme"
            value={value}
            onChange={e => onChange(e.target.value)}
        />
    );
}

export default SearchBar;