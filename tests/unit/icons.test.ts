import { describe, expect, it, vi } from 'vitest'

import { getSocialIcon, resolveIconMetaById } from '@/utils/icons'

describe('icons utils', () => {
  it('returns icon metadata for stable ids', () => {
    expect(resolveIconMetaById('typescript')).toEqual({
      name: 'brand-typescript',
      toneClass: 'icon-tone-typescript',
    })
  })

  it('returns null when icon id is missing', () => {
    expect(resolveIconMetaById()).toBeNull()
  })

  it('returns fallback icon metadata for unknown ids', () => {
    expect(resolveIconMetaById('unknown-tech')).toEqual({
      name: 'fallback-circle',
      toneClass: 'icon-tone-muted',
    })
  })

  it('returns new apache mapping', () => {
    expect(resolveIconMetaById('apache')).toEqual({
      name: 'brand-apache',
      toneClass: 'icon-tone-apache',
    })
  })

  it('does not emit warnings for unknown ids', () => {
    const warnSpy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    resolveIconMetaById('another-unknown-id')
    expect(warnSpy).not.toHaveBeenCalled()
    warnSpy.mockRestore()
  })

  it('returns social icon name by platform', () => {
    expect(getSocialIcon('github')).toBe('github')
    expect(getSocialIcon('email')).toBe('email')
  })
})
