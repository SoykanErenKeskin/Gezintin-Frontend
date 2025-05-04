"use client";
import CTA from "./CTA";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import Link from "next/link";
import logoL from "../assets/logo/gezinti-logo2-light.png";
import logoD from "../assets/logo/gezinti-logo2-dark.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "light"
      : "light"
  );
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="relative">
      {/* Light Mode Background */}
      {theme === "light" && (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#39c5a9_100%)]" />
      )}
      {/* Dark Mode Background */}
      {theme === "dark" && (
        <div className="fixed top-0 left-0 w-full h-full -z-10 bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>
      )}

      <nav className="fixed top-0 left-0 w-full bg-background/30 backdrop-blur-2xl z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18">
            {/* Logo */}
            <Link
              href="/"
              className="max-w-35 md:max-w-50 text-text-secondary hidden dark:inline"
            >
              <img src={logoL.src} alt="Logo" />
            </Link>
            <Link
              href="/"
              className="max-w-35 md:max-w-50 text-text-secondary inline dark:hidden"
            >
              <img src={logoD.src} alt="Logo" />
            </Link>

            {/* Masaüstü Menü */}
            <div className="hidden md:flex space-x-8 items-center">
              <Link
                href="/"
                className="text-text-secondary/70 hover:text-text-secondary p-2"
              >
                Ana Sayfa
              </Link>
              <Link
                href="/sss"
                className="text-text-secondary/70 hover:text-text-secondary p-2"
              >
                S.S.S
              </Link>

              <Link
                href="/login"
                className="text-text-secondary/70 hover:text-text-secondary p-2"
              >
                Giriş Yap
              </Link>

              {/* Tema Değiştirici */}
              <button
                onClick={toggleTheme}
                className="flex justify-center items-center w-10 h-10 p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition cursor-pointer"
              >
                {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
              </button>
            </div>

            {/* Mobil Menü Butonu */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="gray"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="gray"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobil Menü */}
        {isOpen && (
          <div className="bg-background/50 md:hidden backdrop-blur-sm border-t border-b border-gray-300 dark:border-gray-700 flex flex-col items-center py-6 space-y-6">
            <Link
              href="/"
              className="text-text-secondary/70 hover:text-text-secondary"
            >
              Ana Sayfa
            </Link>
            <CTA />
            <Link
              href="/sss"
              className="text-text-secondary/70 hover:text-text-secondary"
            >
              S.S.S
            </Link>
            <Link
              href="/login"
              className="text-text-secondary/70 hover:text-text-secondary"
            >
              Giriş Yap / Kayıt Ol
            </Link>
            {/* Tema Değiştirici */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 transition cursor-pointer"
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
