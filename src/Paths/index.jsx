import { BrowserRouter, Route, Routes } from "react-router";
import SiteLayout from "../SiteLayout";
import Home from "../pages/Home";

const Paths = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SiteLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Paths;