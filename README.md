# next-microfrontend

Try out a Next.js-based microfrontend architecture.

The idea is applications can be separately developed and composed together in a `main` application.

## Usage

1. Clone this repository

> This repo is a pseudo-polyrepo, consider each directory is a separate repo in reality

2. In both `app-one` and `portal`:
  - `npm install` to install dependencies
  - `npm run export` to compile the interface that is exported and consumed by the main application

3. In `main`:
  - `npm install` to install dependencies, including locally linked `app-one` and `portal`
  - `npm run dev` to run the main app with sub-apps imported

> For changes in `app-one` and `portal` to be reflected in `main`, you can use [npm link](https://docs.npmjs.com/cli/v9/commands/npm-link) to symlink them to `main`. You will need to run `npm run export` again for each change (or add a watch command).

## Thoughts

- The approach works, but integrating sub-applications and the main application by hand will be a problem at scale
- A tool could be written to automatically perform integration on a best-effort basis (and then manually intervene as needed after), but that requires sub-applications to strictly follow a determinable structure
- Prior commits demonstrate that using Next.js' [generateStaticParams](https://nextjs.org/docs/app/api-reference/functions/generate-static-params) and [dynamic route segments](https://nextjs.org/docs/app/building-your-application/routing/defining-routes#dynamic-segments) APIs can be used to allow sub-apps to provide route creation logic. There are two problems in practice:
  - It is more magical than statically defined routes, which makes it less clear what routes are expected to exist, and less clear to integrate
  - It makes code in sub-apps hard to organize (the `[slug]` nomenclature in paths means code has to live elsewhere and be imported into subpaths, instead of the other way around)
- I think if we take this approach then we should avoid dynamic route segments as a way to semi-decouple route creation
  - Instead, we could statically create routes in both the sub-app and main app, and export pages instead of widgets
  - Without a tool, this means a lot of tedious integration work re-creating routes in the main application