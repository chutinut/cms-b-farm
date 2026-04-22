import type { Article, PaginatedResponse } from "@/app/types/article";
import { getToken } from "./auth";

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api/v1";

interface RequestOptions {
  method?: string;
  body?: unknown;
  auth?: boolean;
}

async function request<T>(
  path: string,
  options: RequestOptions = {},
): Promise<T> {
  const { method = "GET", body, auth = false } = options;

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (auth) {
    const token = getToken();
    if (token) headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${path}`, {
    method,
    headers,
    ...(body !== undefined ? { body: JSON.stringify(body) } : {}),
  });

  if (!response.ok) {
    const error = await response
      .json()
      .catch(() => ({ message: "Request failed" }));
    throw new Error(error.message ?? "Request failed");
  }

  return response.json() as Promise<T>;
}

// ─── Auth ────────────────────────────────────────────────────────────────────

export async function login(username: string, password: string) {
  return request<{ accessToken: string; tokenType: string; expiresIn: string }>(
    "/auth/login",
    { method: "POST", body: { username, password } },
  );
}

// ─── Admin Articles ───────────────────────────────────────────────────────────

export interface AdminArticlesParams {
  status?: string;
  keyword?: string;
  page?: number;
  limit?: number;
}

export async function getAdminArticles(params: AdminArticlesParams = {}) {
  const query = new URLSearchParams();
  if (params.status) query.set("status", params.status);
  if (params.keyword) query.set("keyword", params.keyword);
  if (params.page) query.set("page", String(params.page));
  if (params.limit) query.set("limit", String(params.limit));
  const qs = query.toString();
  return request<PaginatedResponse<Article>>(
    `/articles/admin${qs ? `?${qs}` : ""}`,
    {
      auth: true,
    },
  );
}

export async function getAdminArticleById(id: string) {
  return request<Article>(`/articles/admin/${id}`, { auth: true });
}

export async function createArticle(data: {
  title: string;
  excerpt?: string;
  content: string;
  status: string;
  bannerImage?: string;
}) {
  return request<Article>("/articles", {
    method: "POST",
    body: data,
    auth: true,
  });
}

export async function updateArticle(
  id: string,
  data: Partial<{
    title: string;
    excerpt: string;
    content: string;
    status: string;
    bannerImage: string;
  }>,
) {
  return request<Article>(`/articles/${id}`, {
    method: "PUT",
    body: data,
    auth: true,
  });
}

export async function deleteArticle(id: string) {
  return request<Article>(`/articles/${id}`, { method: "DELETE", auth: true });
}

// ─── Public Articles ──────────────────────────────────────────────────────────

export interface PublicArticlesParams {
  keyword?: string;
  page?: number;
  limit?: number;
}

export async function getPublicArticles(params: PublicArticlesParams = {}) {
  const query = new URLSearchParams();
  if (params.keyword) query.set("keyword", params.keyword);
  if (params.page) query.set("page", String(params.page));
  if (params.limit) query.set("limit", String(params.limit));
  const qs = query.toString();
  return request<PaginatedResponse<Article>>(`/articles${qs ? `?${qs}` : ""}`);
}

export async function getPublicArticleById(id: string) {
  return request<Article>(`/articles/${id}`);
}
