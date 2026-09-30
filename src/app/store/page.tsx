import Link from 'next/link';

export default async function Store() {
  // Solo obtenemos electrónicos para simular una Apple Store
  const res = await fetch('https://fakestoreapi.com/products/category/electronics', {
    cache: 'force-cache'
  });
  const products = await res.json();

  return (
    <div className="min-h-screen bg-[#f5f5f7] pt-16 pb-20 text-[#1d1d1f]">
      <div className="max-w-[980px] mx-auto px-4">
        <div className="flex items-end justify-between mb-12 border-b border-[#d2d2d7] pb-4">
          <h1 className="text-[40px] font-semibold sf-hero-text tracking-tight">Comprar Mac</h1>
          <p className="text-[17px] text-[#86868b] mb-2 font-medium">Asistencia personalizada en todo momento.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: any) => (
            <div key={product.id} className="bg-white rounded-[18px] p-8 flex flex-col shadow-[0_2px_12px_rgba(0,0,0,0.04)] hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] transition-shadow">
              <h3 className="font-semibold text-[24px] sf-hero-text mb-1 text-center line-clamp-1">{product.title.split(' ')[0]} {product.title.split(' ')[1]}</h3>
              <p className="text-[14px] text-center text-[#86868b] mb-8">{product.title.substring(0,30)}...</p>
              
              <div className="h-40 w-full mb-8 flex items-center justify-center">
                <img src={product.image} alt={product.title} className="max-h-full object-contain" />
              </div>
              
              <div className="mt-auto flex flex-col items-center">
                <p className="text-[14px] text-[#1d1d1f] mb-4">Desde ${product.price}</p>
                <Link href={`/product/${product.id}`} className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-normal hover:bg-blue-700 transition-colors w-full text-center">
                  Comprar
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
