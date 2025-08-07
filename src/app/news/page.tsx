import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { NewsCard } from "@/components/sections/NewsCard";
import { NewsHeader } from "@/components/layout/NewsHeader";

const NEWS_QUERY = `*[
  _type == "news"
  && defined(slug.current)
]|order(publishedAt desc){_id, title, slug, publishedAt, image, source}`;

const options = { next: { revalidate: 30 } };

interface GroupedNews {
  [date: string]: SanityDocument[];
}

export default async function NewsPage() {
  const news = await client.fetch<SanityDocument[]>(NEWS_QUERY, {}, options);

  // Group news by date
  const groupedNews: GroupedNews = news.reduce((acc, item) => {
    const date = new Date(item.publishedAt).toLocaleDateString("es-ES", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(item);
    return acc;
  }, {} as GroupedNews);

  return (
    <div className="min-h-screen bg-gray-50">
      <NewsHeader />

      {/* Top navbar */}
      <div className="bg-white shadow-sm border-b mt-16">
        <div className="container mx-auto px-4 lg:px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Inteligencia Artificial - Últimas Noticias
          </h2>
        </div>
      </div>

      <main className="container mx-auto px-4 lg:px-6 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Noticias</h1>

        <div className="space-y-8">
          {Object.entries(groupedNews).map(([date, newsItems]) => (
            <div key={date} className="bg-white rounded-lg shadow-sm border">
              <div className="bg-emerald-50 px-6 py-4 border-b">
                <h2 className="text-xl font-semibold text-emerald-800 capitalize">
                  {date}
                </h2>
              </div>

              <div className="p-6 space-y-4">
                {newsItems.map((item) => (
                  <NewsCard key={item._id} news={item} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {news.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No hay noticias disponibles en este momento.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
