import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import arrow_icon_right from "../assets/cuate.png";
import { supabase } from "../config/supabase";
import Notification from "./Notification";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password
      });

      if (error) throw error;

      setNotification({
        message: "Login successful! Redirecting to homepage.",
        type: "success",
        onClose: () => {
          navigate('/');
          window.location.reload();
        }
      });
    } catch (error) {
      setNotification({
        message: error.message,
        type: "error",
        onClose: () => setNotification(null)
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-[#1B281F] text-white px-4">
      {notification && (
        <Notification 
          message={notification.message}
          type={notification.type}
          onClose={notification.onClose}
        />
      )}
      <form onSubmit={handleSubmit} className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between p-8">
        <div className="w-full md:w-1/2 space-y-6">
          <h1 className="text-4xl font-bold text-[#26B33B] flex items-center space-x-2">
            <span>Login</span>
          </h1>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email or username"
            className="w-full p-3 border border-[#26B33B] bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B33B]"
            required
          />
          <div className="relative w-full">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 border border-[#26B33B] bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B33B]"
              required
            />
            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-4 flex items-center cursor-pointer text-[#26B33B]"
            >
              {showPassword ? "➕" : "➖"}
            </span>
          </div>
          <button 
            type="submit"
            className="flex items-center space-x-2 cursor-pointer text-[#26B33B] text-lg"
          >
            <span>Login</span>
          </button>
          <p className="text-sm text-gray-400">
            Don't have an account? <Link to="/signup" className="text-[#26B33B]">Sign up</Link>
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
          <img src={arrow_icon_right} alt="Login" className="w-full max-w-md" />
        </div>
      </form>
    </div>
  );
};

export default Login;