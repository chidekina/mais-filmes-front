import WelcomeTitle from "./WelcomeTitle";
import SearchBar from "./SearchBar";

const PageHeader = ({ search, setSearch }) => (
    <>
        <WelcomeTitle />
        <SearchBar value={search} onChange={setSearch} />
    </>
);

export default PageHeader;
