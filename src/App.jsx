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
                <div className={'flex justify-start font-inter'}>
                    <div className={'w-[308px]'}>
                        <Sidebar/>
                    </div>
                    <div className={'min-w-[calc(100vw-308px)]'}>
                        <Navbar/>
                        <div className={'h-[calc(100vh-98px)] px-[33px] py-[28px] bg-lightSecondaryColor dark:bg-darkSecondaryColor'}>
                            <Routes>
                                <Route path={route.ROOT_PATH} element={<Home/>} />
                                <Route path={route.PROFILE_PATH} element={<Profile/>} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
