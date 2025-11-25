export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-white py-10 mt-16 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-6 text-center space-y-4">

        {/* Site Name */}
        <h3 className="text-xl font-semibold tracking-wide">
          Ecommerce-lite
        </h3>

        {/* Short Description */}
        <p className="text-gray-400 max-w-lg mx-auto text-sm leading-relaxed">
          Ecommerce-lite is a modern and lightweight shopping platform designed to provide a fast, intuitive, and accessible experience. Our focus is on delivering high-quality products.
        </p>

        {/* Elegant Divider */}
        <div className="w-full h-px bg-blue-800/40 my-4"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-xs">
          © {year} Ecommerce-lite — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
