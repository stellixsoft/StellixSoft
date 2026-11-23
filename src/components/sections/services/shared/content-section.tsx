import type { ReactNode } from "react";

type Props = {
  heading: string;
  children: ReactNode;
  tone?: "white" | "gray";
  id?: string;
};

/** Plain content section used by the simpler service pages. */
export default function ContentSection({ heading, children, tone = "white", id }: Props) {
  return (
    <section
      id={id}
      className={`py-12 md:py-16 px-4 sm:px-6 ${tone === "gray" ? "bg-[var(--color-lightGray)]/40" : "bg-white"}`}
    >
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-2xl md:text-3xl font-light text-[var(--color-deepSpace)] mb-4">{heading}</h2>
        <div className="text-base text-slate-700 leading-relaxed space-y-4 [&_a]:font-medium [&_a]:text-[var(--color-electricBlue)] [&_a]:underline [&_a]:underline-offset-4 [&_table]:w-full [&_table]:text-left [&_table]:text-sm [&_th]:px-4 [&_th]:py-3 [&_th]:font-medium [&_th]:bg-[#f5f7fb] [&_td]:px-4 [&_td]:py-3 [&_td]:align-top [&_tr]:border-t [&_tr]:border-gray-200">
          {children}
        </div>
      </div>
    </section>
  );
}
