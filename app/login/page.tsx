"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  return (
    <main className="w-screen h-screen bg-[#c6cdd4] flex flex-row">
      <div className="w-full h-full flex justify-center items-center ">
        <div className="flex justify-center items-center flex-col w-96 h-96 bg-[#EEE3CB] gap-4 shadow-lg p-52">
          <h1 className="text-3xl font-bold text-[#967E76]">Login</h1>
          <div className="flex flex-col gap-4 p-5">
            <input className="p-2 text-left w-72 bg-[#fff3d8] text-[#967E76] shadow" type="email" value={email} placeholder="E-Mail..." onChange={(e) => setEmail(e.target.value)} />
            <input className="p-2 text-left w-72 bg-[#fff3d8] text-[#967E76] shadow" type="password" value={password} placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
          </div>
          <button
            className="p-2 text-center bg-[#fff3d8] text-[#967E76] w-72 shadow hover:bg-[#f5e9ce] hover:rotate-[-0.5deg] transition-all"
            onClick={() => {
              signIn("credentials", { email: email, password: password, redirect: false }).then((res) => {
                if (!email || !password) {
                  toast.error("Please fill in all fields");
                } else if (res.error) {
                  toast.error("Wrong email or password");
                } else {
                  toast.success("Signed in!");
                  router.push("/");
                }
              });
            }}
          >
            Sign in
          </button>
          <Link href="/register">
            <button className="p-2 text-center bg-[#fff3d8] text-[#967E76] w-72 shadow hover:bg-[#f5e9ce] hover:rotate-[0.5deg] transition-all">Create an account</button>
          </Link>
        </div>
      </div>
      <div className="w-1/12 h-10 bg-[#D7C0AE] fixed right-[47rem] top-[20rem] rotate-[38deg] shadow"></div>
      <div className="w-1/12 h-10 bg-[#D7C0AE] fixed right-[69rem] top-[21rem] rotate-[-48deg] shadow"></div>
    </main>
  );
}
