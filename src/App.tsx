import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import DetakJantung from "./pages/DetakJantung";
import Laporan from "./pages/Laporan";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Psikoter from "./pages/Psikoter";
import About from "./pages/About";
import PraPsikotes from "./pages/PraPsikotes";
import GameMenu from "./pages/GameMenu";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user/profile" element={<Profile />} />
        <Route path="/user/laporan" element={<Laporan />} />
        <Route path="/user/pra-psikotes" element={<PraPsikotes />} />
        <Route path="/user/psikotes" element={<Psikoter />} />
        <Route path="/user/detakJantung" element={<DetakJantung />} />
        <Route path="/user/game-menu" element={<GameMenu />} />
        <Route path="/game/tetris" element={<GameMenu />} />
        <Route path="/game/dino" element={<GameMenu />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
