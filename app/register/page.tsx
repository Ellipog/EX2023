"use client";

import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const router = useRouter();

  function register() {
    const isValidEmail = validateEmail(email);
    if (email === "" || password === "" || password2 === "") {
      toast.error("Please fill in all fields");
      return;
    } else if (password !== password2) {
      toast.error("Passwords do not match!");
      return;
    } else if (isValidEmail) {
      axios
        .post("/api/register", { email: email, password: password })
        .then((res) => {
          toast.success("User Created!");
          router.push("/login");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Invalid mail adress!");
      return;
    }
  }

  function validateEmail(email: string) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return (
    <main className="w-screen h-screen bg-[#c6cdd4] flex flex-row">
      <div className="w-full h-full flex justify-center items-center ">
        <div className="flex justify-center items-center flex-col w-96 h-[30rem] bg-[#EEE3CB] gap-4 shadow-lg p-52">
          <h1 className="text-3xl font-bold text-[#967E76]">Register</h1>
          <div className="flex flex-col gap-4 p-5">
            <input className="p-2 text-left w-72 bg-[#fff3d8] text-[#967E76] shadow" type="email" value={email} placeholder="E-Mail..." onChange={(e) => setEmail(e.target.value)} />
            <input className="p-2 text-left w-72 bg-[#fff3d8] text-[#967E76] shadow" type="password" value={password} placeholder="Password..." onChange={(e) => setPassword(e.target.value)} />
            <input className="p-2 text-left w-72 bg-[#fff3d8] text-[#967E76] shadow" type="password" value={password2} placeholder="Password..." onChange={(e) => setPassword2(e.target.value)} />
          </div>
          <button className="p-2 text-center bg-[#fff3d8] text-[#967E76] w-72 shadow hover:bg-[#f5e9ce] hover:rotate-[0.5deg] transition-all" onClick={() => register()}>
            Registrer
          </button>
          <Link href="/login">
            <button className="p-2 text-center bg-[#fff3d8] text-[#967E76] w-72 shadow hover:bg-[#f5e9ce] hover:rotate-[-0.5deg] transition-all">Create an account</button>
          </Link>
        </div>
      </div>
      <div className="w-1/12 h-10 bg-[#D7C0AE] fixed right-[47rem] top-[18rem] rotate-[38deg] shadow"></div>
      <div className="w-1/12 h-10 bg-[#D7C0AE] fixed right-[69rem] top-[19rem] rotate-[-48deg] shadow"></div>
    </main>
  );
}
