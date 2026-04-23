const posts = [
  {
    slug: "educacao-financeira-nas-escolas",
    title: "Educação financeira nas escolas: por onde começar?",
  },
];

export default function BlogPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-10">Blog</h1>

      <div className="space-y-6">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block p-6 border rounded-lg hover:bg-gray-50"
          >
            <h2 className="font-semibold">{post.title}</h2>
          </a>
        ))}
      </div>
    </main>
  );
}