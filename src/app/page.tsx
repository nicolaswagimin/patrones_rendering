import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col bg-white">
      {/* Hero 1: iPhone style */}
      <section className="relative w-full h-[600px] md:h-[700px] flex flex-col items-center text-center pt-16 bg-black text-white overflow-hidden">
        <h2 className="text-5xl md:text-[56px] font-semibold sf-hero-text mb-2 z-10">iPhone 15 Pro</h2>
        <p className="text-xl md:text-[28px] text-gray-100 font-normal sf-sub-text mb-4 z-10">Titanio. Muy robusto. Muy ligero. Muy Pro.</p>
        <div className="flex gap-6 justify-center z-10 mt-2">
          <Link href="/product/14" className="bg-white text-black px-6 py-2 rounded-full text-base font-normal hover:bg-gray-200 transition-colors">
            Comprar
          </Link>
          <Link href="/store" className="text-blue-500 hover:underline text-lg flex items-center pt-1">
            Más información {'>'}
          </Link>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center h-2/3 mt-8">
           <img src="https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg" alt="iPhone 15 Pro" className="h-full object-contain mix-blend-screen opacity-90 scale-125 md:scale-100 origin-bottom" />
        </div>
      </section>

      {/* Hero 2: MacBook style */}
      <section className="relative w-full h-[600px] md:h-[700px] flex flex-col items-center text-center pt-16 bg-[#f5f5f7] text-[#1d1d1f] mt-4 overflow-hidden">
        <h2 className="text-5xl md:text-[56px] font-semibold sf-hero-text mb-2 z-10">MacBook Air</h2>
        <p className="text-xl md:text-[28px] font-normal sf-sub-text mb-4 z-10">Superligero. Superchip M3.</p>
        <div className="flex gap-6 justify-center z-10 mt-2">
          <Link href="/product/14" className="bg-blue-600 text-white px-6 py-2 rounded-full text-base font-normal hover:bg-blue-700 transition-colors">
            Comprar
          </Link>
          <Link href="/store" className="text-blue-600 hover:underline text-lg flex items-center pt-1">
            Más información {'>'}
          </Link>
        </div>
        <div className="absolute bottom-0 w-full flex justify-center h-2/3 mt-8">
           <img src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="MacBook Air" className="h-full object-contain mix-blend-multiply drop-shadow-xl scale-110 md:scale-100 origin-bottom" />
        </div>
      </section>

      {/* Grid: 50/50 Sections */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 px-4 pb-4">
        <div className="relative h-[580px] bg-black text-white flex flex-col items-center text-center pt-12 overflow-hidden">
          <h3 className="text-[40px] font-semibold sf-hero-text mb-1 z-10">AirPods Pro</h3>
          <p className="text-lg sf-sub-text z-10">Magia remasterizada.</p>
          <div className="flex gap-4 justify-center z-10 mt-4">
            <Link href="/product/14" className="bg-white text-black px-5 py-1.5 rounded-full text-sm hover:bg-gray-200 transition-colors">Comprar</Link>
            <Link href="/store" className="text-blue-500 hover:underline text-sm flex items-center pt-1">Más info {'>'}</Link>
          </div>
          <img src="https://fakestoreapi.com/img/71li-ujtl-L._AC_UX679_.jpg" className="absolute bottom-10 h-[50%] object-contain mix-blend-screen" alt="AirPods" />
        </div>

        <div className="relative h-[580px] bg-[#fbfbfd] text-[#1d1d1f] flex flex-col items-center text-center pt-12 overflow-hidden">
          <h3 className="text-[40px] font-semibold sf-hero-text mb-1 z-10">iPad Pro</h3>
          <p className="text-lg sf-sub-text z-10">El iPad más fino. El chip M4 más potente.</p>
          <div className="flex gap-4 justify-center z-10 mt-4">
            <Link href="/product/14" className="bg-blue-600 text-white px-5 py-1.5 rounded-full text-sm hover:bg-blue-700 transition-colors">Comprar</Link>
            <Link href="/store" className="text-blue-600 hover:underline text-sm flex items-center pt-1">Más info {'>'}</Link>
          </div>
          <img src="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg" className="absolute bottom-0 h-[60%] object-contain mix-blend-multiply drop-shadow-2xl translate-y-10" alt="iPad" />
        </div>
      </section>
    </div>
  );
}
