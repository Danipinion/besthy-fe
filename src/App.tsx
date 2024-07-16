import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Laporan from "./pages/Laporan";
import ChatBot from "./pages/ChatBot";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/laporan" element={<Laporan />} />
        <Route path="/user/chatbot" element={<ChatBot />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
