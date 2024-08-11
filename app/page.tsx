import { navItems } from "@/data";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { link } from "fs";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi2";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 p-5">
      <div className="max-w-7xl w-full">
        <FloatingNav  navItems={navItems}/>
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
