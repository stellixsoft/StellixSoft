"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

const inputClass =
  "w-full rounded-xl bg-gray-50 border border-gray-200 px-4 py-3 text-sm text-[var(--color-deepSpace)] focus:outline-none focus:ring-2 focus:ring-[var(--color-electricBlue)]";

function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const res = await fetch("/api/admin/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setError("Invalid email or password.");
      setLoading(false);
      return;
    }

    const next = searchParams.get("next") || "/admin";
    router.push(next);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="admin-email" className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
          Email
        </label>
        <input
          id="admin-email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClass}
          autoComplete="username"
        />
      </div>
      <div>
        <label htmlFor="admin-password" className="block text-xs font-medium uppercase tracking-wider text-[var(--color-neutralGray)] mb-2">
          Password
        </label>
        <input
          id="admin-password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={inputClass}
          autoComplete="current-password"
        />
      </div>
      {error && <p className="text-sm text-red-600">{error}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-xl px-6 py-3 text-sm font-medium text-white disabled:opacity-70"
        style={{ backgroundColor: "var(--color-electricBlue-solid)" }}
      >
        {loading ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}

export default function AdminLoginPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-light text-[var(--color-deepSpace)] mb-2">
          Admin Login
        </h1>
        <p className="text-sm text-[var(--color-neutralGray)] mb-6">
          Sign in to manage scheduling event types and bookings.
        </p>
        <Suspense fallback={<p className="text-sm text-[var(--color-neutralGray)]">Loading…</p>}>
          <AdminLoginForm />
        </Suspense>
      </div>
    </div>
  );
}
