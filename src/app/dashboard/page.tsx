"use client"

import { useState,useEffect } from "react";

import { useRouter } from 'next/navigation';

const Home:any = () => {
    
  const router = useRouter();
    const [loggedIn,setLoggedIn] = useState(false);
    useEffect(() => {
        
        if (localStorage.getItem('login')) {
          setLoggedIn(true);
        } else {
          router.push('/login');
        }
      }, [router]);
      
  return (
    <>
     {loggedIn && <p>Hello this is dashboard</p>}
    </>
  );
}

export default Home;
