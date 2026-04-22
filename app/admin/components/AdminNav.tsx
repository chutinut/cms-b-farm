"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FaNewspaper, FaRightFromBracket } from "react-icons/fa6";
import { removeToken } from "../lib/auth";

export default function AdminNav() {
  const pathname = usePathname();
  const router = useRouter();

  function handleLogout() {
    removeToken();
    router.replace("/admin/login");
  }

  function isActive(path: string) {
    return pathname.startsWith(path) ? "active" : "";
  }

  return (
    <nav className="admin-nav">
      <Link href="/admin/articles" className="admin-nav-brand">
        <Image src="/logo.png" alt="B-Farm Logo" width={36} height={36} />
        <span>B-Farm</span>
        <span>&nbsp;Admin</span>
      </Link>

      <div className="admin-nav-links">
        <Link
          href="/admin/articles"
          className={`admin-nav-link ${isActive("/admin/articles")}`}
        >
          <FaNewspaper style={{ display: "inline", marginRight: "0.35rem" }} />
          บทความ
        </Link>

        <button className="admin-nav-logout" onClick={handleLogout}>
          <FaRightFromBracket />
          ออกจากระบบ
        </button>
      </div>
    </nav>
  );
}
