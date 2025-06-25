"use client";

import { LoginForm } from "@/components/login-form";
import { Logo } from "@/components/logo";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push("/");
    }
  }, [user, loading, router]);

  if (loading || user) {
    return null; // Or a loading spinner
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-bold">
          <div className="text-primary flex items-center justify-center rounded-md">
            <Logo className="h-10 w-10" />
          </div>
          U2C
        </a>
        <LoginForm />
      </div>
    </div>
  );
}
