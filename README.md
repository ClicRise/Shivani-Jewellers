# Welcome to your Lovable project

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Open your project in the [Lovable editor](https://lovable.dev) and keep building.

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: connect the project to GitHub and every change made in Lovable is committed straight to your repository.
- **Full ownership**: this code is yours. Push to your repository and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

## Deploy to GitHub Pages

The included GitHub Actions workflow builds and deploys the site whenever you
push to the `main` branch. It prerenders the site's pages and sets the correct
base path automatically for both repository sites (`owner.github.io/repo/`)
and user sites (`owner.github.io/`).

1. Push this project to a GitHub repository on the `main` branch.
2. In the repository, open **Settings → Pages** and set **Build and deployment →
   Source** to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish.

The published address appears in the workflow run and in **Settings → Pages**.
For a local production build, run `bun install --frozen-lockfile` and
`bun run build`; the static site is written to `dist/client`.

## Built with

- TanStack Start
- TypeScript
- React
- Tailwind CSS
