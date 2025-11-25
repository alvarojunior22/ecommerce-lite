import Image from "next/image";

export default function HomePage() {
  return (
    <section className="w-full bg-white py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* TEXT */}
        <div className="space-y-6">
          <h1 className="text-5xl font-extrabold leading-tight text-gray-900">
            Elevate your style. <br />
            Shop with confidence.
          </h1>

          <p className="text-lg text-gray-600">
            Welcome to <span className="font-semibold">Ecommerce Lite</span>,
            where design, quality, and experience come together to offer you the best
            products in one place. Simple, modern, and designed for you.
          </p>

          <div className="flex gap-4 mt-6">
            <a
              href="/views/shop"
              className="bg-black text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
            >
              View Products
            </a>

            <a
              href="/views/about"
              className="border border-gray-300 px-6 py-3 rounded-lg text-lg font-medium hover:bg-gray-100 transition"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="w-full flex justify-center">
          <Image
            src="/Homepaige.png"
            alt="Modern products"
            width={1600}
            height={1000}
            className="rounded-2xl object-cover"
          />
        </div>

      </div>
    </section>
  );
}
