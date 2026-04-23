type Post = {
  title: string;
  description: string;
  content: string;
};

const posts: Record<string, Post> = {
  "educacao-financeira-nas-escolas": {
    title: "Educação financeira nas escolas: por onde começar?",
    description: "Um guia prático para professores iniciarem educação financeira em sala.",
    content: `
A educação financeira é uma habilidade essencial para a vida adulta.

No entanto, a maioria dos jovens sai da escola sem esse conhecimento...

## Por onde começar?

Comece com conceitos simples como:
- orçamento
- consumo consciente
- planejamento

## Aplicação prática

Traga exemplos da realidade dos alunos...
`,
  },
};

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = posts[params.slug];

  if (!post) {
    return <div className="p-10">Post não encontrado</div>;
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">

      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="text-gray-600 mb-6">{post.description}</p>

      <div className="text-sm text-gray-500 mb-10">
        Por Finanças na Escola • 2026
      </div>

      <article className="prose prose-lg">
        {post.content.split("\n").map((line, index) => {
          if (line.startsWith("## ")) {
            return (
              <h2 key={index}>
                {line.replace("## ", "")}
              </h2>
            );
          }

          if (line.startsWith("- ")) {
            return <li key={index}>{line.replace("- ", "")}</li>;
          }

          return <p key={index}>{line}</p>;
        })}
      </article>

      <div className="mt-16 p-6 bg-green-100 rounded-xl text-center">
        <p className="font-semibold mb-2">
          Gostou do conteúdo?
        </p>
        <p>
          Siga @financas.naescola para mais conteúdos práticos
        </p>
      </div>

    </main>
  );
}