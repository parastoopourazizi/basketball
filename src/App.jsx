import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import History from "./pages/History";
import Picture from "./pages/Picture";
import Members from "./pages/Members";
import News from "./pages/news/News";
import AddNews from "./pages/addNews/AddNews";
import EditNews from "./pages/editNews/editNews";
import Login from "./components/Login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/History" element={<History />} />
        <Route path="/Members" element={<Members />} />
        <Route path="/News" element={<News />} />
        <Route path="add-news" element={<AddNews />} />
        <Route path="edit-news" element={<EditNews />} />

        <Route path="/Picture" element={<Picture />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
