import Link from 'next/link';

export default function SistemasInformacao() {
  const temas = [
    { title: "Introdução", icon: "📚", route: "/sistemas-informacao/introducao" },
    { title: "Sistemas de Informação", icon: "💾", route: "/sistemas-informacao/sistemas" },
    { title: "O Povo Brasileiro e a Questão do Negro e do Indígena", icon: "🧑🏾‍🤝‍🧑🏻", route: "/sistemas-informacao/questao-social" },
    { title: "Meio Ambiente e Sociedade", icon: "🌍", route: "/sistemas-informacao/meio-ambiente" },
    { title: "Fundamentação Histórica dos Direitos Humanos", icon: "📜", route: "/sistemas-informacao/direitos-humanos" },
    { title: "Avaliações", icon: "📝", route: "/sistemas-informacao/avaliacoes" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-green-100 via-blue-100 to-purple-200">
      <header className="py-6 px-4">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link href="/" className="text-blue-600 hover:text-blue-800 transition text-lg">
            ← Voltar
          </Link>
          <h1 className="text-3xl font-bold text-blue-700">
            Sistemas de Informação e Sociedade
          </h1>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 pb-6">
        <div className="max-w-3xl w-full">
          <div className="grid grid-cols-1 gap-6">
            {temas.map((tema, index) => (
              <Link
                key={index}
                href={tema.route}
                className="flex items-center justify-between bg-white shadow-md rounded-lg px-6 py-4 hover:scale-105 hover:shadow-xl transition-transform"
              >
                <div className="flex items-center gap-4">
                  <span
                    className="text-3xl animate-bounce"
                    role="img"
                    aria-hidden="true"
                  >
                    {tema.icon}
                  </span>
                  <div className="text-lg font-medium text-gray-800">
                    {tema.title}
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
            className="text-purple-500 hover:text-purple-600 transition"
          >
            ChatGPT ❤️
          </a>
        </p>
        <p className="text-xs text-gray-500">Desenvolvido com React e Next.js</p>
      </footer>
    </div>
  );
}
