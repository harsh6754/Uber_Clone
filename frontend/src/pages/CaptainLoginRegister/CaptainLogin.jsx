import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../../context/CaptainContext";

const CaptainLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [captainData, setCaptainData] = useState("");
  const {captain,setCaptain} = useContext(CaptainDataContext)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const captainData = {
      email: email,
      password: password,
    };
    const response =  await axios.post(`${import.meta.env.VITE_BASE_URL}/api/captains/login`,captainData);
    if(response.status === 200){
      const data = response.data
      setCaptain(data.captain)
      localStorage.setItem('token',data.token)
      navigate('/captain-home')
    }
    setEmail("");
    setPassword("");
  };

  useEffect(() => {
    if (captainData && captainData.email) {
      console.log("Updated captainData state:", captainData);
    }
  }, [captainData]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-100 to-slate-50 px-4 flex items-center justify-center">
      <div className="w-full max-w-md rounded-3xl bg-white border border-slate-200 p-8 shadow-2xl">
        <img
          className="w-20 mb-8"
          src="https://cdn.brandfetch.io/ididNbiiOd/theme/dark/logo.svg?c=1bxid64Mup7aczewSAYMX&t=1667562044439"
          alt="Captain Login"
        />

        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Captain Login</h1>
          <p className="mt-2 text-sm text-slate-500">Access your captain account</p>
        </div>

        <form onSubmit={(e) => handleSubmit(e)} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
            <input
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-base text-slate-900 placeholder:text-slate-400 focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200 transition"
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
          <Link to="/captain-signup" className="font-semibold text-blue-600 hover:text-blue-700 transition">
            Sign up
          </Link>
        </p>

        <div className="mt-8 pt-6 border-t border-slate-200">
          <Link
            to="/user-login"
            className="flex items-center justify-center w-full rounded-xl bg-amber-500 px-4 py-3 text-base font-semibold text-white transition hover:bg-amber-600 active:scale-95"
          >
            Sign in as User
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CaptainLogin;
