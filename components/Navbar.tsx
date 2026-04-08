"use client";

import ProboxLogo from "./ProboxLogo";

export default function Navbar() {
  return (
    <header className="w-full bg-white sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <ProboxLogo variant="dark" size="md" />
          </a>

          {/* Nav Links - centered */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#why-probox"
              className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Nima uchun Probox?
            </a>
            <a
              href="#bonus"
              className="text-[15px] font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Maxsus sovg&apos;a
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Language selector */}
            <button className="hidden sm:flex items-center gap-1.5 px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors text-[15px] font-medium text-gray-600">
              <span className="text-lg leading-none">🇺🇿</span>
              <span>O&apos;zb</span>
            </button>

            {/* CTA Button */}
            <a
              href="#apply"
              className="px-5 py-2.5 rounded-lg border-2 border-[#1a8fc4] text-[#1a8fc4] text-[14px] font-semibold hover:bg-[#1a8fc4] hover:text-white transition-all duration-200"
            >
              Ariza qoldirish
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
