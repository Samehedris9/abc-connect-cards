# ABC Counsel Digital Business Cards — Deployment Guide

## Hosting note (important)

This project is a **TanStack Start** application (server-side rendered, built
with Nitro). Its production build output is a server bundle, **not** a plain
static `dist/` folder, so it cannot be hosted on GitHub Pages, which only serves
static files. Adding `base: '/abc-counsel-card/'` or a GitHub Pages workflow
would produce a broken deployment.

**Recommended (free, zero config):** publish from Lovable.

1. Click **Publish** (top-right of the editor).
2. The site goes live at `https://<your-project>.lovable.app`.
3. Optionally connect a custom domain in **Project Settings → Domains**.

GitHub sync is still fully supported for source control — see below.

## Step 1 — Connect the project to GitHub

In the Lovable editor: **Plus (+) menu → GitHub → Connect project**, authorize
the Lovable GitHub App, then create the repository `abc-counsel-card`.

## Step 2 — Push to `main`

Every change made in Lovable is committed to `main` automatically. Local commits
pushed to `main` sync back into Lovable.

## Step 3 — Publish

Use the **Publish** button in Lovable. Frontend changes go live after clicking
**Update** in the publish dialog.

## Step 4 — Update the site configuration

Open `src/config/site.ts` and set:

- `SITE_URL` — the final production URL (no trailing slash), e.g.
  `https://cards.abccounsel.com`. Leave it empty to use the current origin.
- `GITHUB_USERNAME` / `REPOSITORY_NAME` — repository metadata.
- `USE_HASH_URLS` — leave `false`; only needed for static hash-based hosting.

Every QR code, share link and vCard URL is generated from this single file.

## Step 5 — Verify

| Check | URL |
| --- | --- |
| Homepage | `/` |
| Mohamed Haggag | `/card/mohamed-haggag` |
| Mohamed Elgendy | `/card/mohamed-elgendy` |

Test: images and icons load, call / WhatsApp / email / LinkedIn buttons open
correctly, **Save Contact** downloads a valid `.vcf`, **Share Card** opens the
native share sheet (or copies the link), each QR code opens the right card, and
refreshing a card URL does not 404.

## Adding a new employee

Add one object to the `employees` array in `src/data/employees.ts`. Route, QR
code, vCard and share link are all generated automatically from the `slug`.
