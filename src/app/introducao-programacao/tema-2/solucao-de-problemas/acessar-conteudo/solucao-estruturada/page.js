import Link from "next/link";

export default function RaciocinioLogicoPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg overflow-hidden">
        <div className="bg-blue-900 p-6 text-white flex justify-between items-center">
          <Link href="/introducao-programacao/tema-2/solucao-de-problemas/acessar-conteudo/solucao-estruturada">
            <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-500 transition transform hover:translate-y-1">
              Voltar
            </button>
          </Link>
          <h1 className="text-2xl font-bold mx-auto">
            1. Conceitos de solução estruturada
          </h1>
          <div className="w-24"></div>
        </div>

        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900">Raciocínio Lógico</h2>
          <p className="text-gray-800 text-lg mt-4">
            Ao longo da vida acadêmica de um aluno, ao passar pelo ensino fundamental e ensino médio, é comum que ele se veja tentando reconhecer padrões em boa parte do tempo. Aprende-se a resolução de exercícios de Ciências Exatas, por exemplo, a partir da repetição de alguns passos a problemas similares. Isto é, ao se deparar com um problema de determinado tipo, o aluno reconhece que este obstáculo, para o qual ele já tem uma solução, encaixa-se em determinado <strong>padrão</strong>. Observe a sequência a seguir:
          </p>

          <div className="flex justify-center mt-6 space-x-4">
            {[
              { num: "02", color: "bg-gradient-to-r from-orange-400 to-yellow-500" },
              { num: "04", color: "bg-gradient-to-r from-red-400 to-pink-500" },
              { num: "06", color: "bg-gradient-to-r from-purple-400 to-pink-500" },
              { num: "08", color: "bg-gradient-to-r from-blue-400 to-indigo-500" },
              { num: "10", color: "bg-gradient-to-r from-green-400 to-lime-500" },
              { num: "?", color: "bg-gradient-to-r from-gray-400 to-gray-500" }
            ].map((item, index) => (
              <div
                key={index}
                className={`w-16 h-16 flex items-center justify-center rounded-full text-black font-bold text-lg border-4 ${item.color}`}
                style={{
                  backgroundColor: 'white',
                  borderWidth: '8px',
                  borderColor: 'transparent',
                  backgroundClip: 'padding-box'
                }}
              >
                {item.num}
              </div>
            ))}
          </div>

          <p className="text-gray-800 text-lg mt-4">
            O próximo termo é (12), já que essa sequência tem como regra listar os números pares. Vamos agora treinar um pouco mais as suas habilidades para o reconhecimento de padrões e estimular seu raciocínio matemático. Vejamos:
          </p>

          <div className="mt-6 p-6 bg-blue-100 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-blue-900">Exemplo</h3>
            <p className="text-blue-900 mt-2">
              Na sequência de números ímpares: 1, 3, 5, 7, 9, ...
              <br />
              O próximo número seria: 11.
            </p>
            <p className="text-blue-900 mt-2">
              Na sequência de números: 1, 6, 12, 19, 27, ...
              <br />
              Repare que a diferença entre dois elementos sempre aumenta uma unidade a cada par. O primeiro par (1 e 6) tem diferença 5. O próximo par (6 e 12) tem diferença 6. Como o par (19 e 27) tem diferença 8, a próxima diferença seria 9. Assim, 27 + 9 = 36.
            </p>
          </div>

          <div className="mt-8">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/KrMQvt5re5M"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <footer className="bg-gray-900 py-4 flex justify-between items-center text-white px-6">
          <p className="text-sm mx-auto">
            Feito com carinho por Dalmoneki e{" "}
            <span className="font-semibold text-pink-500">ChatGPT ❤️</span>
          </p>
          <Link href="/introducao-programacao/tema-2/solucao-de-problemas/acessar-conteudo/solucao-estruturada/raciocinio-logico/proxima-pagina">
            <button className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-500 transition transform hover:translate-y-1">
              Avançar
            </button>
          </Link>
        </footer>
      </div>
    </div>
  );
}