'use client'
import { useUser } from '@auth0/nextjs-auth0/client';
import { FaUserCircle } from "react-icons/fa";
import Link from 'next/link';

export default function Profile() {
  const { user } = useUser();


  if(!user)
  return(
      <Link href="/api/auth/login" className="flex gap-1 items-center cursor-pointer hover:bg-stone-200 rounded transition duration-400 p-1">
          <FaUserCircle className="text-gray-300 text-xl"/>
          <h3>Account</h3>
      </Link>
  )
  return(
      <div className="flex items-center gap-2">
          <Link href="/account" className="flex items-center gap-2">
              <img className="w-[2rem] rounded-full border-2 border-stone-200" src={user.picture} alt={user.name} />
              <h3>{user.name.split(" ")[0]}</h3>
          </Link>
          <Link className="hover:bg-stone-200 rounded transition duration-400 p-2" href="api/auth/logout">Log out</Link>
      </div>
  )

}