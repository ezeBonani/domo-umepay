"use client"
import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "scroll";
    }
  }, [isOpen])
  

  return (
    <nav className="flexBetween gap-24 padding-container z-30 py-1 sticky top-0 bg-white w-full font-serif">

      <Link href="/" className="">
        <Image src="/logo-domo.png" alt="logo" width={200} height={50} quality={100}  className="w-3/4 md:full p-2"/>
      </Link>

      <ul className="hidden h-full lg:flex justify-between flex-1">
        {NAV_LINKS.map((link)=> (<Link href={link.href} key={link.key} className="regular-16 text-grey-50 flexCenter cursor-pointer pd-1.5"><span className="transition-all hover:scale-105">{link.label}</span></Link>))}
      </ul>

      {/* Responsibe Menu */}
      <Image src="/menu.png" alt="menu" width={32} height={32} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="inline-block cursor-pointer lg:hidden z-50 bg-white rounded-lg" onClick={handleMenu} />
      
      <ul className={`absolute top-0 items-center justify-evenly z-40 duration-500 transition-all bg-slate-700 opacity-90 text-white h-[100vh] ${isOpen ? "w-[100vw] right-0 py-8 lg:w-0 lg:right-[-50px] flex flex-col " : "w-0 right-[-50px]"}`}>
        {NAV_LINKS.map((link)=> (<Link href={link.href} key={link.key} className={`regular-16 text-grey-50  cursor-pointer pd-1.5 transition-all duration-500 hover:font-bold ${isOpen ? "flexCenter" : "hidden"}`} onClick={()=>setIsOpen(false)} >{link.label} </Link>))}
      </ul>
      
    </nav>
  )
}

export default Navbar
