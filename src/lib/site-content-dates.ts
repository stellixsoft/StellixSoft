/**
 * Approximate last substantive content updates for static URLs.
 * Avoids emitting `new Date()` on every build (which makes all URLs look freshly modified).
 */
export const STATIC_HUB_LAST_MOD = new Date("2026-03-01T12:00:00.000Z");
export const STATIC_SERVICES_HUB_LAST_MOD = new Date("2026-02-15T12:00:00.000Z");
export const STATIC_SERVICE_PAGE_LAST_MOD = new Date("2026-02-01T12:00:00.000Z");
export const STATIC_INDUSTRY_PAGE_LAST_MOD = new Date("2026-02-01T12:00:00.000Z");
export const STATIC_CASE_STUDY_LAST_MOD = new Date("2025-11-01T12:00:00.000Z");
export const STATIC_LEGAL_LAST_MOD = new Date("2026-03-31T12:00:00.000Z");
