"use client";

import { useState } from "react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  
    setSuccess(true);

    
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Contacto</h1>

      <p className="text-gray-600 mb-8">
        ¿Tienes alguna duda o deseas comunicarte con nosotros? Estamos para ayudarte.
      </p>

      <form className="grid gap-6" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tu nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-3 rounded-lg w-full"
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border px-4 py-3 rounded-lg w-full"
        />

        <textarea
          placeholder="Mensaje"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border px-4 py-3 rounded-lg w-full"
        ></textarea>

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold"
        >
          Enviar mensaje
        </button>

        {/* Mensaje de éxito */}
        {success && (
          <p className="mt-4 text-green-600 font-medium">
            ✅ ¡Mensaje enviado correctamente!
          </p>
        )}
      </form>
    </main>
  );
}
