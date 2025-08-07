import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { NewsHeader } from "@/components/layout/NewsHeader";
import { NewsContent } from "@/components/sections/NewsContent";

// Optimized query to get initial news (last 30 days for better performance)
const INITIAL_NEWS_QUERY = `*[
  _type == "news"
  && defined(slug.current)
  && dateTime(publishedAt) > dateTime(now()) - 60*60*24*30
]|order(publishedAt desc)[0...50]{_id, title, slug, publishedAt, image, source}`;

const options = { next: { revalidate: 300 } }; // 5 minutes cache for better performance

export default async function NewsPage() {
  // Try optimized query first, fall back to all news if empty
  let news = await client.fetch<SanityDocument[]>(
    INITIAL_NEWS_QUERY,
    {},
    options,
  );

  // Fallback to all news if no recent news found
  if (news.length === 0) {
    const FALLBACK_QUERY = `*[
      _type == "news"
      && defined(slug.current)
    ]|order(publishedAt desc)[0...50]{_id, title, slug, publishedAt, image, source}`;

    news = await client.fetch<SanityDocument[]>(FALLBACK_QUERY, {}, options);
  }

  console.log("Fetched news:", news.length, "items");

  return (
    <div className="min-h-screen bg-gray-50">
      <NewsHeader />

      <main className="container mx-auto px-4 lg:px-6 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Noticias</h1>

        <NewsContent initialNews={news} />
      </main>
    </div>
  );
}
