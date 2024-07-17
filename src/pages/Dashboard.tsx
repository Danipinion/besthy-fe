import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import {
  AudioLines,
  Headset,
  HeartPulse,
  MessageCircleWarning,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <MainLayout>
      <div>
        <div className="bg-white w-full h-[55vh] absolute bottom-0 rounded-t-[50px] px-10 py-10">
          <Button className="w-full my-3 shadow-md justify-start gap-2 h-14 text-xl">
            <MessageCircleWarning className="h-9 w-9" />
            Laporan
          </Button>
          <Button className="w-full my-3 shadow-md justify-start gap-2 h-14 text-xl">
            <Link
              to={"/user/detakJantung"}
              className="flex gap-2 items-center  w-full"
            >
              <AudioLines className="h-9 w-9" />
              Detak Jantung
            </Link>
          </Button>
          <Button className="w-full my-3 shadow-md justify-start gap-2 h-14 text-xl">
            <Headset className="h-9 w-9" />
            Konsultasi
          </Button>
          <Button className="w-full my-3 shadow-md justify-start gap-2 h-14 text-xl">
            <HeartPulse className="h-9 w-9" />
            Detak Jantung
          </Button>
          <Button className="w-full my-3 shadow-md justify-start gap-2 h-14 text-xl">
            <Users className="h-9 w-9" />
            Komunitas
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
