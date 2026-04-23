'use client';

const posts = [
  {
    slug: "educacao-financeira-nas-escolas",
    title: "Educação financeira nas escolas: por onde começar?",
  },
  {
    slug: 'como-ensinar-orcamento-pessoal-para-alunos',
    title: 'Como ensinar orçamento pessoal para alunos'
  }
];

export default function BlogPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-3xl font-bold">Blog</h1>
        <p className="mt-2">Conteúdos sobre educação financeira</p>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="space-y-6">
          {posts.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block p-6 border rounded-xl hover:bg-gray-50 transition"
            >
              <h2 className="text-xl font-semibold text-blue-900">
                {post.title}
              </h2>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
