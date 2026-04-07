import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="apply"
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #eef2ff 0%, #e8eeff 40%, #dbeafe 100%)" }}
    >
      {/* Background decorative blobs */}
      <div
        className="absolute -bottom-10 right-32 w-72 h-72 rounded-full opacity-50 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #86efac 0%, #4ade80 50%, transparent 100%)",
        }}
      />
      <div
        className="absolute top-4 right-10 w-40 h-40 rounded-full opacity-30 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, #bbf7d0 0%, #4ade80 100%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[360px] py-10 lg:py-4 gap-6">
          {/* Left content */}
          <div className="flex-1 max-w-lg z-10 text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-6">
              Atiga{" "}
              <span className="text-orange-500">1 000 000 so&apos;m</span>
              <br className="hidden sm:block" />
              {" "}boshlang&apos;ich to&apos;lov bilan Iphone
              <br className="hidden sm:block" />
              {" "}17 ga ega bo&apos;ling
            </h1>
            <a
              href="#apply"
              className="inline-block px-7 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 text-sm shadow-lg shadow-blue-200"
            >
              Ariza qoldirish
            </a>
          </div>

          {/* Right content – iPhone with floating badges */}
          <div className="flex-1 relative flex justify-center lg:justify-end items-end h-[300px] sm:h-[340px] lg:h-[360px] w-full max-w-md">
            {/* iPhone image */}
            <div className="relative z-10 h-full flex items-end justify-center">
              <Image
                src="/images/iphone-placeholder.svg"
                alt="iPhone 17"
                width={220}
                height={280}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* 24 soat badge */}
            <div className="absolute top-8 left-0 sm:left-8 lg:left-0 z-20 bg-blue-600 text-white rounded-2xl px-4 py-3 shadow-lg w-[155px]">
              <p className="font-bold text-sm leading-tight">24 soat ichida</p>
              <p className="text-[11px] text-blue-100 mt-1 leading-snug">
                Ariza ko&apos;rib chiqiladi va operator bog&apos;lanadi.
              </p>
            </div>

            {/* Rasmiy hujjatlar badge */}
            <div className="absolute bottom-6 right-0 sm:right-6 lg:right-0 z-20 bg-white rounded-2xl px-4 py-3 shadow-xl w-[165px]">
              <p className="font-bold text-sm text-gray-900 leading-tight">Rasmiy hujjatlar</p>
              <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                Har bir qurilma tekshiruv va hujjatlar bilan topshiriladi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
