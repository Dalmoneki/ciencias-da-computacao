import Link from 'next/link';

export default function FundamentosRedes() {
  const temas = [
    { title: "Introdução às Redes de Computadores", icon: "🌐", route: "/redes/introducao" },
    { title: "Modelos de Referência", icon: "📊", route: "/redes/modelos" },
    { title: "Camada Física", icon: "🔌", route: "/redes/camada-fisica" },
    { title: "Camada de Enlace", icon: "🔗", route: "/redes/camada-enlace" },
    { title: "Camada de Rede", icon: "🌎", route: "/redes/camada-rede" },
    { title: "Camada de Transporte", icon: "🚚", route: "/redes/camada-transporte" },
    { title: "Camada de Aplicação", icon: "🖥️", route: "/redes/camada-aplicacao" },
    { title: "Segurança em Redes", icon: "🔒", route: "/redes/seguranca" },
    { title: "Avaliações", icon: "✅", route: "/redes/avaliacoes" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-blue-200 to-green-100">
      <header className="py-6 px-4">
        <div className="max-w-3xl mx-auto flex items-center">
          <Link href="/" className="text-blue-500 hover:text-blue-700 transition">
            <span className="text-2xl">← Voltar</span>
          </Link>
          <h1 className="flex-grow text-center text-3xl font-extrabold text-blue-700">
            Fundamentos de Redes de Computadores
          </h1>
        </div>
      </header>

      <main className="flex-grow px-4 pb-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-3xl shadow-lg p-6">
            {temas.map((tema, index) => (
              <Link
                key={index}
                href={tema.route}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-200 to-blue-100 rounded-xl shadow-md hover:scale-105 hover:shadow-lg transition-transform mb-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl" role="img" aria-hidden="true">
                    {tema.icon}
                  </span>
                  <div className="text-lg font-semibold text-blue-800">
                    {`Tema ${index + 1}: ${tema.title}`}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="py-6 text-center text-gray-600">
        <p className="text-sm">
          Feito por Dalmoneki e{' '}
          <a
            href="https://chat.openai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition"
          >
            ChatGPT ❤️
          </a>
        </p>
        <p className="text-xs text-gray-500">Desenvolvido com React e Next.js</p>
      </footer>
    </div>
  );
}
