import { runCreate } from '1gr14'

/** The template this package pins — the start0 SaaS boilerplate repo on 1gr14.dev. */
export const template = 'start0'

/**
 * The whole `create start0` flow with the template pinned: sign in if needed, download the latest start0 release from
 * 1gr14.dev, unpack, `git init`, and run start0's own `init` script. Everything else is `runCreate` from the `1gr14`
 * package.
 *
 * @example
 *   await createStart0({ dir: 'my-app' })
 */
export const createStart0 = async (options: { dir?: string; site?: string; ref?: string } = {}): Promise<void> => {
  await runCreate({ ...options, template })
}
