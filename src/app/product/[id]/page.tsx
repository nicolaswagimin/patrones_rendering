import Link from 'next/link';

// SSR: Renderizado bajo demanda para stock en tiempo real
export default async function ProductPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  
  // no-store garantiza que no haya caché, obtenemos el dato real en cada petición
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`, {
    cache: 'no-store'
  });
  const product = await res.json();
  
  // Simulamos un inventario en base de datos
  const realTimeStock = Math.floor(Math.random() * 8);

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-4 text-black">
      <div className="max-w-5xl mx-auto">
        <Link href="/store" className="text-gray-500 hover:text-black mb-8 inline-block text-sm font-medium transition-colors">
          {'<'} Volver a la tienda
        </Link>
        
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/2 bg-[#fbfbfd] rounded-3xl p-12 flex items-center justify-center aspect-square border border-gray-100">
             <img src={product.image} alt={product.title} className="max-h-full object-contain mix-blend-multiply" />
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">{product.title}</h1>
            <p className="text-2xl font-medium text-gray-900 mb-8">${product.price}</p>
            
            <p className="text-gray-600 mb-10 leading-relaxed">
              {product.description}
            </p>

            <div className="bg-gray-50 rounded-2xl p-6 mb-8 border border-gray-100">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-semibold tracking-wide uppercase text-gray-500">Disponibilidad</span>
                {realTimeStock > 0 ? (
                  <span className="text-green-600 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span> En stock ({realTimeStock} unds.)
                  </span>
                ) : (
                  <span className="text-red-500 font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500"></span> Agotado
                  </span>
                )}
              </div>
              <p className="text-xs text-gray-400">Verificado en tiempo real hace un instante.</p>
            </div>

            <button 
              disabled={realTimeStock === 0}
              className={`w-full py-4 rounded-full font-bold text-lg transition-all ${
                realTimeStock > 0 
                ? 'bg-black text-white hover:bg-gray-800 hover:scale-[1.02] shadow-xl' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {realTimeStock > 0 ? 'Añadir a la bolsa' : 'Agotado'}
            </button>
            
            <div className="mt-6 flex justify-center gap-6 text-sm text-gray-500 font-medium">
              <span className="flex items-center gap-2">📦 Envío gratis</span>
              <span className="flex items-center gap-2">↩️ Devolución 30 días</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
