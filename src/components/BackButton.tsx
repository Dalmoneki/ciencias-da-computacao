"use client"; // Certifique-se de que o componente é um Client Component

import { ArrowLeft } from "lucide-react";

export function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="flex items-center text-blue-600 hover:text-blue-700 transition-colors"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      <span>Voltar</span>
    </button>
  );
}
