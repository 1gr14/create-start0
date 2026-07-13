## Unreleased

- Require `1gr14` `^0.3.8` (was `^0.3.7`) so `bun create start0` picks up the CLI
  0.3.8 spinner cleanup past a warm bun cache (same reason as 0.1.3). Also
  swapped stray single-character ellipses for plain `...` in the release scripts.

## 0.1.3 — 2026-07-13

- Require `1gr14` `^0.3.7` (was `^0.3.3`). A patch to the pinned `1gr14` CLI
  didn't reach people whose bun cache already held an older in-range build — bun
  reused the cached version instead of fetching the newer one, so a CLI fix
  never showed up in `bun create start0`. Raising the floor past the cached
  version forces the fetch, so `bun create start0` always runs the current CLI.

## [0.1.1](https://github.com/1gr14/create-start0/compare/v0.1.0...v0.1.1) (2026-06-10)


### Bug Fixes

* require 1gr14 ^0.3.0 — the API-key auth the site expects ([d362a2e](https://github.com/1gr14/create-start0/commit/d362a2e8ff8fd9138cba4a808dc525efe5cdf3a6))

# [0.1.0](https://github.com/1gr14/create-start0/compare/v0.0.1...v0.1.0) (2026-06-10)


### Features

* ship the npm-create shim ([99ad04e](https://github.com/1gr14/create-start0/commit/99ad04e1db2e033f439cb4cfedc582803f10a567))

## [0.0.1](https://github.com/1gr14/create-start0/compare/v0.0.0...v0.0.1) (2026-06-10)


### Bug Fixes

* depend on the published 1gr14 engine ([aab9fa1](https://github.com/1gr14/create-start0/commit/aab9fa1e2a536a8a2639c09e036cd7459512afe6))
* install runtime deps before the smoke test ([fde3088](https://github.com/1gr14/create-start0/commit/fde30880480b885122609f9db68d13e4ec104394))
