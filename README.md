# JNVST GURU Website

A lightweight, bilingual (English and Bengali) static website for the JNVST GURU Android app. It uses HTML, CSS and vanilla JavaScript and can be hosted on GitHub Pages without a backend or build step.

## Project structure

```text
jnvst-guru-web/
├── index.html
├── robots.txt
├── sitemap.xml
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        ├── favicon.svg
        └── screenshots/
            ├── practice.jpeg
            ├── subject-wise-practice.jpeg
            └── topic-wise-practice.jpeg
```

The app screenshots in `assets/images/screenshots/` are actual screens supplied for this project. The homepage uses only screens that show currently supported features.

## Preview locally

From the project directory, run:

```powershell
python -m http.server 8000
```

Then open <http://localhost:8000>. Stop the server with `Ctrl+C`.

## Publish to GitHub

If this folder has not been initialized as a Git repository, run these commands from the project directory:

```powershell
git init
git add .
git commit -m "Create JNVST GURU website"
git branch -M main
git remote add origin https://github.com/srtecheducation-lab/jnvst-guru-web.git
git push -u origin main
```

For later updates:

```powershell
git add .
git commit -m "Update JNVST GURU website"
git push
```

## Enable GitHub Pages

1. Open the repository on GitHub and go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and `/ (root)` folder, then save.
4. Wait for the deployment to finish. The configured site URL is <https://srtecheducation-lab.github.io/jnvst-guru-web/>.

The canonical URL, Open Graph URL, `robots.txt` sitemap reference and `sitemap.xml` use this GitHub Pages address. If the repository or deployment URL changes, update them in `index.html`, `robots.txt` and `sitemap.xml`.

## SEO and accessibility

- Includes a page title, localized meta description, canonical URL, Open Graph and Twitter metadata, `robots.txt` and `sitemap.xml`.
- Uses semantic sections, a keyboard-accessible skip link, focus styles, responsive navigation and descriptive screenshot alt text.
- Respects `prefers-reduced-motion` and uses native `details` elements for the FAQ.
- English is the default language. The language selector changes page content and metadata, and remembers the selection in local storage when available.

## Before launch

- Confirm the GitHub Pages URL and repository name match the canonical and sitemap addresses.
- Review Bengali copy with a native speaker before publishing.
- Confirm the app listing and the privacy policy and account-deletion links are live.
- Replace or update the supplied screenshots if the app interface changes.
