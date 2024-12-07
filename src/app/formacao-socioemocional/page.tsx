import Link from 'next/link';

export default function FormacaoSocioemocional() {
  const competencias = [
    {
      title: "Autogestão",
      description: "Controle suas emoções para superar adversidades.",
      icon: "💖",
      route: "/formacao-socioemocional/autogestao",
    },
    {
      title: "Autoconhecimento",
      description: "Descubra seus objetivos e cresça pessoalmente.",
      icon: "🧠",
      route: "/formacao-socioemocional/autoconhecimento",
    },
    {
      title: "Empatia",
      description: "Compreenda as emoções dos outros.",
      icon: "🤝",
      route: "/formacao-socioemocional/empatia",
    },
    {
      title: "Relacionamento Interpessoal",
      description: "Construa relações significativas e saudáveis.",
      icon: "💬",
      route: "/formacao-socioemocional/relacionamento",
    },
    {
      title: "Criatividade",
      description: "Gere soluções originais e eficazes.",
      icon: "✨",
      route: "/formacao-socioemocional/criatividade",
    },
    {
      title: "Produtividade",
      description: "Otimize seu tempo e alcance o equilíbrio.",
      icon: "⚡",
      route: "/formacao-socioemocional/produtividade",
    },
    {
      title: "Inteligência Emocional",
      description: "Gerencie suas emoções de forma equilibrada.",
      icon: "🧘",
      route: "/formacao-socioemocional/inteligencia-emocional",
    },
    {
      title: "Persuasão e Negociação",
      description: "Comunique-se de forma assertiva e eficaz.",
      icon: "🎯",
      route: "/formacao-socioemocional/persuasao",
    },
    {
      title: "Pensamento Crítico",
      description: "Tome decisões lógicas e informadas.",
      icon: "🕵️",
      route: "/formacao-socioemocional/pensamento-critico",
    },
    {
      title: "Resolução de Problemas",
      description: "Enfrente desafios de forma inovadora.",
      icon: "🛠️",
      route: "/formacao-socioemocional/resolucao-problemas",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-purple-200 via-pink-200 to-orange-100">
      <header className="py-6 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Link href="/" className="text-purple-600 hover:text-purple-800 transition text-lg">
            ← Voltar
          </Link>
          <h1 className="text-3xl font-bold text-purple-700">
            Formação Socioemocional
          </h1>
        </div>
      </header>

      <main className="flex-grow px-4 pb-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {competencias.map((comp, index) => (
              <Link
                key={index}
                href={comp.route}
                className="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-between hover:shadow-xl transition transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className="text-4xl animate-pulse">{comp.icon}</div>
                  <h2 className="text-lg font-bold text-gray-800">
                    {comp.title}
                  </h2>
                </div>
                <p className="text-sm text-gray-600 mt-2">{comp.description}</p>
                <div className="text-purple-600 text-lg mt-4">→</div>
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
