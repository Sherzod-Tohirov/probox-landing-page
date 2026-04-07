import Image from "next/image";

export default function BonusSection() {
  return (
    <section
      id="bonus"
      className="relative overflow-hidden py-16 lg:py-20"
      style={{ background: "#f8fafc" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 p-10 lg:p-14">
            {/* Left content */}
            <div className="flex-1 max-w-lg text-center lg:text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4 flex items-center gap-2 justify-center lg:justify-start">
                <span>🔥</span>
                <span>Maxsus bonus</span>
              </h2>
              <p className="text-base text-gray-600 leading-relaxed mb-8">
                Undan tashqari oylik to&apos;lovlarini vaqtida to&apos;lasangiz maxsus sovg&apos;alarga ham ega bo&apos;lishingiz mumkin!
              </p>
              <a
                href="#apply"
                className="inline-block px-7 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-95 transition-all duration-200 text-sm shadow-lg shadow-blue-200"
              >
                Ariza qoldirish
              </a>
            </div>

            {/* Right content – gift boxes */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <Image
                src="/images/gift-boxes.svg"
                alt="Maxsus bonus sovg'alar"
                width={380}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
