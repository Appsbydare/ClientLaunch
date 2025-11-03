import FadeIn from "@/components/animations/FadeIn";
import ScaleIn from "@/components/animations/ScaleIn";
import GradientText from "@/components/animations/GradientText";
import PlaceholderImage from "@/components/PlaceholderImage";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Insights, tips, and industry trends on web design, development, and digital strategy.",
};

export default function BlogPage() {
  const posts = [
    {
      title: "10 Web Design Trends Dominating 2025",
      excerpt: "Discover the latest design patterns, from immersive 3D to micro-interactions.",
      category: "Design",
      date: "Nov 1, 2025",
      readTime: "5 min read",
      image: "001-hero.svg",
    },
    {
      title: "Optimizing Core Web Vitals for Better SEO",
      excerpt: "How to achieve top Lighthouse scores and improve search rankings.",
      category: "Performance",
      date: "Oct 28, 2025",
      readTime: "7 min read",
      image: "002-secondary.svg",
    },
    {
      title: "Next.js vs. Remix: Which Framework in 2025?",
      excerpt: "A deep dive into the pros and cons of modern React frameworks.",
      category: "Development",
      date: "Oct 20, 2025",
      readTime: "10 min read",
      image: "001-hero.svg",
    },
    {
      title: "Building Accessible Web Apps: A Practical Guide",
      excerpt: "WCAG compliance and best practices for inclusive design.",
      category: "Accessibility",
      date: "Oct 15, 2025",
      readTime: "8 min read",
      image: "002-secondary.svg",
    },
  ];

  const categories = ["All", "Design", "Development", "Performance", "Accessibility"];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-12">
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                <GradientText>Blog</GradientText> & Insights
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Stay ahead with expert tips, trends, and tutorials.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    cat === "All"
                      ? "bg-primary text-white"
                      : "bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.map((post, index) => (
              <ScaleIn key={post.title} delay={index * 100}>
                <article className="group bg-white dark:bg-gray-800 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary hover:shadow-2xl transition-all overflow-hidden">
                  <PlaceholderImage
                    page="07-blog"
                    imageFile={post.image}
                    alt={post.title}
                    className="group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
                        {post.category}
                      </span>
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{post.excerpt}</p>

                    <Link
                      href={`/blog/${post.title.toLowerCase().replace(/\s+/g, "-")}`}
                      className="inline-flex items-center text-primary font-semibold hover:underline group"
                    >
                      Read More
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              </ScaleIn>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl mb-8 opacity-90">
              Get the latest insights delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="flex-grow px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-primary hover:bg-gray-100 font-bold rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
