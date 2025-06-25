"use client";

import { useAuth } from "@/context/auth-context";
import ChatInterface from "@/components/chat-interface";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user, loading } = useAuth();
  const router = useRouter();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    router.push("/login");
  }

  return <ChatInterface />;
}
