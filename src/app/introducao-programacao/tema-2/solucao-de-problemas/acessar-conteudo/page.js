"use client";

import { useRouter } from 'next/navigation';

export default function SolucaoDeProblemasPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <header className="bg-blue-700 text-white flex items-center justify-between py-4 px-6">
          <button
            onClick={() => router.back()}
            className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Voltar
          </button>
          <h1 className="text-2xl font-bold flex-1 text-center">
            Tema 2: Solução de Problemas e Pensamento Computacional
          </h1>
        </header>

        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">1. Conceitos de Solução Estruturada</h2>

          <h3 className="text-xl font-semibold text-gray-800 mb-4">Solução Estruturada</h3>
          <p className="text-gray-700 mb-6">
            Neste vídeo, vamos explorar a poderosa combinação entre a abordagem estruturada na programação e o raciocínio lógico. Aprenderemos como a solução estruturada nos auxilia a resolver problemas de maneira organizada e eficiente, enquanto o raciocínio lógico nos capacita a tomar decisões com base em condições e regras.
          </p>

          <div className="mb-8">
            <iframe
              className="w-full h-64 rounded-lg shadow-md"
              src="https://www.youtube.com/embed/8mei6uVttho"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <p className="text-gray-700 mb-6">
            O computador não tem discernimento para julgar culturalmente se algo é certo ou errado. No entanto, ele pode ser instruído para tomar decisões lógicas, baseadas em critérios objetivos, e seguir instruções ordenadas. A isso, chamamos <strong>solução estruturada</strong>.
          </p>

          <div className="bg-blue-100 p-6 rounded-lg mb-6 shadow-inner">
            <h4 className="font-semibold text-blue-800">Comentário</h4>
            <p className="text-gray-700">
              Embora possa parecer mais complexo dar instruções de forma estruturada a um computador, é uma questão de prática para que você desenvolva esta habilidade. Além disso, existem diversas vantagens em instruir computadores a executar tarefas: eles não se cansam, não precisam parar para beber água, executam cálculos matemáticos muito mais rápido que seres humanos etc.
            </p>
          </div>

          <p className="text-gray-700 mb-6">
            Propor uma solução estruturada para um problema consiste em elaborar uma sequência de passos a serem adotados, de modo que, ao seguir esta sequência, exista uma resposta coerente para este problema.
          </p>

          <p className="text-gray-700">
            Já que os computadores podem seguir instruções adequadamente programadas para realizar certas tarefas, podemos concluir que eles têm comportamento previsível. Este fato nos permite prever o que o programa produzido fará ao ser executado, caso tenhamos acesso ao conjunto de instruções que o gerou.
          </p>
        </div>

        <footer className="py-4 px-6 flex justify-between items-center text-white bg-gray-800">
          <p className="text-sm">
            Feito com carinho por Dalmoneki e{" "}
            <span className="font-semibold">ChatGPT ❤️</span>
          </p>
          <button
            onClick={() => router.push('/introducao-programacao/tema-2/solucao-de-problemas/acessar-conteudo/solucao-estruturada')}
            className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Acessar Conteúdo
          </button>
        </footer>
      </div>
    </div>
  );
}