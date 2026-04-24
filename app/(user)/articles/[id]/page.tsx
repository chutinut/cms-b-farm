"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaCalendar, FaUser } from "react-icons/fa6";
import { getPublicArticleById } from "@/app/admin/lib/api";
import type { Article } from "@/app/types/article";

export default function ArticleDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    params.then(({ id }) => {
      getPublicArticleById(id)
        .then((data) => setArticle(data))
        .catch(() => setNotFound(true))
        .finally(() => setLoading(false));
    });
  }, [params]);

  if (loading) {
    return (
      <div className="w-full min-h-[calc(100vh-64px)] flex items-center justify-center bg-white-primary">
        <div className="w-8 h-8 border-2 border-gray-200 border-t-green-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (notFound || !article) {
    return (
      <div className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center justify-center gap-4 bg-white-primary px-5">
        <p className="text-2xl font-bold text-green-primary-dark">
          ไม่พบบทความ
        </p>
        <p className="text-green-accent-dark">
          บทความนี้อาจถูกลบหรือยังไม่ได้เผยแพร่
        </p>
        <Link
          href="/articles"
          className="px-5 py-2.5 bg-green-primary-light text-white-primary rounded-lg hover:scale-105 transition"
        >
          ดูบทความทั้งหมด
        </Link>
      </div>
    );
  }

  const createdDate = new Date(article.createdDate).toLocaleDateString(
    "th-TH",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  const updatedDate = new Date(article.updatedDate).toLocaleDateString(
    "th-TH",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    },
  );

  return (
    <div className="w-full min-h-[calc(100vh-64px)] flex flex-col items-center gap-5 bg-white-primary">
      <div className="w-full flex flex-col items-center gap-2 p-5 md:p-20 scroll-mt-5">
        <div className="detail-container md:max-w-7xl">
          <div className="detail-content flex-1">
            <Link
              href="/articles"
              className="inline-flex items-center gap-2 text-sm text-green-primary hover:text-green-primary-dark transition"
            >
              <FaChevronLeft />
              กลับไปรายการบทความ
            </Link>
          </div>
        </div>

        <div className="detail-container md:max-w-7xl flex-col! items-start">
          {article.bannerImage && (
            <div className="detail-content flex-1 flex justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={article.bannerImage}
                alt={article.title}
                className="detail-image article-detail-image"
              />
            </div>
          )}

          <div className="detail-content flex-1 md:max-w-5xl">
            <div className="article-detail-header">
              <h1 className="article-detail-title">{article.title}</h1>
              <div className="article-detail-meta">
                <span className="flex items-center gap-1.5">
                  <FaCalendar />
                  {createdDate}
                  {updatedDate !== createdDate && (
                    <span className="text-xs">
                      (แก้ไขล่าสุด: {updatedDate})
                    </span>
                  )}
                </span>
                <span className="flex items-center gap-1.5">
                  <FaUser />
                  {article.createdBy}
                </span>
              </div>
              {article.excerpt && (
                <p className="mt-3 text-green-accent-dark leading-relaxed">
                  {article.excerpt}
                </p>
              )}
            </div>

            <div
              className="article-detail-content"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
