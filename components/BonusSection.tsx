import Image from "next/image";

export default function BonusSection() {
  return (
    <section
      id="bonus"
      className="relative overflow-hidden py-14 lg:py-20"
      style={{ background: "#f3f6fa" }}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-white shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 p-8 sm:p-10 lg:p-14">
            {/* Left content */}
            <div className="flex-1 max-w-lg text-center lg:text-left">
              <h2 className="text-[26px] sm:text-[32px] font-extrabold text-gray-900 mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <span>🔥</span>
                <span>Maxsus bonus</span>
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-8 max-w-[380px]">
                Undan tashqari oylik to&apos;lovlarini vaqtida
                to&apos;lasangiz maxsus sovg&apos;alarga ham ega
                bo&apos;lishingiz mumkin!
              </p>
              <a
                href="#apply"
                className="inline-block px-8 py-3.5 bg-[#1a8fc4] text-white font-semibold rounded-xl hover:bg-[#1580b0] active:scale-[0.98] transition-all duration-200 text-[15px]"
              >
                Ariza qoldirish
              </a>
            </div>

            {/* Right content – gift boxes */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/gift-boxes.svg"
                alt="Maxsus bonus sovg'alar"
                width={420}
                height={320}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
