import { describe, expect, it } from 'vitest'

import { getIconMeta, getSocialIcon } from '@/utils/icons'

describe('icons utils', () => {
  it('returns icon metadata for known labels', () => {
    expect(getIconMeta('TypeScript')).toEqual({
      name: 'simple-icons:typescript',
      color: '#3178C6',
    })
  })

  it('returns fallback icon metadata for unknown labels', () => {
    expect(getIconMeta('unknown-tech')).toEqual({
      name: 'mdi:circle-outline',
      color: '#888888',
    })
  })

  it('returns social icon name by platform', () => {
    expect(getSocialIcon('github')).toBe('simple-icons:github')
    expect(getSocialIcon('email')).toBe('mdi:email-outline')
  })
})
