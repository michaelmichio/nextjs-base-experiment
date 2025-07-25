"use client";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "react-bootstrap";

export default function MainHeader() {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (url: string) => {
    router.push(url);
  };

  if (pathname !== "/chat") {
    return (
      <div className="d-flex gap-3 p-3">
        <Button onClick={() => handleNavigate("/")}>Home</Button>
        <Button onClick={() => handleNavigate("/debug")}>Debug</Button>
        <Button onClick={() => handleNavigate("/chat")}>Chat</Button>
      </div>
    );
  }
}
