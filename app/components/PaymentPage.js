"use client";
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions';
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { FaCoffee, FaHeart, FaRupeeSign, FaUser, FaComment } from 'react-icons/fa';

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({name: "", message: "", amount: ""});
  const [currentuser, setCurrentuser] = useState(null);
  const [payments, setPayments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    getData();
  }, [username]);

  useEffect(() => {
    if (searchParams.get("payment") === "true") {
      toast.success('Thanks for your support!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
    router.push(`/${username}`);
  }, [searchParams, username, router]);

  const getData = async () => {
    try {
      setIsLoading(true);
      const u = await fetchuser(username);
      setCurrentuser(u);
      const dbpayments = await fetchpayments(username);
      setPayments(dbpayments);
    } catch (error) {
      console.error("Error loading data:", error);
      toast.error('Failed to load profile data');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const pay = async (amount) => {
    try {
      setIsLoading(true);
      const a = await initiate(amount, username, paymentform);
      const orderId = a.id;

      const options = {
        key: currentuser.razorpayId,
        amount,
        currency: "INR",
        name: "Get Me A Chai",
        description: "Supporting creators with chai",
        image: currentuser.profilepic || "https://getmeachai.com/logo.png",
        order_id: orderId,
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        prefill: {
          name: paymentform.name || "Anonymous",
          email: "user@example.com",
          contact: "9000090000",
        },
        notes: {
          username,
          message: paymentform.message || "Supporting your work!"
        },
        theme: { color: "#7c3aed" }, // Purple color
      };

      const rzp1 = new window.Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Payment could not be initiated");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading || !currentuser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-purple-500 mb-4"></div>
          <p className="text-gray-600 dark:text-gray-300">Loading {username}'s profile...</p>
        </div>
      </div>
    );
  }

  const totalRaised = payments.reduce((a, b) => a + b.amount, 0);

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
        theme="colored"
        transition={Bounce}
      />
      <Script 
        src="https://checkout.razorpay.com/v1/checkout.js" 
        strategy="lazyOnload"
        onError={() => toast.error("Failed to load payment processor")}
      />

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-purple-600 to-indigo-700 w-full h-72 md:h-96 overflow-hidden">
        {currentuser.coverpic ? (
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-30" 
            src={currentuser.coverpic} 
            alt="cover" 
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-purple-700 to-indigo-800"></div>
        )}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <div className="relative -mt-16">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white dark:bg-gray-800 p-1 shadow-2xl">
              {currentuser.profilepic ? (
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={currentuser.profilepic}
                  alt={username}
                />
              ) : (
                <div className="w-full h-full rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <FaUser className="text-4xl text-gray-500 dark:text-gray-400" />
                </div>
              )}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-6">@{username}</h1>
          <p className="text-purple-100 mt-2 max-w-md">{currentuser.bio || "Support my work with a chai!"}</p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 z-10 relative">
        <div className="grid grid-cols-3 gap-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
          <div className="flex flex-col items-center p-4 bg-purple-50 dark:bg-gray-700 rounded-lg">
            <FaCoffee className="text-purple-600 dark:text-purple-400 text-xl mb-2" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Total Supporters</span>
            <span className="text-xl font-bold text-gray-800 dark:text-white">{payments.length}</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-purple-50 dark:bg-gray-700 rounded-lg">
            <FaRupeeSign className="text-purple-600 dark:text-purple-400 text-xl mb-2" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Total Raised</span>
            <span className="text-xl font-bold text-gray-800 dark:text-white">₹{totalRaised.toLocaleString()}</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-purple-50 dark:bg-gray-700 rounded-lg">
            <FaHeart className="text-purple-600 dark:text-purple-400 text-xl mb-2" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Recent Support</span>
            <span className="text-xl font-bold text-gray-800 dark:text-white">
              {payments.length > 0 ? `₹${payments[0].amount}` : '—'}
            </span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Supporters List */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                <FaHeart className="text-purple-600 mr-2" /> Recent Supporters
              </h2>
            </div>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
              {payments.length === 0 ? (
                <div className="p-8 text-center">
                  <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-purple-100 dark:bg-gray-700 mb-4">
                    <FaCoffee className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">No supporters yet</h3>
                  <p className="text-gray-500 dark:text-gray-400">Be the first to support {username}!</p>
                </div>
              ) : (
                payments.slice(0, 5).map((p, i) => (
                  <div key={p._id || i} className="p-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="h-10 w-10 rounded-full bg-purple-100 dark:bg-gray-600 flex items-center justify-center">
                          {p.name ? (
                            <span className="text-purple-600 dark:text-purple-300 font-medium">
                              {p.name.charAt(0).toUpperCase()}
                            </span>
                          ) : (
                            <FaUser className="text-purple-600 dark:text-purple-300" />
                          )}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {p.name || 'Anonymous'} <span className="text-purple-600 dark:text-purple-400">donated ₹{p.amount}</span>
                        </p>
                        {p.message && (
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 italic">
                            <FaComment className="inline mr-1 text-gray-400" /> "{p.message}"
                          </p>
                        )}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {new Date(p.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {payments.length > 5 && (
              <div className="p-4 border-t border-gray-200 dark:border-gray-700 text-center">
                <button className="text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300 text-sm font-medium">
                  View all supporters
                </button>
              </div>
            )}
          </div>

          {/* Payment Form */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-2xl font-bold text-gray-800 dark:text-white flex items-center">
                <FaCoffee className="text-purple-600 mr-2" /> Buy {username} a Chai
              </h2>
            </div>
            <div className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Your Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaUser className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    onChange={handleChange}
                    name="name"
                    value={paymentform.name}
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:text-white"
                    placeholder="Anonymous"
                    minLength={3}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Encouraging Message</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaComment className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    onChange={handleChange}
                    name="message"
                    value={paymentform.message}
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:text-white"
                    placeholder="Keep up the great work!"
                    minLength={4}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Amount (₹)</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaRupeeSign className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    onChange={handleChange}
                    name="amount"
                    value={paymentform.amount}
                    type="number"
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 dark:text-white"
                    placeholder="50"
                    min="1"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => pay(Number(paymentform.amount) * 100)}
                  disabled={!paymentform.name || paymentform.name.length < 3 || !paymentform.message || paymentform.message.length < 4 || !paymentform.amount || Number(paymentform.amount) < 1}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all duration-300 ${
                    !paymentform.name || paymentform.name.length < 3 || !paymentform.message || paymentform.message.length < 4 || !paymentform.amount || Number(paymentform.amount) < 1
                      ? 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-purple-500/30'
                  }`}
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    `Support with ₹${paymentform.amount || '0'}`
                  )}
                </button>
              </div>

              <div className="pt-4">
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Quick Support</h3>
                <div className="grid grid-cols-3 gap-3">
                  {[10, 25, 50, 100, 200, 500].map((amount) => (
                    <button
                      key={amount}
                      onClick={() => {
                        setPaymentform(prev => ({ ...prev, amount: amount.toString() }));
                        pay(amount * 100);
                      }}
                      className="py-2 px-3 bg-purple-50 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-gray-600 rounded-lg font-medium text-purple-700 dark:text-purple-300 transition-colors text-sm"
                    >
                      ₹{amount}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;