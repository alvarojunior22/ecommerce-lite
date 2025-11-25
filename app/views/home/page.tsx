import Image from "next/image";

export default function HomePage() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            Eleva tu estilo. <br />
            Compra con confianza.
          </h1>

          <p className="text-lg text-gray-600">
            Bienvenido a <span className="font-semibold">Ecommerce Lite</span>,
            donde diseño, calidad y experiencia se unen para ofrecerte los mejores
            productos en un solo lugar. Simple, moderno y pensado para ti.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="/views/shop"
              className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
            >
              Ver Productos
            </a>

            <a
              href="/views/about"
              className="border border-gray-300 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
            >
              Conocer Más
            </a>
          </div>
        </div>

        {/* IMAGEN HERO */}
        <div className="w-full flex justify-center">
          <Image
            src="/Homepaige.png"
            alt="Productos modernos"
            width={1600}
            height={1000}
            className="rounded-2xl  object-cover"
          />
        </div>

      </div>
    </section>
  );
}

