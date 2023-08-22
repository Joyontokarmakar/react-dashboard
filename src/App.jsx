import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as route from './routes/Slugs'
import {Home} from "./pages/home.jsx";
import {Profile} from "./pages/profile.jsx";
import {Header} from "./components/Header.jsx";
import {Footer} from "./components/Footer.jsx";
function App() {



    return (
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path={route.ROOT_PATH} element={<Home/>} />
                    <Route path={route.PROFILE_PATH} element={<Profile/>} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default App
