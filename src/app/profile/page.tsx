'use client';
import { useState, useEffect } from 'react';

export default function ProfileCSR() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        await new Promise(resolve => setTimeout(resolve, 600)); // Simulamos carga de red
        const { fetchUserSafely } = await import('@/lib/api');
        const data = await fetchUserSafely();
        setUser(data);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f7] pt-24 pb-12 px-4 text-black">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight mb-2">Cuenta Aura</h1>
          <p className="text-gray-500 font-medium">Un solo lugar para todo lo relacionado con tus dispositivos.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] shadow-sm p-8 md:p-14">
          {loading ? (
            <div className="animate-pulse">
              <div className="flex flex-col items-center gap-6 mb-12">
                <div className="w-32 h-32 bg-gray-200 rounded-full"></div>
                <div className="h-8 bg-gray-200 rounded-full w-48"></div>
                <div className="h-4 bg-gray-200 rounded-full w-32"></div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="h-32 bg-gray-100 rounded-3xl"></div>
                <div className="h-32 bg-gray-100 rounded-3xl"></div>
              </div>
            </div>
          ) : user ? (
            <div>
              <div className="flex flex-col items-center text-center mb-16">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center text-5xl font-medium shadow-2xl shadow-blue-500/20 mb-6 border-4 border-white">
                  {user.name.firstname[0].toUpperCase()}{user.name.lastname[0].toUpperCase()}
                </div>
                <h2 className="text-4xl font-bold capitalize tracking-tight mb-2">{user.name.firstname} {user.name.lastname}</h2>
                <p className="text-xl text-gray-500 mb-6">{user.email}</p>
                <button className="bg-gray-100 text-black px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors">
                  Editar Cuenta
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#fbfbfd] p-8 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-6 text-lg tracking-tight">Dirección de Envío</h3>
                  <div className="text-base text-gray-600 space-y-3">
                    <p className="capitalize font-medium text-black">{user.address.city}, {user.address.street} {user.address.number}</p>
                    <p>Código Postal: {user.address.zipcode}</p>
                    <p className="pt-4 mt-4 border-t border-gray-200 text-blue-600 font-medium cursor-pointer text-sm">Cambiar dirección de envío {'>'}</p>
                  </div>
                </div>
                <div className="bg-[#fbfbfd] p-8 rounded-3xl border border-gray-100 hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-6 text-lg tracking-tight">Inicio de sesión y seguridad</h3>
                  <div className="text-base text-gray-600 space-y-3">
                    <p className="flex justify-between items-center"><span className="text-gray-500">Usuario</span> <span className="font-medium text-black">{user.username}</span></p>
                    <p className="flex justify-between items-center"><span className="text-gray-500">Teléfono</span> <span className="font-medium text-black">{user.phone}</span></p>
                    <p className="pt-4 mt-4 border-t border-gray-200 text-blue-600 font-medium cursor-pointer text-sm">Actualizar seguridad {'>'}</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <p className="text-center text-gray-500">No se pudo cargar la información de la cuenta.</p>
          )}
        </div>
      </div>
    </div>
  );
}
