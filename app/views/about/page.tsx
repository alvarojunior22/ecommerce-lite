import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
        <p className="mt-4 text-gray-600 text-lg">
          We are committed to offering a modern and reliable online shopping experience,
          combining quality, innovation, and exceptional customer service.
        </p>
      </section>

      <section className="grid md:grid-cols-2 gap-10 items-center">
        {/* Imagen ilustrativa */}
        <div className="w-full h-72 rounded-lg overflow-hidden">
          <Image src='/ecommerce-lite.png' alt="Ecommerce modern ilustration" width={600} height={200} className="w-full h-full object-cover"/>
        </div>
          
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Who We Are</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Ecommerce-lite was created with the mission of simplifying online shopping.
            We focus on offering carefully curated products, transparent information, and a
            smooth purchasing process. Our platform is built with modern technology to
            guarantee speed, security, and a seamless user experience on any device.
          </p>
        </div>
      </section>

      <section className="mt-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Our Values</h2>
          <ul className="mt-4 text-gray-600 space-y-3 leading-relaxed list-disc list-inside">
            <li><strong>Transparency:</strong> Clear information, fair pricing, and honest communication.</li>
            <li><strong>Quality:</strong> We provide well-selected products that meet high standards.</li>
            <li><strong>Innovation:</strong> A platform built with modern tools for a better experience.</li>
            <li><strong>User-First:</strong> Every decision is made with the customer in mind.</li>
          </ul>
        </div>

        {/* Imagen ilustrativa */}
        <div className="w-full h-80 rounded-lg overflow-hidden">
          <Image src='/about2.png' alt="Ecommerce modern ilustration" width={700} height={600} className="w-full h-full object-cover" />
        </div>
      </section>

      <section className="mt-16 text-center">
        <h2 className="text-2xl font-semibold text-gray-900">Our Commitment</h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto leading-relaxed">
          At Ecommerce-lite, we aim to build long-term relationships with our customers
          by offering reliable service, secure payments, and constant improvements to
          our platform. Your trust is our biggest priority.
        </p>
      </section>
    </main>
  );
}
