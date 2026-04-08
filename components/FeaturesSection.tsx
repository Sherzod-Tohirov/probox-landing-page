import Image from "next/image";

export default function FeaturesSection() {
  return (
    <section id="why-probox" className="py-16 lg:py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section title */}
        <h2 className="text-[26px] sm:text-[32px] font-extrabold text-gray-900 mb-10 leading-snug">
          Nima uchun{" "}
          <span className="text-[#1a8fc4]">Probox</span> do&apos;konidan{" "}
          <span className="font-extrabold text-gray-900">Iphone</span> xarid
          <br className="hidden sm:block" /> qilishingiz kerak?
        </h2>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {/* Card 1 – Boshlang'ich to'lovsiz */}
          <div className="rounded-2xl bg-[#f0f4f8] overflow-hidden flex flex-col">
            <div className="p-5 pb-3">
              <h3 className="text-[15px] font-bold text-[#1a8fc4] mb-1.5">
                Boshlang&apos;ich to&apos;lovsiz
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Qulay variantlar orqali ortiqcha boshlang&apos;ich xarajatsiz
                xaridni boshlash imkoniyati mavjud.
              </p>
            </div>
            <div className="flex-1 min-h-[200px] overflow-hidden mt-2">
              <Image
                src="/images/pos-terminal.svg"
                alt="Boshlang'ich to'lovsiz"
                width={500}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Card 2 – iCloud (dark center card) */}
          <div
            className="rounded-2xl overflow-hidden flex flex-col shadow-lg"
            style={{
              background:
                "linear-gradient(165deg, #2d3748 0%, #1a202c 40%, #171923 100%)",
            }}
          >
            {/* iPhone image at top */}
            <div className="flex-1 flex items-center justify-center px-6 pt-6 pb-2 min-h-[220px]">
              <Image
                src="/images/iphone-center.svg"
                alt="iCloud o'rnatishlarsiz"
                width={360}
                height={280}
                className="object-contain w-full max-h-[240px]"
              />
            </div>
            {/* Text at bottom */}
            <div className="px-6 pb-6">
              <h3 className="text-[16px] font-bold text-white mb-2">
                iCloud o&apos;rnatishlarsiz
              </h3>
              <p className="text-[13px] text-slate-400 leading-relaxed">
                Qurilmalar iCloud holati tekshirilgan va foydalanishga tayyor
                ko&apos;rinishda topshiriladi.
              </p>
            </div>
          </div>

          {/* Card 3 – Hujjatlari bilan sotib oling */}
          <div className="rounded-2xl bg-[#f0f4f8] overflow-hidden flex flex-col">
            <div className="p-5 pb-3">
              <h3 className="text-[15px] font-bold text-[#1a8fc4] mb-1.5">
                Hujjatlari bilan sotib oling
              </h3>
              <p className="text-[13px] text-gray-500 leading-relaxed">
                Har bir xarid bo&apos;yicha hujjatlar, shartlar va topshirish
                jarayoni shaffof ko&apos;rsatiladi.
              </p>
            </div>
            <div className="flex-1 min-h-[200px] overflow-hidden mt-2">
              <Image
                src="/images/iphone-box.svg"
                alt="Hujjatlari bilan sotib oling"
                width={500}
                height={320}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
