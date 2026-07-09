"use client";

export default function AdminSignOut() {
  return (
    <button
      type="button"
      onClick={async () => {
        await fetch("/api/admin/auth/login", { method: "DELETE" });
        window.location.href = "/admin/login";
      }}
      className="text-sm text-[var(--color-electricBlue)] hover:underline"
    >
      Sign out
    </button>
  );
}
