import type { ReactNode } from "react";
import "./tools.css";
import "./operations.css";
export default function ToolsLayout({ children }: { children: ReactNode }) {
  return <div className="engineering-lab">{children}</div>;
}
