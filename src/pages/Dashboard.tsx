import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import { Headset, HeartPulse, MessageCircleWarning } from "lucide-react";

const Dashboard = () => {
  return (
    <MainLayout>
      <div>
        <div className="bg-white w-full h-[62vh] absolute bottom-0 rounded-t-[50px] px-5 py-5">
          <Button className="w-full my-3 shadow-md justify-start gap-2 h-14 text-xl">
            <MessageCircleWarning className="h-12 w-12" />
            Laporan
          </Button>
          <Button className="w-full my-3 shadow-md justify-start gap-2 h-14 text-xl">
            <Headset className="h-12 w-12" />
            Konsultasi
          </Button>
          <Button className="w-full my-3 shadow-md justify-start gap-2 h-14 text-xl">
            <HeartPulse className="h-12 w-12" />
            Detak Jantung
          </Button>
        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;
