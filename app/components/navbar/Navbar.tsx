'use client'

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavLink from "./navbarLink/navbarLink";


interface NavLinkItem {
  id: number;
  name: string;
  href: string;
}


export const NAV_LINKS: NavLinkItem[] = [
  { id: 1, name: "Home", href: "/views/home" },
  { id: 2, name: "About", href: "/views/about" },
  { id: 3, name: "Shop", href: "/views/shop" },
  { id: 4, name: "Contact", href: "/views/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        <div className="relative w-32 h-12 flex items-center">
          <Image
            src="/logo.webp"
            alt="Ecommerce-lite logo"
            width={120}
            height={50}
            className="object-contain scale-150 w-auto h-auto"
            loading="eager"
          />
        </div>


        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.id} href={link.href} variant="desktop">
              {link.name}
            </NavLink>
          ))}
        </ul>

        {/* ICONOS + BOTONES + Botón menú móvil (sin cambios) */}
        <div className="flex items-center gap-4">
          {/* ... Botones Login/Register ... */}
          <Link href='/views/login' className="hidden md:block rounded-full font-semibold py-2 text-white px-5 bg-blue-600 hover:bg-blue-700 hover:shadow-md transition-all duration-200">
            login
          </Link>
          <Link href='' className="hidden md:block border border-blue-600 text-blue-600 px-5 py-2 rounded-full font-semibold hover:bg-blue-600 hover:text-white hover:shadow-md transition-all duration-200">
            register
          </Link>

          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label="open menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

    {open && (
      <div className={`md:hidden bg-white border-t border-gray-100 transition-all duration-300 overflow-hidden ${open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'}`}>
        <ul className="flex flex-col items-center gap-4 py-4 text-gray-700 font-medium w-full">
          
          {NAV_LINKS.map((link) => (
            <NavLink key={link.id} href={link.href} variant="mobile" onClick={toggleMenu}>
              {link.name}
            </NavLink>
          ))}
        </ul>
        <div className="flex justify-center gap-4 pb-4 px-4 w-full">
    
    {/* Botón Login */}
    <Link
        href='/views/login'
        className="w-full text-center rounded-full font-semibold py-2 text-white bg-blue-600 
                   hover:bg-blue-700 active:bg-blue-700 transition-all duration-200" // Añadir active:bg-blue-700
        onClick={toggleMenu}
    >
        login
    </Link>
    
    {/* Botón Register */}
    <Link
        href=''
        className="w-full text-center border border-blue-600 text-blue-600 py-2 rounded-full font-semibold 
                   hover:bg-blue-600 hover:text-white 
                   active:bg-blue-600 active:text-white transition-all duration-200" // Añadir active:bg-blue-600 y active:text-white
        onClick={toggleMenu}
    >
        register
    </Link>
    
</div>
      </div>
    )}
  </nav>
  );
}