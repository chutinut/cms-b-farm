"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import AdminNav from "../../../components/AdminNav";
import ArticleForm, {
  type ArticleFormData,
} from "../../../components/ArticleForm";
import { getAdminArticleById, updateArticle } from "../../../lib/api";
import type { Article } from "@/app/types/article";

export default function EditArticlePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const router = useRouter();
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    params.then(({ id }) => {
      getAdminArticleById(id)
        .then((data) => {
          setArticle(data);
        })
        .catch((err) => {
          if (
            err instanceof Error &&
            err.message.toLowerCase().includes("unauthorized")
          ) {
            router.replace("/admin/login");
          } else {
            setError("ไม่พบบทความหรือไม่สามารถโหลดข้อมูลได้");
          }
        })
        .finally(() => setLoading(false));
    });
  }, [params, router]);

  async function handleSubmit(data: ArticleFormData) {
    const { id } = await params;
    await updateArticle(id, {
      title: data.title,
      excerpt: data.excerpt,
      content: data.content,
      status: data.status,
      bannerImage: data.bannerImage || undefined,
    });
    router.push("/admin/articles");
  }

  if (loading) {
    return (
      <>
        <AdminNav />
        <main className="admin-content">
          <div className="admin-loading">
            <div className="spinner" />
            กำลังโหลดข้อมูลบทความ...
          </div>
        </main>
      </>
    );
  }

  if (error || !article) {
    return (
      <>
        <AdminNav />
        <main className="admin-content">
          <div className="admin-alert error">{error || "ไม่พบบทความ"}</div>
        </main>
      </>
    );
  }

  return (
    <>
      <AdminNav />
      <main className="admin-content">
        <ArticleForm
          pageTitle="แก้ไขบทความ"
          submitLabel="บันทึกการแก้ไข"
          onSubmit={handleSubmit}
          initialData={{
            title: article.title,
            excerpt: article.excerpt ?? "",
            content: article.content,
            status: article.status,
            bannerImage: article.bannerImage ?? "",
          }}
        />
      </main>
    </>
  );
}
