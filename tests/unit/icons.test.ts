import { describe, expect, it, vi } from 'vitest'

import { getSocialIcon, resolveIconMeta } from '@/utils/icons'

describe('icons utils', () => {
  it('returns icon metadata for stable ids', () => {
    expect(resolveIconMeta({ id: 'typescript', label: 'TypeScript' })).toEqual({
      name: 'brand-typescript',
      toneClass: 'icon-tone-typescript',
    })
  })

  it('returns icon metadata from known labels when id is not provided', () => {
    expect(resolveIconMeta({ label: 'Nuxt Content' })).toEqual({
      name: 'brand-nuxt-content',
      toneClass: 'icon-tone-nuxt-content',
    })
  })

  it('returns fallback icon metadata for unknown labels', () => {
    expect(resolveIconMeta({ label: 'unknown-tech', warnOnMissing: false })).toEqual({
      name: 'fallback-circle',
      toneClass: 'icon-tone-muted',
    })
  })

  it('warns once for unresolved icon mapping in dev-like mode', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    resolveIconMeta({ id: 'unknown-id', source: 'test-suite', warnOnMissing: true })
    resolveIconMeta({ id: 'unknown-id', source: 'test-suite', warnOnMissing: true })

    expect(warnSpy).toHaveBeenCalledTimes(1)
    expect(warnSpy.mock.calls[0]?.[0]).toContain('id:unknown-id')

    warnSpy.mockRestore()
  })

  it('does not warn when warnOnMissing is disabled', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})

    resolveIconMeta({ id: 'another-unknown-id', warnOnMissing: false })

    expect(warnSpy).not.toHaveBeenCalled()

    warnSpy.mockRestore()
  })

  it('prefers id mapping over label mapping', () => {
    expect(resolveIconMeta({ id: 'vue', label: 'TypeScript' })).toEqual({
      name: 'brand-vue',
      toneClass: 'icon-tone-vue',
    })
  })

  it('returns social icon name by platform', () => {
    expect(getSocialIcon('github')).toBe('github')
    expect(getSocialIcon('email')).toBe('email')
  })
})
