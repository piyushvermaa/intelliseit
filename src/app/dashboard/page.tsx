"use client"

import { useState } from "react";

import { useRouter } from 'next/navigation';

export default function Home() {
    
  const router = useRouter();
    const [loggedIn,setLoggedIn] = useState(false);
    if(localStorage.getItem('login')) setLoggedIn(true);
    else router.push('/login')
  return (
    <>
     {loggedIn && <p>Hello this is dashboard</p>}
    </>
  );
}
