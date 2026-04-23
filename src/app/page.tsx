'use client';
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="text-center py-20 px-6 bg-blue-900 text-white">
        <h1 className="text-4xl font-bold mb-4">Finanças na Escola</h1>
        <p className="text-lg mb-6">
          Educação financeira prática para sala de aula brasileira
        </p>
        <button
          type="button"
          className="bg-green-500 px-6 py-3 rounded-lg font-semibold"
        >
          Ver conteúdos
        </button>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-6">O problema é real</h2>
        <p className="text-lg">
          A maioria dos jovens sai da escola sem saber controlar dinheiro,
          evitar dívidas ou planejar o próprio futuro.
        </p>
      </section>

      <section className="py-16 px-6 bg-gray-100">
        <h2 className="text-2xl font-bold text-center mb-10">
          O que você encontra aqui
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">Planos de Aula</h3>
            <p>Conteúdos prontos para aplicar em sala</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">Atividades Práticas</h3>
            <p>Exercícios que conectam com a realidade</p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <h3 className="font-semibold mb-2">Educação Simples</h3>
            <p>Explicações claras e sem economês</p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">Conteúdos recentes</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href="/blog/educacao-financeira-nas-escolas"
            className="block p-6 border rounded-lg hover:bg-gray-50"
          >
            <h3 className="font-semibold">
              Educação financeira nas escolas: por onde começar?
            </h3>
          </Link>

          <div className="p-6 border rounded-lg">
            <h3 className="font-semibold">
              Como ensinar orçamento pessoal para alunos
            </h3>
          </div>
        </div>
      </section>

      <section className="py-20 text-center bg-green-600 text-white">
        <h2 className="text-2xl font-bold mb-4">
          Educação financeira é essencial
        </h2>
        <p className="mb-6">Comece a aplicar isso na sua sala de aula hoje</p>
      </section>
    </main>
  );
}
