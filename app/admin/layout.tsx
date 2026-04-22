"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { isAuthenticated } from "./lib/auth";
import "./admin.css";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isLoginPage = pathname === "/admin/login";
    const authenticated = isAuthenticated();

    if (!authenticated && !isLoginPage) {
      router.replace("/admin/login");
    } else if (authenticated && isLoginPage) {
      router.replace("/admin/articles");
    }
  }, [pathname, router]);

  return <div className="admin-root admin-wrapper">{children}</div>;
}
