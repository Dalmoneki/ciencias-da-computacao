import Link from "next/link";

export default function SolucaoEstruturadaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex flex-col items-center">
      <div className="max-w-3xl w-full bg-white shadow-xl mt-12 rounded-lg overflow-hidden">
        <div className="bg-white p-4 rounded-t-lg flex items-center justify-between shadow-md">
          <Link href="/introducao-programacao">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-500 transition">
              Voltar
            </button>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">
            Tema 2: Introdução à Programação
          </h1>
        </div>

        {/* Espaço para conteúdo principal */}

        <footer className="bg-gray-800 py-4 flex justify-between items-center text-white w-full px-8">
          <Link href="/introducao-programacao/tema-2/solucao-de-problemas/acessar-conteudo">
            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-full hover:bg-blue-700 transition">
              Acessar conteúdo
            </button>
          </Link>
          <Link href="/introducao-programacao/tema-2/solucao-de-problemas/acessar-conteudo/solucao-estruturada/raciocinio-logico">
            <button className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition">
              Avançar
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
}