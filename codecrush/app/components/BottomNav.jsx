import React from 'react'
import Link from 'next/link'
import Image from "next/image";
import Dashboard from "@/public/images/dashboard.png";
import Profile from "@/public/images/dash_user.png";
import Leader from "@/public/images/dash_leader.png";


export const BottomNav = () => {
  return (
<div className="btm-nav bg-blue-100 border-slate-300 dark:bg-slate-300 rounded-t-lg">
<Link href="/dashboard">
  <button className='nav-btn'>
  <Image src={Dashboard} alt="Dashboard" width={19} height={19} />
  </button>
  </Link>
  <Link href="/profile">
  <button className='nav-btn'>
  <Image src={Profile} alt="Profile" width={20} height={20} />
  </button>
  </Link>
  <Link href="/leaderboard">
  <button className='nav-btn'>
  <Image src={Leader} alt="Leaderboard" width={19} height={19} />
  </button>
  </Link>
</div>
  )
}
