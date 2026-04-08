import Image from "next/image";
import ProboxLogo from "./ProboxLogo";

export default function HeroSection() {
  return (
    <section
      id="apply"
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #edf2f8 0%, #e4ecf4 30%, #dce6f0 60%, #d8e2ee 100%)",
      }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[420px] py-12 lg:py-6 gap-8">
          {/* Left content */}
          <div className="flex-1 max-w-[480px] z-10 text-center lg:text-left">
            <h1 className="text-[32px] sm:text-[40px] font-extrabold text-gray-900 leading-[1.2] mb-8">
              Atiga{" "}
              <span className="text-[#f97316]">1 000 000 so&apos;m</span>
              <br />
              boshlang&apos;ich to&apos;lov bilan Iphone
              <br />
              17 ga ega bo&apos;ling
            </h1>
            <a
              href="#apply"
              className="inline-block px-8 py-3.5 bg-[#1a8fc4] text-white font-semibold rounded-xl hover:bg-[#1580b0] active:scale-[0.98] transition-all duration-200 text-[15px]"
            >
              Ariza qoldirish
            </a>
          </div>

          {/* Right content – iPhone with green sphere and floating badges */}
          <div className="flex-1 relative flex justify-center lg:justify-end items-center w-full max-w-[520px] h-[360px] sm:h-[400px]">
            {/* Green sphere background */}
            <div
              className="absolute right-0 lg:right-4 w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at 40% 40%, #86efac 0%, #4ade80 30%, #22c55e 60%, #16a34a 100%)",
              }}
            />

            {/* Subtle green glow */}
            <div
              className="absolute right-[-30px] top-[-20px] w-[200px] h-[200px] rounded-full opacity-40 pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, #bbf7d0 0%, transparent 70%)",
              }}
            />

            {/* iPhone image */}
            <div className="relative z-10 flex items-end justify-center h-full">
              <Image
                src="/images/iphone-placeholder.svg"
                alt="iPhone 17"
                width={240}
                height={320}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* 24 soat ichida badge */}
            <div className="absolute top-6 left-0 sm:left-2 lg:left-[-20px] z-20 bg-[#1a8fc4] text-white rounded-2xl px-4 py-3.5 shadow-lg max-w-[170px]">
              <p className="font-bold text-[13px] leading-tight">
                24 soat ichida
              </p>
              <p className="text-[11px] text-blue-100 mt-1.5 leading-snug">
                Ariza ko&apos;rib chiqiladi va operator bog&apos;lanadi
              </p>
            </div>

            {/* Probox logo badge on green sphere */}
            <div className="absolute bottom-[100px] right-[40px] sm:right-[60px] lg:right-[50px] z-20 bg-[#1e293b] rounded-xl px-3 py-2.5 shadow-lg flex items-center gap-2">
              <ProboxLogo variant="light" size="sm" />
            </div>

            {/* Rasmiy hujjatlar badge */}
            <div className="absolute bottom-4 right-[-10px] sm:right-0 lg:right-[-20px] z-20 bg-white rounded-2xl px-4 py-3.5 shadow-xl max-w-[180px]">
              <p className="font-bold text-[13px] text-gray-900 leading-tight">
                Rasmiy hujjatlar
              </p>
              <p className="text-[11px] text-gray-500 mt-1.5 leading-snug">
                Har bir qurilma tekshiruv va hujjatlar bilan topshiriladi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
