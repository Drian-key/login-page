import logo from "../assets/logo.png";
import google from "../assets/google.png";
import bg from "../assets/bg.jpg";

const SignIn = () => {
  return (
    <div className="mx-auto h-screen">
      <div className="flex">
        {/* login left */}
        <div className="w-full flex flex-col justify-center h-screen items-center lg:w-4/12 transition-all duration-200 ease-out">
          <div className="w-4/5">
            <div>
              <img src={logo} alt="" className="w-16" />
            </div>
            <h1 className="text-2xl font-medium my-2">Welcome Back</h1>
            <p className="text-sm text-slate-500">
              Welcome back! Please enter your details.
            </p>

            <form>
              <div className="mt-6 mb-5">
                <input
                  className="w-full bg-transparent py-3 border-b border-slate-500 focus:outline-none"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="mb-5">
                <input
                  className="w-full bg-transparent py-3 border-b border-slate-500 focus:outline-none"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-2 rounded-lg mb-4">
                Sign In
              </button>
              <button
                type="submit"
                className="w-full border-2 flex justify-center items-center gap-2 py-2 rounded-lg">
                <img src={google} className="w-5 h-auto" />{" "}
                <span>Sign in with Google</span>
              </button>
            </form>

            <p className="text-sm text-slate-700 text-center mt-4">
              Need an account?{" "}
              <a href="#" className="font-bold underline">
                Create an account
              </a>
            </p>
          </div>
        </div>

        {/* Login right */}
        <div className="hidden lg:block lg:w-4/6 h-screen transition-all duration-200 ease-out relative">
          <img className="w-full h-full absolute -z-50" src={bg} alt="" />
          <h4 className="text-8xl py-5 drop-shadow-lg text-transparent m-16 font-extrabold bg-gradient-to-r from-slate-600 to-black bg-clip-text">
            This is a gabut web.
          </h4>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
