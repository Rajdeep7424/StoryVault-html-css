# StoryVault — static build

A story library in plain HTML, CSS and JavaScript: 13 genres, 47 short stories and an 11-chapter serial, across 66 pages — live at [storyvault.netlify.app](https://storyvault.netlify.app).


Built before I knew React, as practice. Rebuilt later in [React](https://github.com/Rajdeep7424/StoryVault).
---

## How it's built

No framework, no bundler, no build step. Plain HTML pages served as-is.

| | |
|---|---|
| `index.html` | Landing page with a Bootstrap carousel |
| `categories/` | One page per genre, and one per story inside it |
| `CSS/style.css` | All styling, about 280 lines |
| `components/js.js` | Injects the navbar and footer |
| `.help folder/` | Page templates copied by hand for each new story |

Bootstrap 4, Font Awesome and jQuery load from CDNs. The contact form posts to Formspree, so it works without a backend.

The navbar and footer live in `components/js.js` and get injected into an empty `<div>` on each page — otherwise they'd be duplicated across all 66 files. That was the problem that eventually pushed me to React.

---

## Running it

Open `index.html` directly, or serve the folder:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

---

## Known limitations

- The navbar only exists if JavaScript runs.
- Adding a story means copying a template by hand — there's no data layer.
- Story pages link with `../../`, which only works because browsers clamp excess `../` at the domain root.
- Adventure appears twice in the genre dropdown — a copy-paste slip.

---

## Note

The HTML, CSS and all 47 story pages are mine. A few parts of `components/js.js` were written with AI help at the time.
