export function ServiceMarketingTagList({ items }: { items: string[] }) {
  return (
    <div className="max-w-3xl mx-auto w-full text-left">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-sky-400 shrink-0" aria-hidden />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function ServiceMarketingArrowTagList({ items }: { items: string[] }) {
  return (
    <div className="max-w-3xl mx-auto w-full text-left">
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1.5 text-sm md:text-[15px] text-slate-700 mb-5 list-none p-0 m-0">
        {items.map((item) => (
          <li key={item} className="flex items-center gap-2">
            <span className="h-[6px] w-[6px] rounded-full bg-sky-400 shrink-0" aria-hidden />
            <span>
              <span className="text-slate-500 mr-1" aria-hidden>
                →
              </span>
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
