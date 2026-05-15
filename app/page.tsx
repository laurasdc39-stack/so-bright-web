export default function Home() {
  return (
    <main className="w-full min-h-screen bg-white text-black">
      
      {/* HEADER */}
      <header className="w-full flex justify-center pt-8">
        <img
          src="/logo.png"
          alt="So Bright Logo"
          className="w-40 object-contain"
        />
      </header>

      {/* HERO */}
      <section className="w-full flex flex-col items-center justify-center px-6 pt-10 pb-20">
        
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-center">
          SO BRIGHT
        </h1>

        <p className="mt-6 text-center text-gray-700 text-lg max-w-2xl leading-relaxed">
          Cuidado premium para mascotas. Fórmulas profesionales para brillo,
          suavidad y bienestar del pelaje.
        </p>

        <img
          src="/hero.jpg"
          alt="Hero"
          className="mt-10 w-full max-w-4xl rounded-3xl shadow-2xl object-cover"
        />

        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          <button className="bg-black text-white px-8 py-4 rounded-full text-lg hover:scale-105 transition-all">
            Comprar ahora
          </button>

          <button className="border border-black px-8 py-4 rounded-full text-lg hover:bg-black hover:text-white transition-all">
            Ver productos
          </button>
        </div>
      </section>

      {/* PRODUCTOS */}
      <section className="w-full px-6 py-20 bg-gray-50">
        <h2 className="text-4xl font-bold text-center mb-16">
          Nuestra línea premium
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          {/* PRODUCTO 1 */}
          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center">
            <img
              src="/silky.jpg"
              alt="Silky Touch"
              className="w-full h-80 object-cover rounded-2xl"
            />

            <h3 className="text-2xl font-semibold mt-6">
              Silky Touch
            </h3>

            <p className="text-gray-600 text-center mt-3">
              Suavidad extrema y brillo sedoso para pelajes delicados.
            </p>
          </div>

          {/* PRODUCTO 2 */}
          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center">
            <img
              src="/deepclean.jpg"
              alt="Deep Clean"
              className="w-full h-80 object-cover rounded-2xl"
            />

            <h3 className="text-2xl font-semibold mt-6">
              Deep Clean
            </h3>

            <p className="text-gray-600 text-center mt-3">
              Limpieza profunda con aroma premium y control de olor.
            </p>
          </div>

          {/* PRODUCTO 3 */}
          <div className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center">
            <img
              src="/smooth.jpg"
              alt="Smooth Coat"
              className="w-full h-80 object-cover rounded-2xl"
            />

            <h3 className="text-2xl font-semibold mt-6">
              Smooth Coat
            </h3>

            <p className="text-gray-600 text-center mt-3">
              Desenredante profesional con acabado brillante y suave.
            </p>
          </div>

        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="w-full px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">
          ¿Por qué elegir SO BRIGHT?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">

          <div className="p-8 rounded-3xl border">
            <h3 className="text-2xl font-bold mb-4">
              Ingredientes premium
            </h3>

            <p className="text-gray-600">
              Fórmulas desarrolladas para grooming profesional.
            </p>
          </div>

          <div className="p-8 rounded-3xl border">
            <h3 className="text-2xl font-bold mb-4">
              Brillo profesional
            </h3>

            <p className="text-gray-600">
              Pelaje suave, brillante y con acabado elegante.
            </p>
          </div>

          <div className="p-8 rounded-3xl border">
            <h3 className="text-2xl font-bold mb-4">
              Aroma duradero
            </h3>

            <p className="text-gray-600">
              Fragancias premium con sensación de grooming boutique.
            </p>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="w-full py-10 border-t text-center text-gray-500">
        © 2026 SO BRIGHT — Premium Pet Care
      </footer>

    </main>
  );
}
