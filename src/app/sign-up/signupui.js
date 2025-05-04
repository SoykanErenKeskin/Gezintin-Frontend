"use client";
import googleIco from "@/app/assets/google-ico.png";
import appLogo from "@/app/assets/logo/gezinti-logo-ico-bg.png";
import Link from "next/link";

import { useState } from "react";
import { useRouter } from "next/navigation";

const Signupui = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, surname, email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      router.push("/login"); // Başarılı olursa giriş sayfasına yönlendir
    } else {
      setError(data.message || "Bir hata oluştu");
    }
  };

  return (
    <div className="flex justify-center items-center mt-10 lg:36">
      <div className="hidden flex-col items-start justify-center space-y-24 lg:flex mb-10 w-full lg:w-1/3">
        <img
          src={appLogo.src}
          alt="Logo"
          className="max-w-50 rounded-3xl drop-shadow-2xl"
        />
        <h3 className="w-70 text-4xl">
          {" "}
          Özgürce Keşfet,
          <span className="font-bold dark:text-secondary">
            {" "}
            Gezintinin
          </span>{" "}
          Tadını Çıkar!
        </h3>
      </div>
      <div className="mt-10 p-6 sm:p-12 py-12 bg-text/60 border border-text-secondary/20 rounded-2xl shadow-xl lg:w-1/2">
        <h1 className="text-3xl font-bold mb-12 tracking-tight">
          Hesap Oluştur
        </h1>
        <form className="space-y-8" onSubmit={handleSignup}>
          <div className="flex flex-col sm:flex-row space-x-6 space-y-8 sm:space-y-0 md:space-x-12">
            <input
              type="text"
              name="name"
              placeholder="Ad"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 bg-text/80 border border-text-secondary/20 rounded drop-shadow-lg focus:border-secondary focus:border-3"
              required
            />
            <input
              type="text"
              name="surname"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              placeholder="Soyad"
              className="w-full p-3 bg-text/80 border border-text-secondary/20 rounded drop-shadow-lg focus:border-secondary focus:border-3"
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-text/80 border border-text-secondary/20 rounded drop-shadow-lg focus:border-secondary focus:border-3"
            required
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Şifre"
            className="w-full p-3 bg-text/80 border border-text-secondary/20 rounded drop-shadow-lg focus:border-secondary focus:border-3"
            required
          />
          <button
            type="submit"
            className="w-full bg-secondary text-text text-xl tracking-wide font-semibold p-3 rounded-md drop-shadow-xl hover:bg-secondary/90 hover:cursor-pointer"
          >
            Oluştur
          </button>
          {error && <p className="text-red-500 justify-self-end">{error}</p>}
        </form>
        <div className="flex flex-col sm:flex-row mt-6 space-x-2">
          <p className="text-text-secondary/70">Zaten hesabınız var mı?</p>
          <Link href="/login">
            <p className="text-secondary underline hover:text-secondary/80 hover:cursor-pointer">
              Giriş Yap
            </p>
          </Link>
        </div>

        <div className="flex justify-center h-10 mt-5 space-x-1 md:space-x-4 items-start">
          <div className="w-2/7 xl:w-3/7 p-2 border-b border-text-secondary"></div>
          <div>
            <p>ya da</p>
          </div>
          <div className="w-2/7 xl:w-3/7 p-2 border-b border-text-secondary"></div>
        </div>
        <div className="flex justify-center items-center">
          <button className="mt-4 w-full border bg-white font-semibold tracking-wide text-gray-700 text-sm md:text-base p-4 rounded-full flex items-center justify-between drop-shadow-md hover:bg-gray-100 hover:cursor-pointer">
            <img src={googleIco.src} alt="Google" className="w-5 h-5" />
            Google ile Devam Edin
            <div className="w-5 h-5 opacity-0" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signupui;
