"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FaPlus,
  FaMagnifyingGlass,
  FaPenToSquare,
  FaTrash,
  FaNewspaper,
  FaChevronLeft,
  FaChevronRight,
  FaTriangleExclamation,
  FaCircleCheck,
} from "react-icons/fa6";
import AdminNav from "../components/AdminNav";
import { getAdminArticles, deleteArticle } from "../lib/api";
import type { Article } from "@/app/types/article";

const STATUS_LABELS: Record<string, string> = {
  published: "เผยแพร่",
  draft: "ฉบับร่าง",
  deleted: "ลบแล้ว",
};

export default function AdminArticlesPage() {
  const router = useRouter();

  const [articles, setArticles] = useState<Article[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit] = useState(10);

  const [keyword, setKeyword] = useState("");
  const [keywordInput, setKeywordInput] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Delete modal state
  const [deleteTarget, setDeleteTarget] = useState<Article | null>(null);
  const [deleting, setDeleting] = useState(false);

  const fetchArticles = useCallback(async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getAdminArticles({
        keyword: keyword || undefined,
        status: statusFilter || undefined,
        page,
        limit,
      });
      setArticles(data.items);
      setTotalPages(data.totalPages);
      setTotal(data.total);
    } catch (err) {
      if (
        err instanceof Error &&
        err.message.toLowerCase().includes("unauthorized")
      ) {
        router.replace("/admin/login");
      } else {
        setError("ไม่สามารถโหลดรายการบทความได้ กรุณาลองใหม่");
      }
    } finally {
      setLoading(false);
    }
  }, [keyword, statusFilter, page, limit, router]);

  useEffect(() => {
    fetchArticles();
  }, [fetchArticles]);

  function handleSearch() {
    setPage(1);
    setKeyword(keywordInput);
  }

  function handleStatusChange(value: string) {
    setPage(1);
    setStatusFilter(value);
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") handleSearch();
  }

  async function handleDelete() {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await deleteArticle(deleteTarget.id);
      setDeleteTarget(null);
      setSuccessMessage(`ลบบทความ "${deleteTarget.title}" เรียบร้อยแล้ว`);
      setTimeout(() => setSuccessMessage(""), 4000);
      fetchArticles();
    } catch {
      setError("ไม่สามารถลบบทความได้ กรุณาลองใหม่");
    } finally {
      setDeleting(false);
    }
  }

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("th-TH", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  }

  const startItem = total === 0 ? 0 : (page - 1) * limit + 1;
  const endItem = Math.min(page * limit, total);

  return (
    <>
      <AdminNav />
      <main className="admin-content">
        {/* Page Header */}
        <div className="admin-page-header">
          <h2 className="admin-page-title">จัดการบทความ</h2>
          <Link href="/admin/articles/new" className="btn btn-primary">
            <FaPlus />
            สร้างบทความใหม่
          </Link>
        </div>

        {/* Alerts */}
        {error && (
          <div className="admin-alert error">
            <FaTriangleExclamation />
            {error}
          </div>
        )}
        {successMessage && (
          <div className="admin-alert success">
            <FaCircleCheck />
            {successMessage}
          </div>
        )}

        <div className="admin-card">
          {/* Toolbar */}
          <div className="admin-toolbar">
            <input
              type="text"
              className="admin-search-input"
              placeholder="ค้นหาชื่อบทความ..."
              value={keywordInput}
              onChange={(e) => setKeywordInput(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <button className="btn btn-ghost" onClick={handleSearch}>
              <FaMagnifyingGlass />
              ค้นหา
            </button>
            <select
              className="admin-filter-select"
              value={statusFilter}
              onChange={(e) => handleStatusChange(e.target.value)}
            >
              <option value="">ทุกสถานะ</option>
              <option value="published">เผยแพร่</option>
              <option value="draft">ฉบับร่าง</option>
              <option value="deleted">ลบแล้ว</option>
            </select>
          </div>

          {/* Table */}
          {loading ? (
            <div className="admin-loading">
              <div className="spinner" />
              กำลังโหลด...
            </div>
          ) : articles.length === 0 ? (
            <div className="admin-empty">
              <div className="admin-empty-icon">
                <FaNewspaper />
              </div>
              <p>ไม่พบบทความ</p>
            </div>
          ) : (
            <>
              <div className="admin-table-wrapper">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th>ชื่อบทความ</th>
                      <th>สถานะ</th>
                      <th>สร้างโดย</th>
                      <th>วันที่สร้าง</th>
                      <th>อัปเดตล่าสุด</th>
                      <th style={{ textAlign: "center" }}>จัดการ</th>
                    </tr>
                  </thead>
                  <tbody>
                    {articles.map((article) => (
                      <tr key={article.id}>
                        <td className="truncate-cell" title={article.title}>
                          {article.title}
                        </td>
                        <td>
                          <span className={`status-badge ${article.status}`}>
                            {STATUS_LABELS[article.status] ?? article.status}
                          </span>
                        </td>
                        <td>{article.createdBy}</td>
                        <td style={{ whiteSpace: "nowrap" }}>
                          {formatDate(article.createdDate)}
                        </td>
                        <td style={{ whiteSpace: "nowrap" }}>
                          {formatDate(article.updatedDate)}
                        </td>
                        <td>
                          <div
                            className="action-buttons"
                            style={{ justifyContent: "center" }}
                          >
                            <Link
                              href={`/admin/articles/${article.id}/edit`}
                              className="btn btn-secondary btn-sm"
                              title="แก้ไข"
                            >
                              <FaPenToSquare />
                              แก้ไข
                            </Link>
                            <button
                              className="btn btn-danger btn-sm"
                              title="ลบ"
                              onClick={() => setDeleteTarget(article)}
                            >
                              <FaTrash />
                              ลบ
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Pagination */}
              <div className="admin-pagination">
                <span className="admin-pagination-info">
                  แสดง {startItem}–{endItem} จาก {total} รายการ
                </span>
                <div className="admin-pagination-buttons">
                  <button
                    className="pagination-btn"
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                    disabled={page <= 1}
                    title="หน้าก่อนหน้า"
                  >
                    <FaChevronLeft />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (p) => (
                      <button
                        key={p}
                        className={`pagination-btn ${p === page ? "active" : ""}`}
                        onClick={() => setPage(p)}
                      >
                        {p}
                      </button>
                    ),
                  )}
                  <button
                    className="pagination-btn"
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    disabled={page >= totalPages}
                    title="หน้าถัดไป"
                  >
                    <FaChevronRight />
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      {/* Delete Confirmation Modal */}
      {deleteTarget && (
        <div
          className="modal-overlay"
          onClick={() => !deleting && setDeleteTarget(null)}
        >
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h3 className="modal-title">ยืนยันการลบบทความ</h3>
            <p className="modal-body">
              คุณต้องการลบบทความ{" "}
              <strong>&ldquo;{deleteTarget.title}&rdquo;</strong> ใช่หรือไม่?
              <br />
              <br />
              บทความจะถูกซ่อนจากผู้ใช้ทั่วไป และสามารถดูได้จากหน้า admin
              เท่านั้น
            </p>
            <div className="modal-actions">
              <button
                className="btn btn-ghost"
                onClick={() => setDeleteTarget(null)}
                disabled={deleting}
              >
                ยกเลิก
              </button>
              <button
                className="btn btn-danger"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? (
                  <>
                    <span
                      className="spinner"
                      style={{ width: "1rem", height: "1rem" }}
                    />
                    กำลังลบ...
                  </>
                ) : (
                  <>
                    <FaTrash />
                    ยืนยันลบ
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
