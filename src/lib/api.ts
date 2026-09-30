export const fallbackProducts = [
  {
    id: 14,
    title: "Apple iPhone 15 Pro Max",
    price: 1199,
    description: "Titanio. Muy robusto. Muy ligero. Muy Pro.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg"
  },
  {
    id: 9,
    title: "Apple MacBook Air M3",
    price: 1099,
    description: "Superligero. Superchip M3.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg"
  },
  {
    id: 11,
    title: "Apple iPad Pro M4",
    price: 999,
    description: "El iPad más fino. El chip M4 más potente.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
  },
  {
    id: 12,
    title: "Apple AirPods Pro",
    price: 249,
    description: "Magia remasterizada con cancelación activa de ruido.",
    category: "electronics",
    image: "https://fakestoreapi.com/img/71li-ujtl-L._AC_UX679_.jpg"
  }
];

export async function fetchProductsSafely(url: string, options: RequestInit) {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    
    // We get text first to catch the HTML response before it breaks JSON parse
    const text = await res.text(); 
    try {
      return JSON.parse(text);
    } catch (e) {
      throw new Error("Invalid JSON: " + text.slice(0, 50));
    }
  } catch (error) {
    console.warn('API Error (using fallback):', error);
    return fallbackProducts;
  }
}

export async function fetchProductSafely(id: string, options: RequestInit) {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, options);
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    
    const text = await res.text();
    try {
      return JSON.parse(text);
    } catch (e) {
      throw new Error("Invalid JSON: " + text.slice(0, 50));
    }
  } catch (error) {
    console.warn('API Error (using fallback):', error);
    return fallbackProducts.find(p => p.id === parseInt(id)) || fallbackProducts[0];
  }
}

export async function fetchUserSafely() {
  try {
    const res = await fetch('https://fakestoreapi.com/users/3');
    if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
    
    const text = await res.text();
    return JSON.parse(text);
  } catch (error) {
    console.warn('API Error (using fallback):', error);
    return {
      name: { firstname: 'Aura', lastname: 'Customer' },
      email: 'hello@aura.com',
      address: { city: 'Cupertino', street: 'One Apple Park Way', number: '', zipcode: '95014' },
      username: 'aurapro',
      phone: '+1 (800) 123-4567'
    };
  }
}
