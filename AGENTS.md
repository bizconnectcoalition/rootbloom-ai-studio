# AGENTS.md — Root & Bloom AI Studio (read this first)

## What this is
A custom-branded **AI studio for Root & Bloom Salon Source** (https://rootbloomsalonsource.com), a collective that supports independent hairstylists and salon owners with organic products (NATULIQUE, LYKKEGAARD), education, events and growth tools (FLAGSALON). Its motto is "Strong Foundations. Limitless Growth." The sunflower is its emblem.

The studio gives Root & Bloom's stylists and salon owners ten easy AI tools in Root & Bloom's look: chat, images (salon flyers, product shots), short videos (reels), voiceovers (phone greetings, promos), talking-avatar videos (from the stylist's own photo), music, slide decks (education nights), translation, outreach packs and brand kits. The example prompts are written for salons.

**Status:** preview prototype built 2026-10-23 for Root & Bloom to look at. Expect adjustments after their feedback. It is **not yet an official Root & Bloom service**: the footer says so, search engines are told not to index it (`noindex: true` in brand.js), and the sign-in box says who stores members' data. Keep it that way until Root & Bloom approves.

- **Live:** https://dshenterpriseinc.github.io/rootbloom-ai-studio/
- **Repo:** `dshenterpriseinc/rootbloom-ai-studio` (GitHub Pages from `main`, folder `/docs`)

## It is part of the BizConnect AI Studio family
This site is the **shared AI Studio core** plus **Root & Bloom's brand**. The core is maintained in one place:

```
R:\Documents\Claude\Projects\Bizconnect\
├─ bizconnect-ai-studio\        the core + BizConnect's own studio. READ ITS AGENTS.md for the full picture
└─ ai-studio-clients\
   └─ rootbloom-ai-studio\      ← YOU ARE HERE
      docs\                     the website GitHub Pages serves
        brands\rootbloom\       ← Root & Bloom's own files: EDIT THESE
          brand.js              names, wording, example prompts, the guide "Bloom"
          brand.css             colors and fonts
          img\                  sunflower emblem (cream, for the dark header), crest, favicon, guide avatar
        brand.js, *.html, assets\   ← copied from the core: DO NOT EDIT HERE
        CORE_VERSION.txt        which core commit was last copied in
```

## Common jobs
| Job | How |
|---|---|
| Change wording, example prompts, guide lines | Edit `docs\brands\rootbloom\brand.js` (fields explained in `..\..\bizconnect-ai-studio\tools\brand-template\brand.js`). `studios.<id>.examples` = the example chips; `studios.hide: ["music"]` removes a studio |
| Change colors or fonts | Edit `docs\brands\rootbloom\brand.css` |
| See it before publishing | `python -m http.server 8751 --directory docs` → http://localhost:8751 |
| Publish | `git add docs` → `git commit -m "…"` → `git push` (GitHub Pages updates in 1–2 min; hard-refresh with Ctrl+Shift+R) |
| Pick up core improvements | Run the sync command in rule 1, preview, then publish. `sync-client.ps1 -Check` (run from the core) says whether this client is behind |
| Change Bloom's concierge voice (back end) | The `rootbloom` line in `BRANDS` in `..\..\bizconnect-ai-studio\worker\src\index.js` → deploy the Worker (affects every studio; see the core's WHITE_LABEL.md step 4) |

## Rules
1. **Edit only `docs\brands\rootbloom\`** (and these .md files). Everything else in `docs\` is overwritten by the core's `tools\sync-client.ps1`. For a change every studio needs, edit the core in `bizconnect-ai-studio\`, then re-sync:
   ```powershell
   cd R:\Documents\Claude\Projects\Bizconnect\bizconnect-ai-studio
   powershell -ExecutionPolicy Bypass -File .\tools\sync-client.ps1 -Client ..\ai-studio-clients\rootbloom-ai-studio -BrandId rootbloom
   ```
2. **Public repo:** no secrets, no private notes about Root & Bloom's people or business.
3. The back end is the **shared BizConnect Worker** (`https://bizconnect-ai-studio.virtualecommerceinc.workers.dev`). Root & Bloom's concierge voice ("Bloom") is the `rootbloom` entry in `BRANDS` in `bizconnect-ai-studio\worker\src\index.js`. For now the passcode, daily spending cap and wallets are shared with the BizConnect studio (see the core's `project-docs\DECISIONS.md`, D-004).
4. Push only when Dan asks.
5. Never hand-edit core-owned files in `docs\` (the sync tool refuses to overwrite hand edits and lists them; move such changes into the core).

Private context (people, naming, which accounts own what) is in `..\..\bizconnect-ai-studio\PRIVATE_NOTES.md` (local disk only, not in any repo).

## Brand notes (from their website, 2026-10-23)
| Item | Value |
|---|---|
| Colors | forest green `#364838`, deep green `#2B3A2D`, warm tan `#BF9A67`, cream `#EEECE8` / `#F7F7F7` |
| Fonts | headings **Cormorant** (Google Fonts); body **Soleil** (commercial), so **Jost** stands in |
| Logo | `https://rootbloomsalonsource.com/images/live/logo-plaque.svg` (sunflower + roots + "ROOT & BLOOM SALON SOURCE"), recolored here |
| Voice | warm, rooted, growth-minded: "integrity over transactions, connection over competition" |
| Audience | independent hairstylists, booth renters, salon owners |

The studio uses a **dark "evening garden" theme**: forest-green canvas, cream text, tan accents. The shared design is dark-only today. A light version closer to their website needs core work (listed in the core's `project-docs\VISION.md`).

## Open items
- Root & Bloom's feedback on wording, colors and which studios matter most (`studios.hide` can remove any).
- Guide "Bloom" is a round sunflower avatar. A full-body character (like BizConnect's Allie) would need character art.
- Their own domain (e.g. studio.rootbloomsalonsource.com) → a `CNAME` file in `docs\` plus a DNS record.
- Their permission to use the logo publicly before it's promoted.
