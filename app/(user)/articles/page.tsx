"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { FaMagnifyingGlass, FaNewspaper } from "react-icons/fa6";
import { getPublicArticles } from "@/app/admin/lib/api";
import type { Article } from "@/app/types/article";

const LIMIT = 9;

function ArticleCard({ article }: { article: Article }) {
  const bannerSrc = article.bannerImage;
  const excerpt = article.excerpt
    ? article.excerpt.length > 120
      ? article.excerpt.slice(0, 120) + "..."
      : article.excerpt
    : null;

  const createdDate = new Date(article.createdDate).toLocaleDateString(
    "th-TH",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <Link href={`/articles/${article.id}`} className="article-card">
      <div className="article-card-image">
        {bannerSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={bannerSrc} alt={article.title} />
        ) : (
          <div className="article-card-image-placeholder">
            <FaNewspaper />
          </div>
        )}
      </div>
      <div className="article-card-body">
        <h3 className="article-card-title">{article.title}</h3>
        {excerpt && <p className="article-card-excerpt">{excerpt}</p>}
        <div className="article-card-meta">
          <span>{createdDate}</span>
          <span>{article.createdBy}</span>
        </div>
      </div>
    </Link>
  );
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);

  const [keyword, setKeyword] = useState("");
  const [keywordInput, setKeywordInput] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getPublicArticles({
        keyword: keyword || undefined,
        page,
        limit: LIMIT,
      });
      setArticles(data.items);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch {
      setError("ไม่สามารถโหลดบทความได้ กรุณาลองใหม่ภายหลัง");
    } finally {
      setLoading(false);
    }
  }, [keyword, page]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  function handleSearch() {
    setPage(1);
    setKeyword(keywordInput);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSearch();
  }

  return (
    <div className="w-full min-h-[calc(100vh-64px)] bg-white-primary">
      <div className="w-full px-5 md:px-40 pt-8 md:pt-16">
        <div className="detail-container md:max-w-7xl">
          <div className="detail-content flex-1 flex flex-col justify-center items-center gap-2 text-center">
            <h1 className="text-green-primary text-5xl font-bold">บทความ</h1>
            <p className="text-green-accent-dark max-w-xl">
              ข่าวสาร ความรู้ และอัปเดตเกี่ยวกับ B-Farm
              และเทคโนโลยีการเกษตรอัจฉริยะ
            </p>
          </div>
        </div>
        <hr className="divider" />

        <div className="w-full max-w-xl mx-auto mt-6">
          <div className="article-search-wrap">
            <div className="flex gap-2 w-full">
              <input
                type="text"
                className="flex-1 px-4 py-2.5 rounded-lg border border-gray-200 outline-none text-sm
                focus:border-green-primary focus:shadow-[0_0_0_3px_rgba(28,151,84,0.15)]
                bg-white transition"
                placeholder="ค้นหาบทความ..."
                value={keywordInput}
                onChange={(e) => setKeywordInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
              <button
                onClick={handleSearch}
                className="px-4 py-2.5 bg-green-primary-light text-white-primary rounded-lg
                hover:scale-105 transition flex items-center gap-2 text-sm"
              >
                <FaMagnifyingGlass />
                ค้นหา
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full mx-auto px-5 md:px-40 pb-16 pt-8">
        {/* Result count */}
        {!loading && !error && (
          <p className="text-sm text-green-accent-dark mb-6">
            {keyword
              ? `ผลการค้นหา "${keyword}": ${total} บทความ`
              : `บทความทั้งหมด ${total} บทความ`}
          </p>
        )}

        {/* Error */}
        {error && (
          <div className="text-center py-16 text-red-600">
            <p>{error}</p>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-gray-200 border-t-green-primary rounded-full animate-spin" />
          </div>
        )}

        {/* Articles Grid */}
        {!loading && !error && articles.length === 0 && (
          <div className="text-center py-16 text-green-accent-dark">
            <FaNewspaper className="text-5xl mx-auto mb-4 text-gray-300" />
            <p className="text-lg">ไม่พบบทความ</p>
          </div>
        )}

        {!loading && !error && articles.length > 0 && (
          <div className="articles-grid">
            {articles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        )}

        {/* Pagination */}
        {!loading && totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page <= 1}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm
                hover:border-green-primary hover:text-green-primary transition
                disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ก่อนหน้า
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`px-4 py-2 rounded-lg border text-sm transition
                  ${
                    p === page
                      ? "bg-green-primary border-green-primary text-white"
                      : "border-gray-200 hover:border-green-primary hover:text-green-primary"
                  }`}
              >
                {p}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page >= totalPages}
              className="px-4 py-2 rounded-lg border border-gray-200 text-sm
                hover:border-green-primary hover:text-green-primary transition
                disabled:opacity-40 disabled:cursor-not-allowed"
            >
              ถัดไป
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
