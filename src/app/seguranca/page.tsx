import Link from 'next/link';

export default function Seguranca() {
  const temas = [
    { title: "Conceitos Básicos de Segurança", icon: "🔒", route: "/seguranca/conceitos-basicos" },
    { title: "Ameaças e Vulnerabilidades", icon: "⚠️", route: "/seguranca/ameacas" },
    { title: "Criptografia e Autenticação", icon: "🔑", route: "/seguranca/criptografia" },
    { title: "Segurança em Redes", icon: "🌐", route: "/seguranca/redes" },
    { title: "Políticas de Segurança", icon: "📜", route: "/seguranca/politicas" },
    { title: "Gestão de Riscos", icon: "⚖️", route: "/seguranca/riscos" },
    { title: "Segurança em Aplicações Web", icon: "🖥️", route: "/seguranca/web" },
    { title: "Tendências em Segurança da Informação", icon: "🧠", route: "/seguranca/tendencias" },
    { title: "Avaliações", icon: "📝", route: "/seguranca/avaliacoes" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-yellow-100 via-red-100 to-pink-200">
      <header className="py-6 px-4">
        <div className="max-w-3xl mx-auto flex items-center gap-4">
          <Link href="/" className="text-red-600 hover:text-red-800 transition text-lg">
            ← Voltar
          </Link>
          <h1 className="text-3xl font-bold text-red-700">
            Introdução à Segurança da Informação
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
                    className="text-3xl animate-pulse"
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
            className="text-red-500 hover:text-red-600 transition"
          >
            ChatGPT ❤️
          </a>
        </p>
        <p className="text-xs text-gray-500">Desenvolvido com React e Next.js</p>
      </footer>
    </div>
  );
}
