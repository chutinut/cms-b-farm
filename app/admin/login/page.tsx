"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaUser, FaLock, FaTriangleExclamation } from "react-icons/fa6";
import { login } from "../lib/api";
import { setToken } from "../lib/auth";

export default function AdminLoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { accessToken } = await login(username, password);
      setToken(accessToken);
      router.replace("/admin/articles");
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "เข้าสู่ระบบไม่สำเร็จ กรุณาลองใหม่อีกครั้ง",
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="admin-login-logo">
          <Image src="/logo.png" alt="B-Farm Logo" width={48} height={48} />
          <h1 className="admin-login-title">B-Farm Admin</h1>
        </div>
        <p className="admin-login-subtitle">ลงชื่อเข้าใช้ระบบจัดการเนื้อหา</p>

        {error && (
          <div className="admin-alert error">
            <FaTriangleExclamation />
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label required">
              ชื่อผู้ใช้
            </label>
            <div style={{ position: "relative" }}>
              <FaUser
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--gray-primary)",
                  fontSize: "0.875rem",
                }}
              />
              <input
                id="username"
                type="text"
                className="form-input"
                style={{ paddingLeft: "2.25rem" }}
                placeholder="กรอกชื่อผู้ใช้"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                autoComplete="username"
                autoFocus
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label required">
              รหัสผ่าน
            </label>
            <div style={{ position: "relative" }}>
              <FaLock
                style={{
                  position: "absolute",
                  left: "0.75rem",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "var(--gray-primary)",
                  fontSize: "0.875rem",
                }}
              />
              <input
                id="password"
                type="password"
                className="form-input"
                style={{ paddingLeft: "2.25rem" }}
                placeholder="กรอกรหัสผ่าน"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                autoComplete="current-password"
              />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{
              width: "100%",
              justifyContent: "center",
              marginTop: "0.5rem",
              padding: "0.75rem",
            }}
            disabled={loading}
          >
            {loading ? (
              <>
                <span
                  className="spinner"
                  style={{ width: "1rem", height: "1rem" }}
                />
                กำลังเข้าสู่ระบบ...
              </>
            ) : (
              "เข้าสู่ระบบ"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
