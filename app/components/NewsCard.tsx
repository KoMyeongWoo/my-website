import { Article } from "@/lib/news";
import Image from "next/image";

export default function NewsCard({ article }: { article: Article }) {
  return (
    <article className="group cursor-pointer">
      <div className="overflow-hidden rounded-lg mb-3 bg-gray-100 aspect-video relative">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition duration-300"
          unoptimized
        />
      </div>
      <span className="text-xs font-bold text-red-600 uppercase tracking-wider">
        {article.category}
      </span>
      <h3 className="font-bold text-gray-900 mt-1 leading-snug group-hover:text-red-600 transition line-clamp-2">
        {article.title}
      </h3>
      <p className="text-sm text-gray-500 mt-1 line-clamp-2">{article.summary}</p>
      <p className="text-xs text-gray-400 mt-2">{article.time}</p>
    </article>
  );
}
