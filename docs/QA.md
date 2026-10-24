# Acenara verification record

Verified on 24 October 2026 in the local project `D:\xampp\htdocs\acenara`.

## Production and source checks

- `npm run build`: passed on Next.js 16.4.3 / React 19.3.1 / Node.js 24.20.0.
- Static export: 19 content routes, custom not-found output, sitemap, robots, and all local assets. The export contains 22 HTML files including the generated not-found variants.
- `npm run typecheck`: passed with no TypeScript errors.
- `npm test`: all 8 regression tests passed.
- Export crawler: 1,642 internal link references, 650 anchor references, and 532 asset references resolved. Page titles are unique and every HTML page has a single H1. No localhost origin is emitted.
- Dependency installation reported zero vulnerabilities.
- Source was consistently formatted with Prettier.
- The optimized 1440px hero WebP is approximately 43 KB.

## Real browser verification

Tested the production static export through the in-app Chromium browser at `http://127.0.0.1:3004`.

- Reviewed desktop homepage composition, logo, sculpture, and typography, and the mobile homepage and enquiry layout.
- Checked 14 page types at 320, 768, and 1440 CSS pixels (42 checks): Home, Services, all four service categories, Solutions, How We Work, About, Experience, Insights, one complete article, Contact, and Privacy. No horizontal overflow or broken image elements after the final fixes.
- Also reviewed the 390px mobile layout. The smallest rotated-phone overflow found in testing was corrected and rechecked.
- Switched dashboard views and Week/Month datasets; verified four monthly bars and the clickable Week 2 value of 69 demo units.
- Verified process tabs by pointer and keyboard, including Design to Engineer with ArrowRight.
- Verified the Services mega menu opens by click and keyboard, closes with Escape, and its Data Engineering link reaches the correct service section.
- Verified mobile service-group expansion, Escape focus restoration, and Solutions navigation closing the dialog.
- Inspected original generated collaboration images in the actual page layouts; preserved the full consultation composition on Contact.
- Selected November 18 and 02:00 PM in the appointment demo, confirmed the selection, and verified that the UI explicitly says no real appointment was booked.
- Verified platform validation, multiple selected platforms, business stage selection, flexible budget selection, and Back/Continue answer preservation.
- Verified all required final-step errors before filling a complete enquiry with dummy test details.
- Reviewed the final generated WhatsApp and email URLs; recipients and all selected answers were present and correctly encoded. Neither external send action was performed.
- Verified Copy project brief produces the copied confirmation. Verified saved contact details survived Back/Continue and Edit actions.
- Verified mobile menu opening, Escape dismissal, focus restoration to its trigger, navigation to Home, and closing on navigation.
- Verified insight filtering produces the single Design article and that the article link loads its content.
- Verified the custom 404 loads for an unknown URL.
- Browser console inspection showed no warnings or errors during these checks.
- Reviewed the social sharing PNG visually. Primary SVG logos were observed at desktop and mobile navbar sizes; favicon and Apple icon formats were generated and checked for file presence.

## Technical safeguards reviewed

- No runtime backend, Server Actions, API routes, database, third-party trackers, or configured paid services.
- Reduced-motion CSS and Motion preference handling are present. OS-level motion preference emulation was not performed.
- Native modal dialog provides focus containment, with explicit Escape handling and focus restoration.
- Colors use dark ink/mist-blue text against pale surfaces, with coral treated as an accent. No full external accessibility certification or automated Lighthouse audit is claimed.
- Contact data is held in page memory, with no automatic background submission or persistent browser storage.
- Public URL tests reject missing, malformed, HTTP, and loopback origins. Valid public origins are normalized. Local builds are noindex, disallow-all robots, with no assumed canonical hostname.

## Deployment limits

Cloudflare Pages has not been connected or deployed. The owner needs to connect the GitHub repository and configure the actual assigned public URL. `acenara.pages.dev` remains subject to availability. A deployed-hostname smoke test is still required after that setup.

Operating-system email-client handling and WhatsApp delivery depend on the visitor's external application. The app links and message payloads have been verified without sending a message. Very long email briefs may exceed a client's mailto limit; copy and WhatsApp fallbacks are provided.

The favicon was not separately judged in a browser chrome tab at every density. No Safari, Firefox, physical-device, or screen-reader audit was performed.
`npm run dev -- --port 3001` also started successfully and served the homepage with HTTP 200.

## Redesign image delivery

Eight new original images were generated: four technical still lifes and four representative human collaboration scenes. The human scenes are visibly captioned as representative generated imagery. Optimized 1440px WebP assets range from approximately 57 KB to 120 KB. Source PNGs and exact prompts are retained in `design/`; they are not shipped in the static export. No stock images, actual employee portraits, or actual office photographs are implied.
