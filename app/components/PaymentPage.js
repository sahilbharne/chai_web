"use client";
import React, { useState, useEffect } from 'react';
import Script from 'next/script';
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions';
import { useSearchParams } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
import { useRouter } from 'next/navigation';

const PaymentPage = ({ username }) => {
  const [paymentform, setPaymentform] = useState({name: "", message: "", amount: ""});
  const [currentuser, setCurrentuser] = useState(null);
  const [payments, setPayments] = useState([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    getData();
  }, [username]);

  useEffect(() => {
    if (searchParams.get("payment") === "true") {
      toast('Thanks for your donation', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    router.push(`/${username}`);
  }, [searchParams, username, router]);

  const getData = async () => {
    try {
      const u = await fetchuser(username);
      setCurrentuser(u);
      const dbpayments = await fetchpayments(username);
      setPayments(dbpayments);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  const handleChange = (e) => {
    setPaymentform({ ...paymentform, [e.target.name]: e.target.value });
  };

  const pay = async (amount) => {
    try {
      const a = await initiate(amount, username, paymentform);
      const orderId = a.id;

      const options = {
        key: currentuser.razorpayId,
        amount,
        currency: "INR",
        name: "Get Me A Chai",
        description: "Test Transaction",
        image: "https://example.com/your_logo",
        order_id: orderId,
        callback_url: `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
        prefill: {
          name: paymentform.name || "Anonymous",
          email: "gaurav.kumar@example.com",
          contact: "9000090000",
        },
        notes: { address: "Razorpay Corporate Office" },
        theme: { color: "#3399cc" },
      };

      const rzp1 = new Razorpay(options);
      rzp1.open();
    } catch (error) {
      console.error("Payment failed:", error);
      toast.error("Payment could not be initiated");
    }
  };

  if (!currentuser) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <>
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} theme="light" />
      <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 w-full h-64 md:h-96 overflow-hidden">
        {currentuser.coverpic && (
          <img 
            className="absolute inset-0 w-full h-full object-cover opacity-70" 
            src={currentuser.coverpic} 
            alt="cover" 
          />
        )}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          {currentuser.profilepic && (
            <img
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl"
              src={currentuser.profilepic}
              alt="avatar"
            />
          )}
        </div>
      </div>

      {/* Profile Info */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-2">@{username}</h1>
        <p className="text-gray-600 dark:text-gray-300 mb-4">Let's help {username} to get a chai</p>
        <div className="text-gray-500 dark:text-gray-400">
          {payments.length} Payments · {currentuser.name} has raised ₹
          {payments.reduce((a, b) => a + b.amount, 0).toLocaleString()}
        </div>

        {/* Payment Section */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Supporters List */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6">Top Supporters</h2>
              <div className="space-y-4">
                {payments.length === 0 ? (
                  <p className="text-gray-500 dark:text-gray-400">No payments yet. Be the first supporter!</p>
                ) : (
                  payments.map((p, i) => (
                    <div key={p._id || i} className="flex items-center space-x-4 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition">
                      <div className="flex-shrink-0">
                        <img 
                          width={40} 
                          height={40} 
                          className="rounded-full" 
                          src="avatar.gif" 
                          alt="user avatar" 
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                          {p.name} donated <span className="font-bold">₹{p.amount}</span>
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                          "{p.message}"
                        </p>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-white mb-6">Support {username}</h2>
              <div className="space-y-4">
                <div>
                  <input
                    onChange={handleChange}
                    name="name"
                    value={paymentform.name || ''}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <input
                    onChange={handleChange}
                    name="message"
                    value={paymentform.message || ''}
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Encouraging Message"
                  />
                </div>
                <div>
                  <input
                    onChange={handleChange}
                    name="amount"
                    value={paymentform.amount || ''}
                    type="number"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white"
                    placeholder="Amount in ₹"
                  />
                </div>
                <button
                  type="button"
                  disabled={paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1}
                  onClick={() => pay(Number(paymentform.amount) * 100)}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                    paymentform.name?.length < 3 || paymentform.message?.length < 4 || paymentform.amount?.length < 1
                      ? 'bg-gray-300 dark:bg-gray-600 text-gray-500 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-md'
                  }`}
                >
                  Pay Now
                </button>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                {[10, 20, 30].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => pay(amount * 100)}
                    className="py-2 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg font-medium text-gray-800 dark:text-white transition-colors"
                  >
                    ₹{amount}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;