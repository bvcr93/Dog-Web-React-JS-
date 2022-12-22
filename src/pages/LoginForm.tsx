import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../components/UserContext";
import { Navigate } from "react-router-dom";
import { auth, provider } from "../config/firebase";
import { signInWithPopup } from "firebase/auth";
import Input from "../components/Input";


const LoginForm = () => {
  const [input, setInput] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const { setIsAuth, isAuth, err, setErr } = useContext(UserContext);

  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    setIsAuth(true);
  };

  const submitHandler = (e: React.FormEvent) => {
    if (pwd.length < 8) {
      setIsAuth(false);
      setErr("must contain more than 8 characters");
    } else {
      setIsAuth(true);
    }
    e.preventDefault();

    console.log(isAuth);
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-screen">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Sign in to your account
            </h1>
            <form
              onSubmit={submitHandler}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your name
                </label>
                <Input
                  type="text"
                  placeholder="name..."
                  onChange={(e) => setInput(e.target.value)}
                />
                {err && <p className="text-red-500">{err}</p>}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <Input
                  type="email"
                  placeholder="Email..."
                  onChange={(e) => setEmail(e.target.value)}
                />
                {err && <p className="text-red-500">{err}</p>}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <Input
                  type="password"
                  placeholder="Password"
                  onChange={(e) => setPwd(e.target.value)}
                />
                {err && <p className="text-red-500">{err}</p>}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5 ">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-gray-500 dark:text-gray-300"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <p className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Forgot password?
                </p>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in
              </button>

              <button
                onClick={signInWithGoogle}
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Sign in with Google
              </button>

              <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                Don't have an account yet?{" "}
                <p className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                  Sign up
                </p>
              </p>
            </form>
          </div>
        </div>
      </div>
      {isAuth && <Navigate to="/" />}
    </section>
  );
};

export default LoginForm;
