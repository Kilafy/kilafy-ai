"use client";

import { useRouter } from "next/navigation";
import { Header } from "./Header";

export function NewsHeader() {
  const router = useRouter();

  const handleNavigate = (sectionId: string) => {
    if (sectionId === "inicio") {
      router.push("/");
    } else if (sectionId === "news") {
      // Already on news page, do nothing or scroll to top
      window.scrollTo(0, 0);
    } else {
      // For other sections, go to home page with hash
      router.push(`/#${sectionId}`);
    }
  };

  return <Header onNavigate={handleNavigate} />;
}
