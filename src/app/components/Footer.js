import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-8 mt-12 shadow-2xl border-t-4 border-transparent hover:border-white transition-all duration-500">
      <div className="container mx-auto flex flex-col md:flex-row items-start md:items-center justify-between px-4">
        {/* Logo on the left corner */}
        <div className="flex flex-col items-start md:items-start flex-shrink-0 mb-6 md:mb-0 md:w-1/4">
          <a href="#home" aria-label="Home">
            <Image src="/Images/logo.jpg" alt="Logo" width={70} height={70} className="rounded animate-fade-in mb-2" />
          </a>
          <span className="text-lg font-semibold mt-2">Logic Miners</span>
          <span className="text-xs text-white/80 mt-1">Empowering Smart Mining Solutions</span>
        </div>

        {/* Center Section: Contact & Social */}
        <div className="flex flex-col items-center md:items-start md:w-2/4">
          <div className="mb-4 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <span className="inline-block align-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.94 4.94A2.5 2.5 0 0 1 5.5 4h9a2.5 2.5 0 0 1 2.56.94l-7.06 5.65-7.06-5.65zM2 6.32V15.5A2.5 2.5 0 0 0 4.5 18h11a2.5 2.5 0 0 0 2.5-2.5V6.32l-7.06 5.65a1 1 0 0 1-1.28 0L2 6.32z" />
                </svg>
              </span>
              <a href="mailto:sandeshbelbase11@gmail.com" className="underline">sandeshbelbase11@gmail.com</a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <span className="inline-block align-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.053 15.053 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1v3.61a1 1 0 0 1-1 1C10.07 22 2 13.93 2 4a1 1 0 0 1 1-1h3.61a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
                </svg>
              </span>
              <a href="tel:+61430081037" className="underline">+61 430081037</a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <span className="inline-block align-middle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 0 0-6 6c0 4.418 6 10 6 10s6-5.582 6-10a6 6 0 0 0-6-6zm0 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </span>
              <a href="https://www.google.com/maps?q=Unit+4,+88+Beamish+St+Campsie,+NSW+2194,+Australia&z=19" target="_blank" rel="noopener noreferrer" >Unit 4, 88 Beamish St Campsie, NSW 2194, Australia</a>
            </p>
          </div>
          <div className="flex justify-center md:justify-start gap-4 mt-2">
            <a href="https://www.facebook.com/profile.php?id=61584286401697" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-blue-900">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.733 0-1.325.592-1.325 1.326v21.348c0 .733.592 1.326 1.325 1.326h11.495v-9.294h-3.128v-3.622h3.128v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12v9.294h6.116c.733 0 1.325-.593 1.325-1.326v-21.349c0-.733-.592-1.326-1.325-1.326z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/logic-miners/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-900">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.026-3.063-1.868-3.063-1.868 0-2.156 1.459-2.156 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.563 2.838-1.563 3.036 0 3.6 2 3.6 4.59v5.606z" /></svg>
            </a>
          </div>
        </div>

        {/* Right Section: Quick Links & Copyright */}
        <div className="flex flex-col items-end md:w-1/4 text-right">
          <div className="mb-4">
            <span className="font-semibold text-base">Quick Links</span>
            <ul className="mt-2 space-y-1">
              <li><Link href="#home" className="hover:underline">Home</Link></li>
              <li><Link href="#about" className="hover:underline">About</Link></li>
              <li><Link href="#projects" className="hover:underline">Projects</Link></li>
              <li><Link href="#services" className="hover:underline">Services</Link></li>
              <li><Link href="#contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div className="text-sm text-white text-right">
            &copy; {new Date().getFullYear()} Logic Miners. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
