"use client";

import { useState, useRef, type FormEvent, type ChangeEvent } from "react";
import Link from "next/link";
import {
  FaFloppyDisk,
  FaChevronLeft,
  FaXmark,
  FaImage,
  FaTriangleExclamation,
} from "react-icons/fa6";
import type { ArticleStatus } from "@/app/types/article";

export interface ArticleFormData {
  title: string;
  excerpt: string;
  content: string;
  status: ArticleStatus;
  bannerImage: string;
}

interface ArticleFormProps {
  initialData?: Partial<ArticleFormData>;
  onSubmit: (data: ArticleFormData) => Promise<void>;
  submitLabel?: string;
  backHref?: string;
  pageTitle: string;
}

const MAX_IMAGE_SIZE_MB = 2;
const ALLOWED_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/webp",
];

export default function ArticleForm({
  initialData,
  onSubmit,
  submitLabel = "บันทึก",
  backHref = "/admin/articles",
  pageTitle,
}: ArticleFormProps) {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt ?? "");
  const [content, setContent] = useState(initialData?.content ?? "");
  const [status, setStatus] = useState<ArticleStatus>(
    initialData?.status ?? "draft",
  );
  const [bannerImage, setBannerImage] = useState(
    initialData?.bannerImage ?? "",
  );

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [imageError, setImageError] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);

  function handleImageChange(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageError("");

    if (!ALLOWED_TYPES.includes(file.type)) {
      setImageError("รองรับเฉพาะไฟล์รูปภาพ JPEG, PNG, GIF, WEBP เท่านั้น");
      return;
    }

    const sizeMB = file.size / (1024 * 1024);
    if (sizeMB > MAX_IMAGE_SIZE_MB) {
      setImageError(`ขนาดไฟล์ต้องไม่เกิน ${MAX_IMAGE_SIZE_MB} MB`);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setBannerImage(reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  function handleRemoveImage() {
    setBannerImage("");
    if (fileInputRef.current) fileInputRef.current.value = "";
    setImageError("");
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");

    if (!title.trim()) {
      setError("กรุณากรอกชื่อบทความ");
      return;
    }
    if (!content.trim()) {
      setError("กรุณากรอกเนื้อหาบทความ");
      return;
    }

    setSubmitting(true);
    try {
      await onSubmit({ title, excerpt, content, status, bannerImage });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Page Header */}
      <div className="admin-page-header">
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link href={backHref} className="btn btn-ghost btn-sm">
            <FaChevronLeft />
          </Link>
          <h2 className="admin-page-title">{pageTitle}</h2>
        </div>
        <button
          type="submit"
          form="article-form"
          className="btn btn-primary"
          disabled={submitting}
        >
          {submitting ? (
            <>
              <span
                className="spinner"
                style={{ width: "1rem", height: "1rem" }}
              />
              กำลังบันทึก...
            </>
          ) : (
            <>
              <FaFloppyDisk />
              {submitLabel}
            </>
          )}
        </button>
      </div>

      {error && (
        <div className="admin-alert error">
          <FaTriangleExclamation />
          {error}
        </div>
      )}

      <form id="article-form" onSubmit={handleSubmit}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 300px",
            gap: "1.5rem",
          }}
        >
          {/* Left: Main content */}
          <div>
            <div className="admin-card">
              {/* Title */}
              <div className="form-group">
                <label htmlFor="title" className="form-label required">
                  ชื่อบทความ
                </label>
                <input
                  id="title"
                  type="text"
                  className="form-input"
                  placeholder="กรอกชื่อบทความ (ไม่เกิน 200 ตัวอักษร)"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  maxLength={200}
                  required
                />
                <span className="form-hint">{title.length}/200 ตัวอักษร</span>
              </div>

              {/* Excerpt */}
              <div className="form-group">
                <label htmlFor="excerpt" className="form-label">
                  เกริ่นนำ (Excerpt)
                </label>
                <textarea
                  id="excerpt"
                  className="form-textarea"
                  placeholder="ข้อความสั้น ๆ สำหรับแสดงในรายการบทความ (ไม่เกิน 500 ตัวอักษร)"
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  maxLength={500}
                  style={{ minHeight: "80px" }}
                />
                <span className="form-hint">{excerpt.length}/500 ตัวอักษร</span>
              </div>

              {/* Content */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="content" className="form-label required">
                  เนื้อหาบทความ
                </label>
                <textarea
                  id="content"
                  className="form-textarea code"
                  placeholder="กรอกเนื้อหาบทความ รองรับ HTML เช่น <h2>หัวข้อ</h2><p>ข้อความ</p>"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                />
                <span className="form-hint">
                  รองรับ HTML tags เช่น &lt;h2&gt;, &lt;p&gt;, &lt;img&gt;,
                  &lt;ul&gt;
                </span>
              </div>
            </div>
          </div>

          {/* Right: Sidebar */}
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {/* Status */}
            <div className="admin-card">
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label htmlFor="status" className="form-label required">
                  สถานะ
                </label>
                <select
                  id="status"
                  className="form-select"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as ArticleStatus)}
                >
                  <option value="draft">ฉบับร่าง</option>
                  <option value="published">เผยแพร่</option>
                  <option value="deleted">ลบ</option>
                </select>
              </div>
            </div>

            {/* Banner Image */}
            <div className="admin-card">
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">
                  <FaImage
                    style={{ display: "inline", marginRight: "0.35rem" }}
                  />
                  รูป Banner
                </label>

                {bannerImage ? (
                  <div className="banner-preview">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={bannerImage} alt="Banner preview" />
                    <button
                      type="button"
                      className="banner-remove-btn"
                      onClick={handleRemoveImage}
                      title="ลบรูป"
                    >
                      <FaXmark />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="btn btn-ghost"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      marginTop: "0.5rem",
                    }}
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <FaImage />
                    เลือกรูปภาพ
                  </button>
                )}

                <input
                  ref={fileInputRef}
                  type="file"
                  accept={ALLOWED_TYPES.join(",")}
                  style={{ display: "none" }}
                  onChange={handleImageChange}
                />

                {imageError && <span className="form-error">{imageError}</span>}
                <span className="form-hint">
                  JPEG, PNG, GIF, WEBP ขนาดไม่เกิน 2 MB
                </span>
              </div>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
