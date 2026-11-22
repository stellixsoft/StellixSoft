import {
  ELEMENTA_STATUS_LABEL,
  type ElementaProductStatus,
} from "@/src/lib/elementa";

const STATUS_STYLES: Record<ElementaProductStatus, string> = {
  live: "bg-emerald-50 text-emerald-800 border-emerald-200",
  "in-development": "bg-amber-50 text-amber-800 border-amber-200",
  "coming-soon": "bg-slate-100 text-slate-700 border-slate-300",
};

export default function StatusBadge({ status }: { status: ElementaProductStatus }) {
  return (
    <span
      className={`inline-flex self-start items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${STATUS_STYLES[status]}`}
    >
      {status === "live" ? (
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-600" aria-hidden />
      ) : null}
      {ELEMENTA_STATUS_LABEL[status]}
    </span>
  );
}
