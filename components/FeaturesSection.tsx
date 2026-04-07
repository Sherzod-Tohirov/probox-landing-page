import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section id="why-probox" className="py-16 lg:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10 leading-snug">
          Nima uchun{" "}
          <span className="text-blue-600">Probox</span> do&apos;konidan{" "}
          <span className="text-orange-500">Iphone</span> xarid
          <br className="hidden sm:block" />
          {" "}qilishingiz kerak?
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {/* Card 1 – Boshlang'ich to'lovsiz */}
          <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-5">
              <h3 className="text-base font-bold text-blue-600 mb-1">
                Boshlang&apos;ich to&apos;lovsiz
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Qulay variantlar orqali ortiqcha boshlang&apos;ich xarajatsiz xaridni boshlash imkoniyati mavjud.
              </p>
            </div>
            <div className="h-48 w-full overflow-hidden">
              <Image
                src="/images/pos-terminal.svg"
                alt="Boshlang'ich to'lovsiz"
                width={400}
                height={220}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 2 – iCloud (dark center card) */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col justify-between shadow-lg"
            style={{ background: "linear-gradient(160deg, #1e293b 0%, #0f172a 100%)" }}
          >
            <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
              {/* Probox logo on dark card */}
              <div className="mb-6">
                <svg
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="80" height="80" rx="16" fill="#1a56db" opacity="0.9" />
                  <rect x="18" y="18" width="18" height="18" rx="4" fill="white" />
                  <rect x="40" y="18" width="18" height="18" rx="4" fill="white" opacity="0.5" />
                  <rect x="18" y="40" width="18" height="18" rx="4" fill="white" opacity="0.5" />
                  <rect x="40" y="40" width="18" height="18" rx="4" fill="white" opacity="0.25" />
                  <rect x="60" y="46" width="7" height="18" rx="3.5" fill="white" opacity="0.4" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                iCloud o&apos;rnatishlarsiz
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Qurilmalar iCloud holati tekshirilgan va foydalanishga tayyor ko&apos;rinishda topshiriladi.
              </p>
            </div>
          </div>

          {/* Card 3 – Hujjatlari bilan sotib oling */}
          <div className="rounded-2xl border border-gray-100 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="p-5">
              <h3 className="text-base font-bold text-blue-600 mb-1">
                Hujjatlari bilan sotib oling
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Har bir xarid bo&apos;yicha hujjatlar, shartlar va topshirish jarayoni shaffof ko&apos;rsatiladi.
              </p>
            </div>
            <div className="h-48 w-full overflow-hidden">
              <Image
                src="/images/iphone-box.svg"
                alt="Hujjatlari bilan sotib oling"
                width={400}
                height={220}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
