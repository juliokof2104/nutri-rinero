import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function NutriWell() {
  return (
    <div className="font-sans text-gray-800 bg-green-50">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 bg-white shadow-sm sticky top-0 z-10">
        <div className="text-2xl font-bold text-green-700 flex items-center gap-2">
          <span className="text-green-600">🍃</span> NutriWell
        </div>
        <ul className="flex gap-6 text-sm font-medium">
          <li><a href="#" className="hover:text-green-600">Inicio</a></li>
          <li><a href="#" className="hover:text-green-600">Sobre mí</a></li>
          <li><a href="#" className="hover:text-green-600">Servicios</a></li>
          <li><a href="#" className="hover:text-green-600">Testimonios</a></li>
          <li><a href="#" className="hover:text-green-600">Contacto</a></li>
        </ul>
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">Solicitar Consulta</button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-center px-6 py-12 bg-green-100">
        <img src="https://via.placeholder.com/300x400" alt="Laura García" className="rounded-lg shadow-lg mb-6 md:mb-0 md:mr-10" />
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-bold text-green-800 mb-4">Bienestar a tu alcance</h1>
          <p className="text-lg mb-6">Soy Laura García, nutricionista profesional. Te ayudaré a alcanzar tus metas de alimentación con planes personalizados y seguimiento continuo.</p>
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Solicitar Consulta</button>
        </div>
      </section>

      {/* Sobre mí */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-4">Sobre mí</h2>
        <p className="max-w-2xl mx-auto text-center">Con más de 10 años de experiencia, mi pasión es guiar a mis pacientes hacia un estilo de vida saludable y sostenible. Estoy especializada en nutrición deportiva y trastornos alimentarios.</p>
      </section>

      {/* Servicios */}
      <section className="px-6 py-12 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">Servicios Destacados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            { title: "Atención Personalizada", desc: "Planes adaptados a tus necesidades y objetivos." },
            { title: "Evaluación y Métricas Corporales", desc: "Análisis completo de tu composición corporal." },
            { title: "Creación de Planes de Alimentación", desc: "Dietas equilibradas y fáciles de seguir." },
            { title: "Seguimiento de Casos", desc: "Acompañamiento semanal para asegurar tu progreso." },
          ].map((s, i) => (
            <div key={i} className="bg-green-50 p-4 rounded-lg shadow-sm border border-green-100">
              <h3 className="font-semibold text-green-800 mb-2">{s.title}</h3>
              <p className="text-sm text-gray-700">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="px-6 py-12">
        <h2 className="text-2xl font-bold text-center mb-8">Testimonios</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            { name: "Sofía Martínez", text: "Laura me ayudó a cambiar mis hábitos alimenticios y a sentirme mejor conmigo misma. Su enfoque personalizado fue clave para mi éxito." },
            { name: "Carla Gómez", text: "Excelente profesional, muy cercana y siempre disponible para resolver dudas. Recomiendo sus servicios al 100%." },
            { name: "Lucía Ríos", text: "Gracias a su acompañamiento pude alcanzar mis metas sin pasar hambre ni estrés. ¡Mil gracias!" }
          ].map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow">
              <p className="italic mb-2">"{t.text}"</p>
              <p className="font-semibold text-sm text-green-800">— {t.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-green-100 px-6 py-10 text-center">
        <h2 className="text-2xl font-bold mb-4">Estás a un paso de tu mejor versión</h2>
        <p className="mb-6">Reservá tu consulta ahora.</p>
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700">Solicitar consulta</button>
      </section>

      {/* Footer */}
      <footer className="bg-white px-6 py-8 text-center text-sm text-gray-600 border-t">
        <p className="mb-2">¿Listo para transformar tu alimentación?</p>
        <a href="#" className="inline-block mb-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Reservá tu consulta</a>
        <div>©2024 NutriWell. Todos los derechos reservados.</div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/5490000000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 z-50"
        aria-label="Chat en WhatsApp"
      >
        <FaWhatsapp size={24} />
      </a>
    </div>
  );
}