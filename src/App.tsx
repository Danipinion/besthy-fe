import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DetakJantung from "./pages/DetakJantung";
import Laporan from "./pages/Laporan";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/laporan" element={<Laporan />} />
        {/* <Route path="/user/chatbot" element={<ChatBot />} /> */}
        <Route path="/user/detakJantung" element={<DetakJantung />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
