"use client";

import { useState, useMemo } from "react";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import { NewsCard } from "@/components/sections/NewsCard";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import { Search, Calendar, Clock, Archive, ChevronDown } from "lucide-react";

interface NewsContentProps {
  initialNews: SanityDocument[];
}

type TimeFilter = "today" | "week" | "month" | "all";

interface GroupedNews {
  [date: string]: SanityDocument[];
}

const TIME_FILTERS = [
  { id: "today" as TimeFilter, label: "Hoy", icon: Clock },
  { id: "week" as TimeFilter, label: "Esta semana", icon: Calendar },
  { id: "month" as TimeFilter, label: "Este mes", icon: Calendar },
  { id: "all" as TimeFilter, label: "Archivo", icon: Archive },
];

export function NewsContent({ initialNews }: NewsContentProps) {
  const [news, setNews] = useState<SanityDocument[]>(initialNews);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<TimeFilter>("week");
  const [showOlderNews, setShowOlderNews] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Filter news by time period
  const getDateFilter = (filter: TimeFilter) => {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    switch (filter) {
      case "today":
        return (date: Date) => date >= today;
      case "week":
        const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        return (date: Date) => date >= weekAgo;
      case "month":
        const monthAgo = new Date(today.getTime() - 30 * 24 * 60 * 60 * 1000);
        return (date: Date) => date >= monthAgo;
      case "all":
        return () => true;
      default:
        return () => true;
    }
  };

  // Filter and search news
  const filteredNews = useMemo(() => {
    let filtered = news;

    // Apply search filter
    if (searchTerm.trim()) {
      filtered = filtered.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    // Apply time filter
    const dateFilter = getDateFilter(activeFilter);
    filtered = filtered.filter((item) => {
      const itemDate = new Date(item.publishedAt);
      return dateFilter(itemDate);
    });

    return filtered;
  }, [news, searchTerm, activeFilter]);

  // Group news by date
  const groupedNews: GroupedNews = useMemo(() => {
    const limited = showOlderNews ? filteredNews : filteredNews.slice(0, 15);

    return limited.reduce((acc, item) => {
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
  }, [filteredNews, showOlderNews]);

  // Load more news from Sanity
  const loadMoreNews = async () => {
    setIsLoading(true);
    try {
      const lastNewsDate = news[news.length - 1]?.publishedAt;
      const moreNewsQuery = `*[
        _type == "news"
        && defined(slug.current)
        && dateTime(publishedAt) < dateTime("${new Date(
          lastNewsDate,
        ).toISOString()}")
      ]|order(publishedAt desc)[0...20]{_id, title, slug, publishedAt, image, source}`;

      const moreNews = await client.fetch<SanityDocument[]>(moreNewsQuery);
      setNews((prev) => [...prev, ...moreNews]);
    } catch (error) {
      console.error("Error loading more news:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const hasMoreNews = filteredNews.length > 15 && !showOlderNews;
  const isArchiveView = activeFilter === "all";

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar noticias por título..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none"
          />
        </div>
      </div>

      {/* Time Filter Tabs */}
      <div className="bg-white rounded-lg shadow-sm border">
        <div className="flex overflow-x-auto scrollbar-hide">
          {TIME_FILTERS.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => {
                  setActiveFilter(filter.id);
                  setShowOlderNews(false);
                }}
                className={`flex items-center gap-2 px-6 py-4 whitespace-nowrap border-b-2 transition-colors ${
                  activeFilter === filter.id
                    ? "border-emerald-500 text-emerald-600 bg-emerald-50"
                    : "border-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                }`}>
                <Icon className="w-4 h-4" />
                <span className="font-medium">{filter.label}</span>
                {filter.id !== "all" && (
                  <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                    {
                      news.filter((item) =>
                        getDateFilter(filter.id)(new Date(item.publishedAt)),
                      ).length
                    }
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Summary */}
      {searchTerm && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-emerald-700">
            {filteredNews.length} resultado
            {filteredNews.length !== 1 ? "s" : ""} encontrado
            {filteredNews.length !== 1 ? "s" : ""} para &ldquo;{searchTerm}
            &rdquo;
          </p>
        </div>
      )}

      {/* News Groups */}
      <div className="space-y-6">
        {Object.entries(groupedNews).map(([date, newsItems]) => (
          <div key={date} className="bg-white rounded-lg shadow-sm border">
            <div className="bg-emerald-50 px-6 py-4 border-b">
              <h2 className="text-xl font-semibold text-emerald-800 capitalize">
                {date}
                <span className="ml-3 text-sm font-normal text-emerald-600">
                  {newsItems.length} noticia{newsItems.length !== 1 ? "s" : ""}
                </span>
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

      {/* Load More Section */}
      {hasMoreNews && (
        <div className="text-center py-6">
          <button
            onClick={() => setShowOlderNews(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors">
            <ChevronDown className="w-4 h-4" />
            Ver noticias anteriores ({filteredNews.length - 15} más)
          </button>
        </div>
      )}

      {/* Load More from Server */}
      {isArchiveView && showOlderNews && (
        <div className="text-center py-6">
          <button
            onClick={loadMoreNews}
            disabled={isLoading}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            {isLoading ? (
              <LoadingSpinner size="sm" />
            ) : (
              <Archive className="w-4 h-4" />
            )}
            {isLoading ? "Cargando..." : "Cargar más noticias"}
          </button>
        </div>
      )}

      {/* Empty State */}
      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <div className="bg-white rounded-lg shadow-sm border p-8">
            {searchTerm ? (
              <>
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg mb-2">
                  No se encontraron noticias
                </p>
                <p className="text-gray-400">
                  Intenta con otros términos de búsqueda o cambia el filtro de
                  tiempo
                </p>
              </>
            ) : (
              <>
                <Calendar className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg mb-2">
                  No hay noticias para este período
                </p>
                <p className="text-gray-400">
                  Selecciona un rango de tiempo diferente
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
