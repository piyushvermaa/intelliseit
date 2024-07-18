"use client"
import React, { useState,useEffect } from 'react';
import Image from 'next/image'; 
import { auth,provider } from '../../components/firebaseConfig';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, signOut ,signInWithPopup} from "firebase/auth";

import { useRouter } from 'next/navigation';



const Logincard: any = ({  }) => {

  const router = useRouter();
  
  const [loggedIn,setLoggedIn] = useState(false);
  useEffect(() => {
        
    if (localStorage.getItem('login')) {
      setLoggedIn(true);
      
      router.push('/dashboard');
    } else {
      
    }
  }, [router]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

 const  handleLogin = async () => {
    console.log('Logging in with:', email, password);
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log("Badhiya bhaiii")
      localStorage.setItem('login','true')
      router.push('/dashboard');
      return { success: true, user: userCredential.user };
    } catch (error:any) {
      setEmail('');
      setPassword('');
      setError('Wrong email or pass');
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Logged in with Google:', user);
      localStorage.setItem('login', 'true');
      router.push('/dashboard');
    } catch (error) {
      console.error('Error during Google sign-in:', error);
      setError('Failed to log in with Google.');
    }
  };
  
  const handleRegister = () => {
    // Here you can implement your register logic
    console.log('Registering');
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }
    handleLogin();
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex bg-black flex-wrap gap-10 items-center justify-center h-screen">
      <div className="max-w-lg my-10 p-6 backdrop-blur-lg rounded-3xl
          bg-gradient-to-br from-[#33333389] via-[#204a6897] to-transparent
          shadow-lg">
        <div className="flex ">
          <form onSubmit={handleSubmit} className="p-3">
            
              <h1 className="text-[#fafafa] text-4xl mb-5" style={{ fontFamily: 'cursive', fontStyle: 'italic' }}>Login</h1>
           
            <div className="flex flex-col space-y-5" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
              <label htmlFor="email" className="text-white">
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="w-full py-3 text-black border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label htmlFor="password" className="text-white relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  className="w-full py-3 border text-black border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow pr-10"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span className="absolute right-3 top-3 cursor-pointer" onClick={togglePasswordVisibility}>
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5v.01M15 5v.01" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 15v.01M15 15v.01" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5v.01M15 5v.01" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 15v.01M15 15v.01" />
                    </svg>
                  )}
                </span>
              </label>
              {error && <p className="text-red-500">{error}</p>}
              <div className="flex flex-row gap-4 justify-between">
                <div className="text-slate-700">
                  <label htmlFor="remember" className='text-white'>
                    <input
                      type="checkbox"
                      id="remember"
                      className="w-4 h-4 pr-1 border-slate-200 focus:bg-[indigo-600]"
                    />
                    Remember me
                  </label>
                </div>
                <div>
                  <a href="#" className="font-medium text-white">
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button type="submit" className="flex-shrink-0 py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center">
                
                <span>Login</span>  
              </button>
              <p className="text-center text-white">------------- or -------------</p>
              <button type='button' className="w-full group text-center py-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150 mb-5" onClick={handleGoogleLogin}>
                <Image src="https://www.svgrepo.com/show/355037/google.svg" alt="Google Logo" width={24} height={24} className="w-6 h-6" /> <span className='text-white group-hover:text-green-400'>Login with Google</span>
              </button>
              <p className="text-center text-white">
                Not registered yet?{' '}
                <a href="#" className="text-indigo-600 font-medium inline-flex space-x-1 items-center" onClick={()=>router.push('/signup')}>
                  <span className='text-indigo-600' >Register now </span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" onClick={()=>router.push('/signup')}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="hidden md:block">
        {/* Use next/image for Loginpage as well */}
        <Image src="/Loginpage.png" alt="Login Page Image" width={500} height={500} className='' />
      </div>
    </div>
  );
};

export default Logincard;
