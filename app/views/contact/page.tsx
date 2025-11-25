export default function ContactPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">

      <h1 className="text-4xl font-bold mb-6 text-blue-600">Contacto</h1>

      <p className="text-gray-600 mb-8">
        ¿Tienes alguna duda o deseas comunicarte con nosotros? Estamos para ayudarte.
      </p>

      <form className="grid gap-6">

        <input
          type="text"
          placeholder="Tu nombre"
          className="border px-4 py-3 rounded-lg w-full"
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          className="border px-4 py-3 rounded-lg w-full"
        />

        <textarea
          placeholder="Mensaje"
          rows={5}
          className="border px-4 py-3 rounded-lg w-full"
        ></textarea>

        <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold">
          Enviar mensaje
        </button>

      </form>

    </main>
  );
}
