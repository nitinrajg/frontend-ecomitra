import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Notification from "./Notification";
import { supabase } from "../config/supabase";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [notification, setNotification] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      setNotification({
        message: "Passwords do not match",
        type: 'error',
        onClose: () => setNotification(null)
      });
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          data: {
            full_name: formData.name
          }
        }
      });

      if (error) throw error;

      setNotification({
        message: "Signup successful! Please check your email to confirm.",
        type: "success",
        onClose: () => navigate('/login')
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
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 space-y-6">
        <h1 className="text-4xl font-bold text-[#26B33B] flex items-center space-x-2">
          <span>Sign Up</span>
          <span className="text-sm font-light text-[#26B33B] ml-2">as a Business</span>
        </h1>
        
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full name"
          className="w-full p-3 border border-[#26B33B] bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B33B]"
          required
        />
        
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email address"
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

        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm Password"
            className="w-full p-3 border border-[#26B33B] bg-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-[#26B33B]"
            required
          />
        </div>

        <button 
          type="submit"
          className="w-full py-3 bg-[#26B33B] text-white rounded-md hover:bg-[#1f8f2f] transition-colors"
        >
          Sign Up
        </button>

        <p className="text-sm text-center text-gray-400">
          Already have an account? <Link to="/login" className="text-[#26B33B]">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;