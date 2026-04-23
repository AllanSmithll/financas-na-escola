"use client";
import Post from "@/content/blog/educacao-financeira-nas-escolas.mdx";

export default function Page() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section className="bg-blue-900 text-white py-16 px-6 text-center">
        <h1 className="text-3xl font-bold">
          Educação financeira nas escolas: por onde começar?
        </h1>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-16 bg-white">
        <article
          className="prose prose-lg max-w-none
          prose-headings:text-blue-900
          prose-h2:text-blue-800
          prose-p:text-gray-700
          prose-li:marker:text-green-600
          prose-strong:text-gray-900
        "
        >
          <Post />
        </article>
      </section>
    </main>
  );
}
