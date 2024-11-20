import React from 'react';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import PreLoader from "./components/PreLoader";
import DesignIdea from "./pages/DesignIdea";
import DesignDetails from "./pages/DesignDetails";
import ScrollToTop from "./components/ScrolltoTop";
import ShowRoom from "./pages/ShowRoom";
import Calculator from "./pages/Calculator";
import Contact from "./pages/Contact";

function App() {
    return (
        <div>
            <PreLoader></PreLoader>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/About" element={<About/>}/>
                    <Route path="/Design-Idea" element={<DesignIdea/>}/>
                    <Route path="/Design-Details" element={<DesignDetails/>}/>
                    <Route path="/ShowRoom" element={<ShowRoom/>}/>
                    <Route path="/Tile-Calculator" element={<Calculator/>}/>
                    <Route path="/Contact-Us" element={<Contact/>}/>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
