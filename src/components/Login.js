import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import Button from "./Button";
import Input from "./input";
import Logo from "./Logo";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const [details, setdetails] = useState(false);

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center h-screen justify-center w-full">
      <div class="background">
        <div class="shape"></div>
        <div class="shape"></div>
      </div>
      <div className={`form mt-[22px]`} >
        <div className="mb-2 flex justify-center ">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold mt-5 leading-tight">
          Sign in to your account
        </h2>
        
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5">
            <Input
              label="Email: "
              placeholder="Enter Email"
              type="email"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              placeholder="Password"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full">
              Sign in
            </Button>
            <p className="mt-2 text-center text-base text-gray-700">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
          </div>
        </form>
        <div onMouseEnter={()=>setdetails(true)} onMouseOut={()=>setdetails(false)} className="absolute top-2 right-3">
          <p className="cursor-pointer">&#x24D8;</p>
      </div>
      {details && 
      <div className="absolute bg-white text-black top-6 right-6 p-4 rounded-xl">
              <p>username: admin@gmail.com<br/>
              password: admin123</p>
      </div>}
      </div>
      
    </div>
  );
}

export default Login;
