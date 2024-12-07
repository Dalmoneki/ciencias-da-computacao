"use client";

import Link from "next/link";

export default function Home() {
  const topics = [
    { title: "Introdução à Programação de Computadores", route: "/introducao-programacao", icon: "💻" },
    { title: "Arquitetura de Computadores", route: "/arquitetura", icon: "🖥️" },
    { title: "Fundamentos de Redes de Computadores", route: "/redes", icon: "🌐" },
    { title: "Introdução à Segurança da Informação", route: "/seguranca", icon: "🔒" },
    { title: "Sistemas de Informação e Sociedade", route: "/sistemas-informacao", icon: "🌍" },
    { title: "Formação Socioemocional", route: "/formacao-socioemocional", icon: "🤝" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-purple-100 via-purple-200 to-purple-300">
      <header className="py-8 text-center">
        <h1 className="text-5xl font-bold text-purple-800">Ciências da Computação</h1>
        <p className="text-lg text-purple-600 mt-2">
          Explore os principais tópicos e aprenda com diversão e interatividade.
        </p>
      </header>

      <main className="flex-grow flex items-center justify-center">
        <div className="grid grid-cols-2 gap-6 w-full max-w-4xl px-4">
          {topics.map((topic, index) => (
            <Link
              key={index}
              href={topic.route}
              className="flex items-center gap-4 p-6 bg-gradient-to-r from-pink-200 to-purple-200 rounded-lg shadow-md hover:scale-105 transition-transform"
            >
              <span className="text-4xl">{topic.icon}</span>
              <span className="text-lg font-semibold text-purple-800">{topic.title}</span>
            </Link>
          ))}
        </div>
      </main>

      <footer className="py-6 text-center text-purple-600">
        <p className="text-sm">
          Feito por Dalmoneki e{" "}
          <span className="text-purple-800 font-semibold">ChatGPT ❤️</span>
        </p>
        <p className="text-xs">Desenvolvido com React e Next.js</p>
      </footer>
    </div>
  );
}
