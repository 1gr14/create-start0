import { describe, expect, expectTypeOf, it, mock } from 'bun:test'
import type * as IndexModule from './index.js'

// Mock the engine so tests never sign in or download anything. Record the calls.
const calls: Array<Record<string, unknown>> = []
mock.module('1gr14', () => ({
  runCreate: async (options: Record<string, unknown>) => {
    calls.push(options)
  },
}))

const { createStart0, template } = await import('./index.js')

describe('createStart0', () => {
  it('pins the template to start0', async () => {
    expect(template).toBe('start0')
    calls.length = 0
    await createStart0({ dir: 'my-app', ref: 'v0.1.0' })
    expect(calls).toEqual([{ dir: 'my-app', ref: 'v0.1.0', template: 'start0' }])
  })

  it('works with no options', async () => {
    calls.length = 0
    await createStart0()
    expect(calls).toEqual([{ template: 'start0' }])
  })

  it('never lets options override the template', async () => {
    calls.length = 0
    await createStart0({ template: 'other' } as never)
    expect(calls).toEqual([{ template: 'start0' }])
  })
})

// Type-level tests. This function is never called — `tsc` (and `tsgo`) check its body, nothing runs. The type-only
// import is used because the runtime import is dynamic (it must come after `mock.module`), which widens literals.
function assertTypes() {
  expectTypeOf<(typeof IndexModule)['template']>().toEqualTypeOf<'start0'>()
  expectTypeOf<(typeof IndexModule)['createStart0']>()
    .parameter(0)
    .toEqualTypeOf<{ dir?: string; site?: string; ref?: string } | undefined>()
}

describe('types', () => {
  it('compile-time type assertions hold', () => {
    expect(typeof assertTypes).toBe('function') // referenced so tsc checks it; never invoked
  })
})
