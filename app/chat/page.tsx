"use client";

import { useRouter } from "next/navigation";

export default function ChatPage() {
  const router = useRouter();

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  const btnClass =
    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800";

  return (
    <div className="flex gap-4">
      <span>ChatPage</span>
      <button onClick={() => handleNavigate("/")} className={btnClass}>
        Back
      </button>
    </div>
  );
}
