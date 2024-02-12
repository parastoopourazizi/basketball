import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Picture from "./pages/Picture";
import Members from "./pages/Members";
import News from "./pages/news/News";
import Login from "./components/Login/Login";
import Register from "./components/register/Register";
import AdminPanel from "./admin/AdminPanel";
import NewsPage from "./admin/news/NewsPanel";
import ImagesPanel from "./admin/images/ImagesPanel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/History" element={<History />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/News" element={<News />} />

        <Route path="/Picture" element={<Picture />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/admin" element={ <AdminPanel /> } />
        <Route path="/admin/news" element={ <NewsPage /> } />
        <Route path="/admin/images" element={ <ImagesPanel /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
