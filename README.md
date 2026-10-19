# Andreu Miró — Portfolio starter

A custom dark portfolio website built with plain HTML, CSS and JavaScript. It is designed to work on GitHub Pages without a build step or framework.

## 1. Preview it on your computer

1. Download and extract `andreu-portfolio.zip`.
2. Open the extracted folder.
3. Double-click `index.html` to open it in your browser.

For the most reliable local preview, use Visual Studio Code with the **Live Server** extension: right-click `index.html` and choose **Open with Live Server**.

## 2. Personalise the content before publishing

Search the files for placeholder content such as `Project Title`, `your.email@example.com`, `20XX` and `Replace this`.

- **`index.html`** — text, project cards, social links, About Me, contact details and video placeholders.
- **`css/styles.css`** — colours, typography, spacing, responsive layout and visual effects. The main colours are defined at the top in `:root`.
- **`js/main.js`** — navigation and the text shown in each project case-study page.
- **`assets/images/`** — add your screenshots and artwork here.
- **`assets/videos/`** — optional folder for small video files. For portfolio videos, embedding YouTube or Vimeo is usually easier.

The geometric artwork on the first version is made with CSS shapes, so it works without any image files. Replace these decorative visuals with screenshots from your real projects as you personalise the site.

### Add your real links

In `index.html`, replace the example LinkedIn, GitHub and email URLs with your own. Don't publish private information you don't want to share publicly.

### Add a YouTube video

1. Open the video on YouTube.
2. Choose **Share → Embed**.
3. Copy the `<iframe ...></iframe>` snippet.
4. In `index.html`, find the relevant `.video-placeholder` element and replace it with the iframe. You can also place the iframe inside a wrapper with the class `video-embed`.
5. Add this CSS rule if needed:

```css
.video-embed {
  aspect-ratio: 16 / 9;
  overflow: hidden;
  border-radius: 9px;
}
.video-embed iframe {
  width: 100%;
  height: 100%;
  border: 0;
}
```

Only embed videos you have permission to share.

### Add project images

Copy your image into `assets/images/`, then reference it with a relative path, for example:

```html
<img src="assets/images/my-level.png" alt="Greybox layout of my level">
```

Use descriptive alt text and reasonably compressed images so the page loads quickly.

## 3. Publish it with GitHub Pages

1. Sign in to GitHub and create a **new public repository** named `andreu-portfolio` (or another name you prefer).
2. Upload the **contents** of the extracted folder to the root of that repository. Make sure `index.html` is at the root, not nested inside another folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/(root)` folder, then save.
6. Wait for the deployment to finish. GitHub will show your published website URL in the Pages settings.

If you name the repository `YOUR-USERNAME.github.io`, GitHub Pages can use that as your user-site repository. Otherwise, the URL normally includes the repository name, like `https://YOUR-USERNAME.github.io/andreu-portfolio/`.

## 4. Updating the site later

Edit the files locally or directly in GitHub, then commit your changes. GitHub Pages will publish the update after the deployment completes.

## Notes

- This is a static website: it does not need a server, database or paid hosting.
- The navigation uses URL hashes (for example `#level-design`) to switch between sections. The project notes also have their own hash routes.
- The current project text and contact links are examples. Replace them with accurate information about your own work before sharing the site with recruiters.
