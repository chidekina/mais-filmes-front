import MainContainer from "../../components/MainContainer";
import SearchBar from "../../components/SearchBar";
import WelcomeTitle from "../../components/WelcomeTitle";

const Home = () => {
    return ( 
        <MainContainer>
            <WelcomeTitle />
            <SearchBar />
        </MainContainer>
     );
}
 
export default Home;