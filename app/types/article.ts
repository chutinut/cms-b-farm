export type ArticleStatus = "published" | "draft" | "deleted";

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  status: ArticleStatus;
  bannerImage: string | null;
  createdBy: string;
  createdDate: string;
  updatedBy: string;
  updatedDate: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}
