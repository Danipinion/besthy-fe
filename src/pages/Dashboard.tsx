import person from "@/assets/img/home.png";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import { AudioLines, BookOpenCheck, Gamepad, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <MainLayout>
      <div>
        <div className="pt-3 px-10">
          <div>
            <h1 className="text-3xl font-light">Welcome To</h1>
            <p className="font-bold text-4xl">BESTHY</p>
          </div>
          <div className="realtive w-full">
            <img src={person} alt="" className="w-[20vh] -mx-10" />
            <p className="text- sm:xl font-bold text-black bg-slate-100 p-2 absolute top-44  right-5 z-10 w-3/5 rounded-md">
              Hallo Aku Clara, ada yang bisa saya bantu?
            </p>
          </div>
        </div>
        <div className="bg-white w-full h-[70vh] absolute bottom-0 rounded-t-[50px] px-10 py-10">
          <Link to={"/user/psikotes"}>
            <Button className="w-full my-3 shadow-md justify-start gap-2 h-14 text-xl">
              <BookOpenCheck className="h-9 w-9" />
              Tes Kepribadian
            </Button>
          </Link>
          <Link to={"/user/detakJantung"}>
            <Button className="w-full my-3 shadow-md justify-start gap-2 h-14 text-xl">
              <AudioLines className="h-9 w-9" />
              Detak Jantung
            </Button>
          </Link>
          <Link to={"/user/komunitas"}>
            <Button className="w-full my-3 shadow-md justify-start gap-2 h-14 text-xl">
              <Users className="h-9 w-9" />
              Komunitas
            </Button>
          </Link>
          <Link to={"/user/games"}>
            <Button className="w-full my-3 shadow-md justify-start gap-2 h-14 text-xl">
              <Gamepad className="h-9 w-9" />
              Games
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
