/**
 * Centralized site / deployment configuration.
 *
 * ▸ CHANGE `GITHUB_USERNAME` HERE (and only here) after you create or connect
 *   the GitHub repository. Everything else — QR codes, share links, canonical
 *   card URLs — is derived from these values automatically.
 */

export const GITHUB_USERNAME = "USERNAME"; // <-- CHANGE THIS
export const REPOSITORY_NAME = "abc-counsel-card";

export const COMPANY_NAME = "ABC Counsel";

/** Set to true only when serving from GitHub Pages (hash-based URLs). */
export const USE_HASH_URLS = false;

/**
 * Production base URL of the deployed site (no trailing slash).
 * Leave empty to always use the current browser origin.
 */
export const SITE_URL = "";

/** Base URL used when generating absolute links (QR codes, share, vCard). */
export function getBaseUrl(): string {
  if (SITE_URL) return SITE_URL.replace(/\/+$/, "");
  if (typeof window !== "undefined") {
    return `${window.location.origin}${window.location.pathname.startsWith(`/${REPOSITORY_NAME}/`) ? `/${REPOSITORY_NAME}` : ""}`;
  }
  return "";
}

/** Absolute, shareable URL for one employee's digital business card. */
export function buildCardUrl(slug: string): string {
  const base = getBaseUrl();
  return USE_HASH_URLS ? `${base}/#/card/${slug}` : `${base}/card/${slug}`;
}
