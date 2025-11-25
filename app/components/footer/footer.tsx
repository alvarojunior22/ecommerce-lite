export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-10 mt-16 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">

        {/* Nombre del sitio */}
        <h3 className="text-xl font-semibold tracking-wide">
          Ecommerce-lite
        </h3>

        {/* Breve descripción */}
        <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
          Ecommerce-lite es una plataforma de compras moderna y ligera diseñada para ofrecer una experiencia rápida, intuitiva y accesible. Nuestro enfoque está en brindar productos de calidad
        </p>

        {/* Línea divisoria elegante */}
        <div className="w-full h-px bg-blue-800/40 my-4"></div>

        {/* Derechos reservados */}
        <p className="text-gray-500 text-xs">
          © {year} Ecommerce-lite — Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
