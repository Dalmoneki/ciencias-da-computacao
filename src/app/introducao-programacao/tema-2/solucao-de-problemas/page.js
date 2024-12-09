import Link from "next/link";

export default function Tema2Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-green-300 to-blue-500 p-6 flex flex-col justify-between relative">
      {/* Botão Voltar */}
      <Link href="/introducao-programacao">
        <button className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-3 py-1 rounded-lg shadow-md hover:bg-gray-300 transition">
          Voltar
        </button>
      </Link>

      <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">Tema 2: Introdução à Programação</h1>
        
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Itens Iniciais</h2>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Propósito</h3>
          <p className="text-gray-700 mb-4">
            Identificar os conceitos de <span className="underline cursor-help" title="Solução estruturada refere-se à abordagem sistemática de resolver problemas, organizando o processo em etapas lógicas para alcançar uma solução clara e eficiente.">solução estruturada</span> e <span className="underline cursor-help" title="Raciocínio lógico é a capacidade de analisar uma situação ou problema de forma crítica e sistemática para chegar a uma conclusão racional.">raciocínio lógico</span> que permitem modelar problemas e obter solução computacional através da linguagem de programação.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Preparação</h3>
          <p className="text-gray-700 mb-4">
            Antes de iniciar o conteúdo, tenha os softwares <a href="https://www.bizagi.com/en/platform/free-process-mapping"  rel="noopener noreferrer" className="text-blue-500 underline">Bizagi</a> e <a href="http://lite.acad.univali.br/portugol/"  rel="noopener noreferrer" className="text-blue-500 underline">Portugol Studio</a> instalados em seu computador.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Objetivos</h3>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Identificar o conceito de <span className="underline cursor-help" title="Solução estruturada refere-se à abordagem sistemática de resolver problemas, organizando o processo em etapas lógicas para alcançar uma solução clara e eficiente.">solução estruturada</span>, <span className="underline cursor-help" title="Raciocínio lógico é a capacidade de analisar uma situação ou problema de forma crítica e sistemática para chegar a uma conclusão racional.">raciocínio lógico</span> e <span className="underline cursor-help" title="Pensamento computacional envolve a resolução de problemas, o design de sistemas e a compreensão do comportamento humano, utilizando os conceitos fundamentais da ciência da computação.">pensamento computacional</span>.</li>
            <li>Distinguir o uso de algumas ferramentas para a representação de soluções.</li>
            <li>Reconhecer as aplicações do <span className="underline cursor-help" title="Pseudocódigo é uma representação simplificada de um algoritmo que utiliza uma mistura de linguagem natural e código de programação.">pseudocódigo</span> e da ferramenta Portugol Studio.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Introdução</h3>
          <p className="text-gray-700 mb-4">
            Caso você fosse questionado por um colega sobre como se abre uma porta, sua resposta seria algo parecido com “Segure a maçaneta, gire e puxe”. Logicamente, essa resposta é compreendida por quem perguntou, porque seu colega também é um ser humano!
          </p>
          <p className="text-gray-700 mb-4">
            Porém, ao tentar instruir um robô para executar esta tarefa, sua resposta não seria suficiente. O robô executa muito bem aquilo para o qual foi programado, mas não tem capacidade de compreender instruções vagas como “Segure a maçaneta, gire e puxe”.
          </p>
          <p className="text-gray-700 mb-4">
            Para que a tarefa fosse corretamente desempenhada pelo robô, seriam necessários muitos mais níveis de detalhamento e definição, como uma sequência de passos. Poderíamos pensar em algo como:
          </p>
          <ol className="list-decimal list-inside text-gray-700 mb-4">
            <li>Ande na direção da porta até que a distância seja igual a 30cm. Então, pare.</li>
            <li>Levante a mão direita até encostar em uma extremidade da <span className="underline cursor-help" title="Maçaneta é uma peça giratória que permite abrir e fechar uma porta.">maçaneta</span>.</li>
            <li>Verifique se esta é a extremidade livre da maçaneta. Se for, passe para o próximo passo. Se não for, percorra a maçaneta até encontrar a extremidade livre. Feche os dedos envolvendo a extremidade livre da maçaneta.</li>
            <li>Exerça uma força de 10N sobre a extremidade livre da maçaneta para baixo até que ela não gire mais. Então, pare de puxar para baixo, mas continue segurando-a. Coloque seu cotovelo direito para trás sem soltar a maçaneta.</li>
          </ol>
          <p className="text-gray-700 mb-4">
            Observou como pode ser complexo dar instruções ao computador? É sobre a solução desse tipo de problema que vamos falar a partir de agora.
          </p>
        </section>
      </div>

      {/* Botão Acessar Conteúdo */}
      <div className="flex justify-end p-6">
        <Link href="/introducao-programacao/tema-2/solucao-de-problemas/acessar-conteudo">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-700 transition">
            Acessar conteúdo
          </button>
        </Link>
      </div>

      {/* Rodapé */}
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