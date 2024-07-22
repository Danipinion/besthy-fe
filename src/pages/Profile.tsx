import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import MainLayout from "@/layouts/MainLayout";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe, LogOut, reset } from "@/hooks/authSlice";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { AppDispatch } from "@/store";

const Profile = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { user, isError } = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/");
    }
  }, [isError, user, navigate]);

  const handleLogout = async () => {
    await dispatch(LogOut());
    dispatch(reset());
    navigate("/");
  };

  return (
    <MainLayout>
      <div className="font-bold px-2 py-2">
        <h1 className="ml-10 text-3xl">Profile</h1>
        <div className="flex flex-col items-center justify-center">
          <div className="h-full w-4/5 bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 relative mt-10 flex flex-col items-center justify-center px-5 py-5">
            <Avatar className="rounded-full w-20 h-20 absolute -top-10">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="self-start mt-10 w-full flex flex-col gap-2">
              <div>
                <p className="text-neutral-300">Nama Pengguna</p>
                <input
                  type="text"
                  disabled
                  value={"BOCIL"}
                  className="font-normal bg-transparent border-b w-full"
                />
              </div>
              <div>
                <p className="text-neutral-300">Email</p>
                <input
                  type="text"
                  disabled
                  value={"BOCILEPEP@gamil.com"}
                  className="font-normal bg-transparent border-b w-full"
                />
              </div>
              <div>
                <p className="text-neutral-300">Nomor Telepon</p>
                <input
                  type="text"
                  disabled
                  value={"+628123456789"}
                  className="font-normal bg-transparent border-b w-full"
                />
              </div>
              <div>
                <p className="text-neutral-300">Jenis Kelamin</p>
                <input
                  type="text"
                  disabled
                  value={"Laki-Laki"}
                  className="font-normal bg-transparent border-b w-full"
                />
              </div>
              <div>
                <p className="text-neutral-300">Tanggal Lahir</p>
                <input
                  type="text"
                  disabled
                  value={"12-maret-2022"}
                  className="font-normal bg-transparent border-b w-full"
                />
              </div>
              <div>
                <p className="text-neutral-300">Jenis Kodam</p>
                <input
                  type="text"
                  disabled
                  value={"Pecel Lele"}
                  className="font-normal bg-transparent border-b w-full"
                />
              </div>
            </div>
          </div>
          <div className="w-4/5">
            <Button onClick={handleLogout} className="mt-5 w-full">
              Logout
            </Button>
            <Link to={"/about"} className="mt-5">
              <p className="mt-10 text-center font-light hover:underline">
                About us
              </p>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Profile;
