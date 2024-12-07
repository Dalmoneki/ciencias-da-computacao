import Link from 'next/link';

export default function Arquitetura() {
  const temas = [
    { title: "Introdução", icon: "📘", route: "/arquitetura/introducao" },
    { title: "Base Computacional", icon: "🖥️", route: "/arquitetura/base-computacional" },
    { title: "Componentes de Hardware", icon: "🔧", route: "/arquitetura/componentes-hardware" },
    { title: "Representação de Dados", icon: "📊", route: "/arquitetura/representacao-dados" },
    { title: "Lógica Digital", icon: "🔢", route: "/arquitetura/logica-digital" },
    { title: "Processamento em Paralelo", icon: "⚡", route: "/arquitetura/processamento-paralelo" },
    { title: "Arquitetura CISC X RISC", icon: "📐", route: "/arquitetura/cisc-risc" },
    { title: "Prepare", icon: "📑", route: "/arquitetura/prepare" },
    { title: "Avaliações", icon: "✅", route: "/arquitetura/avaliacoes" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-100 to-blue-200">
      <header className="py-6 px-4">
        <div className="max-w-3xl mx-auto flex items-center">
          <Link href="/" className="text-blue-500 hover:text-blue-700 transition">
            <span className="text-2xl">← Voltar</span>
          </Link>
          <h1 className="flex-grow text-center text-3xl font-bold text-blue-700">Arquitetura de Computadores</h1>
        </div>
      </header>

      <main className="flex-grow px-4 pb-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            {temas.map((tema, index) => (
              <Link
                key={index}
                href={tema.route}
                className="w-full px-6 py-4 flex items-center justify-between bg-blue-50 rounded-xl shadow-md hover:bg-blue-100 transition-transform transform hover:scale-105 mb-4"
              >
                <div className="flex items-center gap-4 animate-pulse">
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
