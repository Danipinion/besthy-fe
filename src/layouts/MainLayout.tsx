import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const userId = localStorage.getItem("userId");
  const navigate = useNavigate();
  useEffect(() => {
    if (!userId) {
      navigate("/");
    }
  }, [navigate]);
  return (
    <>
      <Navbar />
      <div className="mt-12 text-white">{children}</div>
      <BottomNav />
    </>
  );
};

export default MainLayout;
