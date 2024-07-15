import { Menu, SidebarClose } from "lucide-react";

// const navLinks = [
//   {
//     id: "home",
//     title: "Home",
//   },
//   {
//     id: "features",
//     title: "Features",
//   },
//   {
//     id: "product",
//     title: "Product",
//   },
//   {
//     id: "clients",
//     title: "Clients",
//   },
// ];

const Navbar = () => {
  return (
    <nav className=" w-full flex h-12 fixed top-0 bg-primary text-white">
      <div className="flex items-center justify-between w-full h-full px-5">
        <Menu />
        <SidebarClose />
      </div>
    </nav>
  );
};

export default Navbar;
