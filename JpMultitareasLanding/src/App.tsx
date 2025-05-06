function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-900 leading-tight mb-4">
          Test de Tailwind con Vite <span className="text-blue-600">JpMultitareas</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Organiza tus proyectos. Aumenta tu productividad. Todo en un solo lugar.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl text-base font-medium hover:bg-blue-700 transition">
            Comenzar ahora
          </button>
          <button className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-xl text-base font-medium hover:bg-gray-100 transition">
            Ver demo
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
