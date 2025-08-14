"use client";

import { type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

interface NewsCardProps {
  news: SanityDocument;
}

export function NewsCard({ news }: NewsCardProps) {
  const imageUrl = news.image
    ? urlFor(news.image)?.width(200).height(120).url()
    : null;

  const handleClick = () => {
    window.open(news.source, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      onClick={handleClick}
      className="flex flex-col md:flex-row gap-3 md:gap-4 p-4 border border-gray-200 rounded-lg hover:shadow-md hover:border-emerald-300 transition-all duration-200 cursor-pointer group bg-white">
      {/* Image */}
      <div className="flex-shrink-0 w-full md:w-auto">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={news.title}
            className="w-full h-40 md:w-48 md:h-28 object-cover rounded-lg"
            width={200}
            height={120}
            sizes="(max-width: 768px) 100vw, 200px"
          />
        ) : (
          <div className="w-full h-40 md:w-48 md:h-28 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-sm">Sin imagen</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col justify-center mt-3 md:mt-0">
        <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-700 transition-colors md:line-clamp-2 mb-2 whitespace-normal break-words">
          {news.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>
            {new Date(news.publishedAt).toLocaleTimeString("es-ES", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          <ExternalLink className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
