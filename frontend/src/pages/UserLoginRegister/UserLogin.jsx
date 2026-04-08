import React, { useState, useEffect } from "react";
import { Link ,useNavigate } from "react-router-dom";
import axios from "axios";
import { UserDataContext } from "../../context/UserContext";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState("");

  const navigate = useNavigate();
  const { user, setUser } = React.useContext(UserDataContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/api/users/login`,userData)
    if(response.status === 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token',JSON.stringify(data.token))
      navigate('/user-home')
    }

    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (userData && userData.email) {
      console.log("Updated userData state:", userData);
    }
  }, [userData]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-slate-50 px-4 flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl bg-white border border-slate-200 p-8 shadow-2xl">
        <img
          className="w-20 mb-8"
          src="https://cdn.brandfetch.io/ididNbiiOd/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667562044439"
          alt="User Login"
        />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Welcome</h1>
          <p className="mt-2 text-sm text-slate-500">Sign in to your account</p>
        </div>

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email
            </label>
            <input
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Password
            </label>
            <input
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>

          <button className="w-full rounded-xl bg-slate-900 px-4 py-3 text-base font-semibold text-white transition hover:bg-slate-800 active:scale-95">
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{" "}
          <Link
            to="/user-signup"
            className="font-semibold text-blue-600 hover:text-blue-700 transition"
          >
            Sign up
          </Link>
        </p> 

        <div className="mt-8 pt-6 border-t border-slate-200">
          <Link
            to="/captain-login"
            className="flex items-center justify-center w-full rounded-xl bg-emerald-600 px-4 py-3 text-base font-semibold text-white transition hover:bg-emerald-700 active:scale-95"
          >
            Sign in as Captain
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
