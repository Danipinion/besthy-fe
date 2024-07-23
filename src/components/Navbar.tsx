import { Disc3, Settings } from "lucide-react";

const Navbar = () => {
  return (
    <nav className=" w-full flex h-12 fixed top-0 bg-primary text-white">
      <div className="flex items-center justify-between w-full h-full px-5">
        <Settings />
        <Disc3 />
      </div>
    </nav>
  );
};

export default Navbar;
