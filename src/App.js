import React from "react";
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import News from "./Components/News/News"
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
    return (
        <BrowserRouter>
            <div className='Portfolio'>
                <Header/>
                <Nav/>
                <div className='Portfolio-content'>
                    <Routes>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route/>
                        {/*<Profile/>*/}
                        <Route path="/Dialogs" element={<Dialogs/>}/>
                        <Route path="/News" element={<News/>}/>
                         <Route path="/Music" element={<Music/>}/>
                          <Route path="/Settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
)
}

export default App;
