"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { fetchuser, updateProfile } from "@/actions/useractions";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';

const Dashboard = () => {
  const { data: session, update } = useSession();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    username: "",
    profilepic: "",
    coverpic: "",
    razorpayId: "",
    razorpaySecret: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    getData();
    if (!session) {
      router.push("/login");
    }
  }, [session, router]);

  const getData = async () => {
    try {
      const u = await fetchuser(session.user.name);
      setForm(u);
    } catch (error) {
      toast.error('Failed to load profile data');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create FormData object
      const formData = new FormData();
      Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
      });

      await updateProfile(formData, session.user.name);
      toast.success('Profile Updated', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to your Dashboard
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl overflow-hidden p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Full Name"
                name="name"
                value={form.name}
                handleChange={handleChange}
                placeholder="Your full name"
              />
              <InputField
                label="Email"
                name="email"
                value={form.email}
                handleChange={handleChange}
                type="email"
                placeholder="your@email.com"
                disabled
              />
              <InputField
                label="Username"
                name="username"
                value={form.username}
                handleChange={handleChange}
                placeholder="yourusername"
              />
              <InputField
                label="Profile Picture URL"
                name="profilepic"
                value={form.profilepic}
                handleChange={handleChange}
                placeholder="https://example.com/profile.jpg"
              />
              <InputField
                label="Cover Picture URL"
                name="coverpic"
                value={form.coverpic}
                handleChange={handleChange}
                placeholder="https://example.com/cover.jpg"
              />
              <InputField
                label="Razorpay Key ID"
                name="razorpayId"
                value={form.razorpayId}
                handleChange={handleChange}
                placeholder="rzp_test_xxxxxxxxxxxx"
              />
              <InputField
                label="Razorpay Key Secret"
                name="razorpaySecret"
                value={form.razorpaySecret}
                handleChange={handleChange}
                placeholder="xxxxxxxxxxxxxxxxxxxx"
                type="password"
              />
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

const InputField = ({ 
  label, 
  name, 
  value, 
  handleChange, 
  type = "text", 
  placeholder = "", 
  disabled = false 
}) => (
  <div>
    <label 
      htmlFor={name} 
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value || ''}
      onChange={handleChange}
      placeholder={placeholder}
      disabled={disabled}
      className="w-full px-4 py-2.5 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out disabled:bg-gray-100 disabled:text-gray-500"
    />
  </div>
);

export default Dashboard;