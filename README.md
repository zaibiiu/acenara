# Acenara

A complete, responsive website for Acenara, the software development and digital technology studio founded by Zohaib Akhtar in Lahore, Pakistan.

## Local development

Project location: `D:\xampp\htdocs\acenara`

```powershell
cd D:\xampp\htdocs\acenara
npm ci
npm run dev
```

Open `http://127.0.0.1:3000`. Node.js 24 is the tested runtime. Next.js serves the project itself; XAMPP/Apache is not required for development.

```powershell
npm run build
npm run typecheck
npm test
npm run preview
```

`build` produces the static website in `out/`. `preview` serves that export locally, including the custom 404. No runtime server, database, account, or paid service is required for deployment.

## Pages

- Home, Services, About, Expertise, Insights, Contact, Privacy, and a custom 404.
- Four statically generated service detail routes with 42 anchored offerings, use cases, delivery approaches, and related capabilities.
- Six statically generated original insight articles with publication date, reading time, table of contents, unique illustrations, and related articles.

## Content and components

- `src/content/company.ts`: contact details, navigation, process, and domain experience.
- `src/content/services.ts`: service categories and individual capabilities.
- `src/content/insights.ts`: editorial content and reading time.
- `src/components/`: navigation, footer, motion wrapper, interface demos, illustrations, journal filtering, and enquiry flow.
- `src/lib/enquiry.ts`: pure validation, project brief generation, and encoded contact links.
- `src/lib/seo.ts`: public URL validation and consistent metadata.
- `src/app/globals.css`: responsive design tokens and component styles.

## Identity and artwork

Palette: mist blue `#2F5061`, coral pink `#E57F84`, warm off-white `#F7F5F2`, and deep ink `#172C39`. Manrope and Instrument Serif are bundled locally through Fontsource, with license files in their packages. Iconography uses Lucide.

`public/brand/` contains primary/light/dark logos, the standalone brand mark, simplified favicon SVG, Apple touch icon, social SVG/PNG, and the recorded three-direction logo exploration. Wordmarks are outlined vector paths. `public/favicon.ico` contains 16, 32, and 48 pixel images.

`npm run brand:build` regenerates these assets from the locally bundled Manrope font and original vector geometry. It also compresses the original generated sculpture to WebP using Sharp (provided by Next.js).

The original sculpture source and optimized web asset are in `public/images/`. The artwork is a conceptual brand composition, not a photo of premises. See `docs/ARTWORK.md` for provenance and the generation prompt. Product visuals are original SVG/React compositions, and the booking/calendar and analytics interfaces use illustrative data.

## Enquiries

The contact flow supports multi-select platform needs, business stage, timeline and USD budget bands, followed by validated contact details and a project description. Answers remain in React memory and survive Back/Continue navigation; a reload clears them. There is no automatic transmission or browser-storage persistence.

Review prepares the complete brief. WhatsApp opens a correctly encoded `wa.me/923211514226` link; email opens a prefilled message to `zakhter843@gmail.com`. The visitor must press Send in the external application. Copy and manual-select fallbacks are provided. The site never claims a message was sent.

Long messages can exceed the limits of some email clients; use Copy brief or WhatsApp if a client truncates a mailto handoff. No enquiry is retained by the website.

## Free Cloudflare Pages deployment

1. Push the `main` branch to `https://github.com/zaibiiu/acenara`.
2. In Cloudflare, open **Workers & Pages → Create application → Pages → Connect to Git** and select the repository. Cloudflare account sign-in and authorizing repository access are completed by the owner.
3. Set the project name to `acenara` if available. The free subdomain is assigned by Cloudflare; `acenara.pages.dev` is not reserved by this repository.
4. Use these settings:

| Setting                | Value                                                        |
| ---------------------- | ------------------------------------------------------------ |
| Production branch      | `main`                                                       |
| Framework preset       | Next.js (Static HTML Export)                                 |
| Build command          | `npm run build`                                              |
| Build output directory | `out`                                                        |
| Root directory         | repository root / leave blank                                |
| Environment variable   | `NODE_VERSION=24`                                            |
| Environment variable   | `NEXT_PUBLIC_SITE_URL=https://YOUR-ACTUAL-PROJECT.pages.dev` |

5. Use the exact assigned production origin for `NEXT_PUBLIC_SITE_URL`, without a path. Save and deploy. If the assigned hostname differs, update that variable and rebuild.
6. Verify the homepage, a service detail, an article, the enquiry handoffs, and a nonexistent URL on the deployed hostname.

This is a static export. It does **not** use `@cloudflare/next-on-pages`, Server Actions, API routes, or Workers. Do not select a server-side Next.js build preset. The `_headers` file supplies basic response headers and immutable caching for hashed Next assets.

Without a valid HTTPS `NEXT_PUBLIC_SITE_URL`, the build emits no canonical origins, an empty sitemap, and a disallow-all robots policy. This keeps local/unknown deployments from being indexed. When the public URL is set, page canonicals, social previews, sitemap, robots, and structured-data URLs use that origin. Unpublished Cloudflare preview deployments should keep this variable unset or have indexing controlled through the preview environment.

Official references: [Next.js static export](https://nextjs.org/docs/app/guides/static-exports) and [Cloudflare Pages static Next.js guide](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-static-nextjs-site/).

## Checks

The contact tests verify step requirements, flexible budgets, malformed data, optional details, complete briefs, exact recipient numbers, and lossless URL encoding. The export check crawls local page links, anchor targets, and assets, verifies titles and a single H1, and rejects localhost origins. Run it after a successful build.

See `docs/QA.md` for the final recorded build and browser results.

## Truthful content

The site uses no fabricated clients, reviews, employee counts, company age, certifications, legal structure, or guaranteed support coverage. Prior development experience is described by domain; supplied platform names are withheld because permission and attribution are unconfirmed. No third-party project screenshots, external project links, or logos are used. Support scope and response expectations are agreed per engagement.
