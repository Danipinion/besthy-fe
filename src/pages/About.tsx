import MainLayout from "@/layouts/MainLayout";
import logo from "@/assets/img/logo.png";

const About = () => {
  return (
    <MainLayout>
      <div className="p-3">
        <h1 className="text-3xl font-bold mb-5">About Us</h1>
        <div className="h-[75vh] w-full bg-gray-100 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-30 border border-gray-100 p-3 flex flex-col items-center ">
          <img src={logo} alt="" className="w-2/5" />
          <h1 className="text-3xl font-bold">Besthy</h1>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
