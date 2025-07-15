import Link from "next/link";
import { getAllBlogPosts } from "@/data/blogPosts";

function BlogCard({ post, isLarge = false }) {
  if (isLarge) {
    return (
      <Link href={`/blog/${post.id}`} className="group block col-span-2">
        <article className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 aspect-[4/3] lg:aspect-auto bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-600 relative">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-semibold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-white text-sm font-medium bg-emerald-500/80 backdrop-blur-sm px-4 py-2 rounded-full">
                  {post.readTime}
                </span>
              </div>
            </div>
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 leading-tight">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                    {post.author.charAt(0)}
                  </div>
                  <span className="font-semibold text-gray-700 dark:text-gray-300">
                    {post.author}
                  </span>
                </div>
                <span className="text-gray-400">•</span>
                <time className="text-sm">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>
          </div>
        </article>
      </Link>
    );
  }

  return (
    <Link href={`/blog/${post.id}`} className="group block">
      <article className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-gray-700 h-full">
        <div className="aspect-[16/10] bg-gradient-to-br from-emerald-400 to-teal-600 relative">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="text-white text-xs font-semibold bg-emerald-500/80 backdrop-blur-sm px-3 py-1 rounded-full">
              {post.readTime}
            </span>
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="p-6">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors duration-300 line-clamp-2 leading-tight">
            {post.title}
          </h3>

          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3 text-sm leading-relaxed">
            {post.excerpt}
          </p>

          <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center text-white font-semibold text-xs">
                {post.author.charAt(0)}
              </div>
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {post.author}
              </span>
            </div>
            <span>•</span>
            <time>
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
              })}
            </time>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default function Home() {
  const posts = getAllBlogPosts();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-emerald-50 dark:from-gray-900 dark:via-gray-900 dark:to-emerald-950">
      {/* Hero Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <h1 className="text-2xl font-bold text-white">
                  Next.js Insights
                </h1>
              </div>
              <div className="hidden md:flex items-center gap-6 text-white/90">
                <a
                  href="#latest"
                  className="hover:text-white transition-colors"
                >
                  Latest
                </a>
                <a
                  href="#tutorials"
                  className="hover:text-white transition-colors"
                >
                  Tutorials
                </a>
                <a
                  href="#guides"
                  className="hover:text-white transition-colors"
                >
                  Guides
                </a>
              </div>
            </div>
          </nav>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Master Next.js
                <span className="block text-3xl md:text-5xl text-emerald-200 mt-2">
                  Build the Future
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-emerald-100 max-w-3xl mx-auto leading-relaxed">
                Discover advanced techniques, best practices, and cutting-edge
                patterns for modern React development with Next.js
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#featured"
                  className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg"
                >
                  Explore Articles
                </a>
                <a
                  href="#latest"
                  className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
                >
                  Latest Posts
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-300/20 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-teal-300/20 rounded-full blur-lg"></div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Section */}
        {posts.length > 0 && (
          <section id="featured" className="mb-20">
            <div className="flex items-center gap-4 mb-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                Featured Article
              </h2>
              <div className="h-px bg-gradient-to-r from-emerald-500 to-transparent flex-1"></div>
            </div>
            <BlogCard post={posts[0]} isLarge={true} />
          </section>
        )}

        {/* Latest Posts */}
        <section id="latest" className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Latest Insights
            </h2>
            <div className="h-px bg-gradient-to-r from-emerald-500 to-transparent flex-1"></div>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold">
              View All
            </span>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.slice(1).map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-3xl p-8 md:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Stay Updated</h3>
          <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
            Get the latest Next.js insights, tutorials, and best practices
            delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full text-gray-900 bg-white/95 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-white/30"
            />
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold hover:bg-emerald-50 transition-all duration-300 shadow-lg">
              Subscribe
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <h3 className="text-2xl font-bold">Next.js Insights</h3>
              </div>
              <p className="text-gray-400 max-w-md leading-relaxed">
                Your premier destination for Next.js expertise, React patterns,
                and modern web development insights.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-gray-400">
                <a
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Latest Posts
                </a>
                <a
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Tutorials
                </a>
                <a
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Guides
                </a>
                <a
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  About
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="space-y-2 text-gray-400">
                <a
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href="#"
                  className="block hover:text-emerald-400 transition-colors"
                >
                  Newsletter
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>
              &copy; 2025 Next.js Insights. Built with Next.js 15 and Tailwind
              CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
