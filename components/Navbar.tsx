"use client";

import ProboxLogo from "./ProboxLogo";

export default function Navbar() {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <ProboxLogo variant="dark" size="md" />
          </a>

          {/* Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#why-probox"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Nima uchun Probox?
            </a>
            <a
              href="#bonus"
              className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
            >
              Maxsus sovg&apos;a
            </a>
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-3">
            {/* Language selector */}
            <button className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium text-gray-700">
              <span className="text-base leading-none">🇺🇿</span>
              <span>O&apos;zb</span>
              <svg
                className="w-3.5 h-3.5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {/* CTA Button */}
            <a
              href="#apply"
              className="px-4 py-2 rounded-lg border-2 border-blue-600 text-blue-600 text-sm font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200"
            >
              Ariza qoldirish
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
