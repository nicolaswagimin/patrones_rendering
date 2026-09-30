import Link from 'next/link';
import { fetchProductsSafely } from '@/lib/api';

export const revalidate = 10; // ISR: Se actualiza en background cada 10s

export default async function Deals() {
  const products = await fetchProductsSafely('https://fakestoreapi.com/products?limit=6', {
    next: { revalidate: 10 }
  });
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-20 px-4 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
            Días de Magia.
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium">Precios especiales. Tiempo limitado.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product: any, index: number) => {
            const discount = 15 + (index * 5); // Simulación dinámica
            
            return (
              <Link href={`/product/${product.id}`} key={product.id} className="glass-white rounded-3xl p-10 flex flex-col md:flex-row gap-8 items-center group hover:bg-white/10 transition-colors border border-white/10">
                <div className="w-full md:w-1/2 bg-white rounded-2xl p-6 h-56 flex items-center justify-center relative">
                  <div className="absolute -top-4 -right-4 bg-red-500 text-white font-bold px-4 py-2 rounded-full text-sm shadow-lg rotate-12">
                    -{discount}%
                  </div>
                  <img src={product.image} alt={product.title} className="max-h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500" />
                </div>
                
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  <h3 className="font-bold text-2xl mb-4 text-white line-clamp-2 leading-tight tracking-tight">{product.title}</h3>
                  <div className="mt-auto">
                    <p className="text-gray-500 line-through text-lg mb-1">${product.price}</p>
                    <p className="font-bold text-4xl text-white">
                      ${(product.price * (1 - discount/100)).toFixed(2)}
                    </p>
                  </div>
                  <div className="mt-8 text-blue-400 font-semibold group-hover:underline text-sm">
                    Aprovechar oferta {'>'}
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  );
}
