import BottomNav from "@/components/BottomNav";
import Navbar from "@/components/Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="mt-12 text-white">{children}</div>
      <BottomNav/>
    </>
  );
};

export default MainLayout;
