# Codessin capture demo

A minimal Vite app that exercises the real customer workflow: build with
anchors on, capture the rendered page in CI, upload it to Codessin.

## What makes this a Codessin project

Three things, and nothing else:

1. **One line in `vite.config.js`** — `codessinAnchors.vite()`, which labels
   each element with the file and line that rendered it. It does nothing
   unless `CODESSIN_CAPTURE=1`, so normal builds are untouched.
2. **`codessin.config.json`** — which pages to capture, at which sizes.
3. **A workflow step** — `codessin-dev/capture-action`.

## Try it locally, without uploading

```sh
npm install
CODESSIN_CAPTURE=1 npm run build
npx codessin-capture run --dry-run
open .codessin/capture/route_1440x900/index.html
```

`--dry-run` writes the capture to disk instead of uploading it, so you can see
exactly what Codessin would see before connecting anything.

## Repository settings this needs

| Kind | Name | Value |
|---|---|---|
| Secret | `CODESSIN_API_KEY` | A key with the `capture:write` scope |
| Variable | `CODESSIN_API_URL` | The Codessin API base URL |
