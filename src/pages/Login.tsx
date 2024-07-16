import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="flex flex-col w-full  h-screen items-center justify-center text-white">
        <div>
          <h1 className="text-3xl font-bold mb-3">Login</h1>
        </div>
        <div className="text-black">
          <form className="flex flex-col gap-2">
            <div>
              <input
                type="text"
                className="w-60 h-12 px-2 border-2 rounded-lg placeholder:text-sm"
                placeholder="Username or Email"
              />
            </div>
            <div>
              <input
                type="password"
                className="w-60 h-12 px-2 border-2 rounded-lg placeholder:text-sm"
                placeholder="Password"
              />
            </div>

            <div>
              <Link to="/dashboard">
                <Button className="w-full my-2 shadow-md">Login</Button>
              </Link>
            </div>
            <div>
              <p className="text-white text-sm text-center font-light">
                Belum punya akun?{" "}
                <Link to="/register" className="hover:underline font-semibold">
                  Daftar
                </Link>
              </p>
            </div>
          </form>
        </div>
        <div></div>
      </div>
    </>
  );
};

export default Login;
