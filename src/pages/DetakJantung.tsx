import { HeartPulse } from "lucide-react";

const DetakJantung = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <HeartPulse className="text-white w-40 h-40" />
        <p className="text-white text-2xl text-center">
          <span className="text-5xl">30</span> phm
        </p>
      </div>
    </div>
  );
};

export default DetakJantung;
