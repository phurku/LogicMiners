import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className=" bg-primary text-white p-4 flex flex-col md:flex-row items-center justify-between fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="flex items-center mb-2 md:mb-0 container">
        <Image src="/Images/logo.png" alt="Logo" width={40} height={40} className="mr-2 rounded animate-fade-in" />
        <h1 className="text-2xl font-bold">Logic Miners</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="#home" className="hover:underline hover:text-white transition-colors font-bold">Home</Link></li>
          <li><Link href="#about" className="hover:underline hover:text-white transition-colors font-bold">About</Link></li>
          <li><Link href="#projects" className="hover:underline hover:text-white transition-colors font-bold">Projects</Link></li>
          <li><Link href="#services" className="hover:underline hover:text-white transition-colors font-bold">Services</Link></li>
          <li><Link href="#contact" className="hover:underline hover:text-white transition-colors font-bold">Contact</Link></li>

        </ul>
      </nav>
    </header>
  );
}
