import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import { Link } from "react-router-dom";

const GameMenu = () => {
  return (
    <MainLayout>
      <div className="p-5 ">
        <h1 className="font-bold text-3xl">Game Menu</h1>
        <div className="h-full w-fulls flex flex-col items-center justify-center px-5">
          <Link to={"/game/tetris"} className="w-full">
            <Button
              variant={"secondary"}
              className="border-2 border-black shadow-2xl mt-5 text-2xl font-bold rounded-xl py-7 w-full"
            >
              Tetris
            </Button>
          </Link>
          <Link to={"/game/dino"} className="w-full">
            <Button
              variant={"secondary"}
              className="border-2 border-black shadow-2xl mt-5 text-2xl font-bold rounded-xl py-7 w-full"
            >
              Dino
            </Button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default GameMenu;
