"use client";
import { useSyncExternalStore } from "react";
const allowedTools = new Set([
  "rfid-roi-calculator",
  "dotnet-modernization-assessment",
  "iot-platform-demo",
]);
function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}
function getSnapshot() {
  try {
    const stored = sessionStorage.getItem("stellix-lab-report") ?? "";
    if (!stored) return "";
    const data = JSON.parse(stored);
    return typeof data.createdAt === "number" &&
      Date.now() - data.createdAt <= 86400000
      ? stored
      : "";
  } catch {
    return "";
  }
}
export function useToolContext(tool?: string) {
  const stored = useSyncExternalStore(subscribe, getSnapshot, () => "");
  if (!tool || !allowedTools.has(tool) || !stored) return null;
  try {
    const data = JSON.parse(stored);
    if (
      data.tool !== tool ||
      typeof data.report !== "string" ||
      data.report.length > 7500 ||
      typeof data.createdAt !== "number"
    )
      return null;
    if (
      typeof data.inputs !== "string" ||
      typeof data.results !== "string" ||
      data.inputs.length > 500 ||
      data.results.length > 500
    )
      return null;
    return {
      report: data.report as string,
      inputs: data.inputs as string,
      results: data.results as string,
    };
  } catch {
    return null;
  }
}
