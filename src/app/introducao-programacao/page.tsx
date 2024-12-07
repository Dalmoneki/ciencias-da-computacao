import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode, faPuzzlePiece, faCubes, faCodeBranch, faSync, faCalculator, faLayerGroup, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function IntroducaoProgramacao() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-400 p-8">
      {/* Botão de Voltar */}
      <Link
        href="/"
        className="absolute top-4 left-4 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
        aria-label="Voltar para a página inicial"
      >
        <FontAwesomeIcon icon={faLaptopCode} className="w-6 h-6 text-indigo-600" />
      </Link>

      {/* Título Principal */}
      <h1 className="text-5xl font-bold mb-8 text-white drop-shadow-lg">Introdução à Programação</h1>
      <p className="mb-12 text-center text-white text-lg max-w-2xl">
        Explore os fundamentos e os conceitos iniciais da programação de maneira divertida e interativa.
      </p>

      {/* Grid de Botões */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {topics.map((topic, index) => (
          <Link
            key={index}
            href={topic.href}
            className="group bg-white bg-opacity-80 p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300 flex flex-col items-center"
            aria-label={`Tema ${index + 1}: ${topic.title}`}
          >
            <div className="w-16 h-16 mb-4 flex items-center justify-center bg-indigo-100 rounded-full shadow-sm transform transition-transform duration-300 group-hover:rotate-3">
              <FontAwesomeIcon icon={topic.icon} className="text-indigo-600 text-3xl" />
            </div>
            <h2 className="text-xl font-semibold text-indigo-900 group-hover:text-indigo-700 transition-colors duration-300">
              {topic.title}
            </h2>
            <p className="text-gray-700 text-center mt-2">{topic.description}</p>
          </Link>
        ))}
      </div>

      {/* Rodapé */}
      <footer className="mt-12 text-center text-gray-300">
        <p className="text-sm">
          Feito com carinho por{" "}
          <span className="font-bold text-white">Dalmoneki</span> e{" "}
          <a
            href="https://openai.com/chatgpt"
            
            rel="noopener noreferrer"
            className="text-white hover:text-yellow-300 transition-colors"
          >
            ChatGPT
          </a>{" "}
          <span className="animate-pulse text-red-500">❤️</span>
        </p>
        <p className="text-xs mt-1">Desenvolvido com Next.js e FontAwesome</p>
      </footer>
    </div>
  );
}

const topics = [
  {
    href: "/introducao-programacao/introducao",
    icon: faLaptopCode,
    title: "Tema 1: Introdução",
    description: "Descubra os conceitos básicos de programação."
  },
  {
    href: "/introducao-programacao/tema-2",
    icon: faPuzzlePiece,
    title: "Tema 2: Solução de Problemas",
    description: "Habilidades para resolver problemas computacionais."
  },
  {
    href: "/introducao-programacao/tema-3",
    icon: faCubes,
    title: "Tema 3: Variáveis e Tipos",
    description: "Como utilizar variáveis e tipos de dados."
  },
  {
    href: "/introducao-programacao/tema-4",
    icon: faCodeBranch,
    title: "Tema 4: Estruturas Condicionais",
    description: "Decisões na programação."
  },
  {
    href: "/introducao-programacao/tema-5",
    icon: faSync,
    title: "Tema 5: Laços de Repetição",
    description: "Automatize processos com estruturas de repetição."
  },
  {
    href: "/introducao-programacao/tema-6",
    icon: faCalculator,
    title: "Tema 6: Funções",
    description: "Organize seu código com funções reutilizáveis."
  },
  {
    href: "/introducao-programacao/tema-7",
    icon: faLayerGroup,
    title: "Tema 7: Arrays e Matrizes",
    description: "Coleções de dados eficientes."
  },
  {
    href: "/introducao-programacao/tema-8",
    icon: faCheck,
    title: "Tema 8: Conclusão",
    description: "Revise os principais conceitos aprendidos."
  }
];