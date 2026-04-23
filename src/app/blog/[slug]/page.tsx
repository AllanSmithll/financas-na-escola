'use client';

import { use } from "react";

import Post1 from "@/content/blog/educacao-financeira-nas-escolas.mdx";
import Post2 from "@/content/blog/como-ensinar-orcamento-pessoal-para-alunos.mdx";

const posts = {
  "educacao-financeira-nas-escolas": Post1,
  "como-ensinar-orcamento-pessoal-para-alunos": Post2,
};

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const Post = posts[slug as keyof typeof posts];

  if (!Post) {
    return <div className="p-10">Post não encontrado</div>;
  }

  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section className="max-w-3xl mx-auto px-6 py-16 bg-white">
        <article className="max-w-none mx-auto text-gray-800 leading-relaxed text-lg">
          <div className="space-y-6">
            <Post />
          </div>
        </article>
      </section>
    </main>
  );
}