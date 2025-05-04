import Link from "next/link";
import logo from "../assets/logo/gezinti-logo2-light.png";

const Footer = () => {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="py-6 border-b-2 border-white">
          <Link href="/" className="ml-6">
            <img
              src={logo.src}
              alt="logo"
              className="max-w-35 md:max-w-50 text-text-secondary"
            />
          </Link>
        </div>
        <div className="ml-4 flex py-6 text-white/70 text-sm underline space-x-10 border-b-2 border-white">
          <ul className="space-y-4">
            <li>
              <Link href="/" className="hover:text-white/90">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link href="/sss" className="hover:text-white/90">
                S.S.S
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white/90">
                Gezinti Oluştur
              </Link>
            </li>
          </ul>
          <ul className="space-y-4">
            <li>
              <Link href="#" className="hover:text-white/90">
                Destek
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:text-white/90">
                İletişim
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex justify-center ml-4 py-6 text-white text-sm">
          <p>Copyright © 2025 All rights reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
