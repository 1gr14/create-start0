// Post-build smoke test: run the built CLI under plain Node and check it works.
// Needs the runtime deps installed (1gr14, commander).
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { template } from '../dist/index.js'

const cli = fileURLToPath(new URL('../dist/cli.js', import.meta.url))

const assert = (cond, msg) => {
  if (!cond) {
    console.error('smoke test failed:', msg)
    process.exit(1)
  }
}

const run = (...args) => execFileSync('node', [cli, ...args], { encoding: 'utf8' })

assert(template === 'start0', 'the lib surface should pin the start0 template')

const version = run('--version').trim()
assert(/^\d+\.\d+\.\d+/.test(version), `--version should print a semver, got: ${version}`)

const help = run('--help')
assert(help.includes('start0'), 'help should mention start0')
assert(help.includes('--ref'), 'help should list the --ref flag')

console.log('smoke ok')
