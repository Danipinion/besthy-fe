import MainLayout from "@/layouts/MainLayout";
import { HeartPulse } from "lucide-react";

const DetakJantung = () => {
  return (
    <MainLayout>
      <div className="p-5">
        <h1 className="text-3xl font-bold text-white mb-10">
          Monitor <br /> Detak Jantung
        </h1>
        <div className="h-full w-full  text-black bg-gray-100 rounded-xl border border-gray-100 py-3 px-5 text-left text-sm flex flex-col items-center">
          <div className="flex items-center flex-col">
            <h1 className="text-3xl font-bold">Hearth /Rate</h1>
            <HeartPulse size={100} className="text-red-500" />
            <p className="text-xl font-bold">99 BPM</p>
          </div>
          <div>
            Detak Jantung Anda{" "}
            <span className="text-green-500 font-bold">Normal</span>
          </div>
          <div className="w-full">
            <h1 className="text-xl font-bold my-4">Riwayat Detak Jantung</h1>
            <table className=" w-full ">
              <tr>
                <th>Tanggal</th>
                <th>Jam</th>
                <th>BPM</th>
              </tr>
              <tr>
                <td>21-03-2022</td>
                <td>10:00</td>
                <td>99 BPM</td>
              </tr>
              <tr></tr>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DetakJantung;
