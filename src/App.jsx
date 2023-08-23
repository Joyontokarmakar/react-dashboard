import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as route from './routes/Slugs'
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
function App() {



    return (
        <>
            <BrowserRouter>
                <div className={'flex justify-start'}>
                    <div className={'w-[308px]'}>
                        <Sidebar/>
                    </div>
                    <div className={'w-full'}>
                        <Navbar/>
                        <Routes>
                            <Route path={route.ROOT_PATH} element={<Home/>} />
                            <Route path={route.PROFILE_PATH} element={<Profile/>} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
