import {BrowserRouter, Route, Routes} from "react-router-dom";
import * as route from './routes/Slugs'
import Home from "./pages/home.jsx";
import Profile from "./pages/profile.jsx";
import Navbar from "./components/Navbar.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Markets from "./pages/markets.jsx";
import Transaction from "./pages/transaction.jsx";
import Settings from "./pages/settings.jsx";
import Help from "./pages/help.jsx";
import Auth from "./pages/auth.jsx";
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
                                <Route path={route.MARKET_PATH} element={<Markets/>} />
                                <Route path={route.TRANSACTION_PATH} element={<Transaction/>} />
                                <Route path={route.PROFILE_PATH} element={<Profile/>} />
                                <Route path={route.SETTINGS_PATH} element={<Settings/>} />
                                <Route path={route.HELP_PATH} element={<Help/>} />
                                <Route path={route.AUTH_PATH} element={<Auth/>} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        </>
    )
}

export default App
