import Link from "next/link";

export default function Tema2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 to-blue-500 p-6 flex flex-col justify-between relative">
      <Link href="/introducao-programacao">
        <button className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-3 py-1 rounded-lg shadow-md hover:bg-gray-300 transition">
          Voltar
        </button>
      </Link>

      <div className="text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Tema 2: Introdução à Programação</h1>
        <div className="flex justify-center space-x-4 mt-4">
          <Link href="/introducao-programacao/tema-2/solucao-de-problemas">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition">
              Solução de Problemas e Pensamento Computacional
            </button>
          </Link>
          <Link href="/introducao-programacao/tema-2/exercicios">
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition">
              Exercícios
            </button>
          </Link>
        </div>
      </div>

      <footer className="py-6 text-center text-white">
        <p className="text-sm">
          Feito com carinho por Dalmoneki e{" "}
          <span className="font-semibold">ChatGPT ❤️</span>
        </p>
        <p className="text-xs">Desenvolvido com Next.js e FontAwesome</p>
      </footer>
    </div>
  );
}