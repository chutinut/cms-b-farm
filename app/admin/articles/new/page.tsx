"use client";

import { useRouter } from "next/navigation";
import AdminNav from "../../components/AdminNav";
import ArticleForm, {
  type ArticleFormData,
} from "../../components/ArticleForm";
import { createArticle } from "../../lib/api";

export default function NewArticlePage() {
  const router = useRouter();

  async function handleSubmit(data: ArticleFormData) {
    await createArticle({
      title: data.title,
      excerpt: data.excerpt || undefined,
      content: data.content,
      status: data.status,
      bannerImage: data.bannerImage || undefined,
    });
    router.push("/admin/articles");
  }

  return (
    <>
      <AdminNav />
      <main className="admin-content">
        <ArticleForm
          pageTitle="สร้างบทความใหม่"
          submitLabel="สร้างบทความ"
          onSubmit={handleSubmit}
        />
      </main>
    </>
  );
}
