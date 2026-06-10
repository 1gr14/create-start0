# create-start0

> Create a start0 app — `bun create start0 my-app`.

[![CI](https://github.com/1gr14/create-start0/actions/workflows/ci.yml/badge.svg)](https://github.com/1gr14/create-start0/actions/workflows/ci.yml)
[![npm](https://img.shields.io/npm/v/create-start0.svg)](https://www.npmjs.com/package/create-start0)
[![coverage](https://codecov.io/gh/1gr14/create-start0/branch/main/graph/badge.svg)](https://codecov.io/gh/1gr14/create-start0)
[![license](https://img.shields.io/npm/l/create-start0.svg)](./LICENSE)

<!-- docs:start -->
<!-- Everything between docs:start and docs:end is synced to 1gr14.dev as this
library's Overview page. Keep the markers; put badges/header above docs:start and
the Community/Contributing/License footer below docs:end. -->

[start0](https://1gr14.dev) is a complete SaaS boilerplate — auth, admin, forms,
CRUD, tests — built on the 1gr14 stack. This package is the standard way to
start an app from it:

```sh
bun create start0 my-app
# or
npm create start0 my-app
```

It signs you in to 1gr14.dev (a one-time device approval in the browser),
downloads the latest start0 release, unpacks it, `git init`s, records the start0
version in `package.json`, and runs start0's own `init` script — that's where
you pick the app name and finish the setup.

Getting start0 requires an active [subscription](https://1gr14.dev/support).

## Flags

```sh
bun create start0 my-app --ref v0.3.0   # a specific release instead of the latest
```

`--site <url>` targets another site instance (useful for local development of
the site itself).

## It's a shim on purpose

All the logic lives in the [`1gr14` CLI](https://www.npmjs.com/package/1gr14) —
`create-start0` only pins the template, so `bun create start0` and
`npx 1gr14 create start0` are the same thing. Already have the CLI? Use it
directly.

## Requirements

- **Bun 1+** or **Node.js 20+** (ESM only)
- `git` on the PATH is nice to have (it `git init`s the new app; skipped when
  absent)

<!-- docs:end -->

## Community

Questions, bugs, or want to hang with other builders? Join the 1gr14 community —
one hub for all our open-source projects, this one included. Get help, share
what you built, or just say hi:
[1gr14.dev/community](https://1gr14.dev/community)

## Contributing

Issues and PRs welcome. See [CONTRIBUTING.md](./CONTRIBUTING.md) and the
[Code of Conduct](./CODE_OF_CONDUCT.md). Commits follow
[Conventional Commits](https://www.conventionalcommits.org/). Security reports:
[SECURITY.md](./SECURITY.md).

## License

[MIT](./LICENSE)

---

```text
Building open-source software for the glory of the Lord Jesus Christ ☦️
With love for developers of all backgrounds around the world ❤️
Sergei Dmitriev, 2026 😎
```
