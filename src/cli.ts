#!/usr/bin/env node
import { ApiError, links } from '1gr14'
import { Command } from 'commander'
import { createRequire } from 'node:module'
import { createStart0, template } from './index.js'

// Read name/version/description from the installed package.json at runtime, so
// the published version is always correct (no value baked in at build time).
const pkg = createRequire(import.meta.url)('../package.json') as {
  version: string
  description: string
}

const program = new Command()

program
  .name('create-start0')
  .description(pkg.description)
  .version(pkg.version, '-v, --version', 'print the version')
  .argument('[dir]', 'directory to create the app in')
  .option('--site <url>', 'site URL (defaults to https://1gr14.dev)')
  .option('--ref <ref>', `${template} git ref (defaults to the latest release)`)
  .action(async (dir: string | undefined, options: { site?: string; ref?: string }) => {
    try {
      await createStart0({ dir, site: options.site, ref: options.ref })
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error)
      console.error(`\nError: ${message}`)
      if (error instanceof ApiError) {
        if (error.status === 401) {
          console.error('Hint: sign in with `npx 1gr14 login`.')
        }
        if (error.status === 403 || error.code === 'UNSUBSCRIBED') {
          console.error(`Hint: ${template} needs an active subscription — ${links.site}/support`)
        }
      }
      process.exit(1)
    }
  })

await program.parseAsync(process.argv)
