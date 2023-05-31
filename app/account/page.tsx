"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { toast } from "react-hot-toast";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const { data: session, status } = useSession();
  const router = useRouter();

  return status === "unauthenticated" ? (
    <main className="flex w-screen h-screen flex-col items-center justify-center bg-[#c6cdd4]">
      <Navbar />
      <h1 className="text-[#967E76] font-bold text-4xl mt-8 bg-[#fff3d8] p-3 rotate-[1deg] shadow">ACCOUNT</h1>
      <div className="h-full w-full flex justify-center items-top">
        <div className="h-3/6 w-4/12 flex justify-center items-center flex-col gap-6">
          <Link href="/login">
            <button className="p-2 text-center bg-[#fff3d8] text-xl text-[#967E76] w-72 shadow hover:bg-[#f5e9ce] transition-all h-14">Sign in</button>
          </Link>
        </div>
      </div>
    </main>
  ) : (
    <main className="flex w-screen h-screen flex-col items-center justify-center bg-[#c6cdd4]">
      <Navbar />
      <h1 className="text-[#967E76] font-bold text-4xl mt-8 bg-[#fff3d8] p-3 rotate-[1deg] shadow">ACCOUNT</h1>
      <div className="h-full w-full flex justify-center items-center">
        <div className="h-5/6 w-4/12 bg-[#EEE3CB] flex justify-center items-center flex-col gap-6 shadow-lg">
          <FontAwesomeIcon icon={faUser} className="w-48 h-48 bg-[#D7C0AE] text-[#967E76] p-12 hover: cursor-pointer shadow-md" />
          <p className="text-[#967E76] mb-20 text-xl">{session?.user.email}</p>
          <button
            className="p-2 text-center bg-[#fff3d8] text-xl text-[#967E76] w-72 shadow hover:bg-[#f5e9ce] transition-all h-14"
            onClick={() => {
              toast.success("Signed out!");
              signOut();
            }}
          >
            Sign out
          </button>
        </div>
      </div>
      <div className="w-1/12 h-10 bg-[#D7C0AE] fixed right-[38.5rem] top-[15rem] rotate-[38deg] shadow"></div>
      <div className="w-1/12 h-10 bg-[#D7C0AE] fixed right-[77.5rem] top-[15rem] rotate-[-48deg] shadow"></div>
    </main>
  );
}
