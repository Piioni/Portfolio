import { describe, expect, it } from 'vitest'

import { formatDate, formatDateRange } from '@/utils/format'

describe('format utils', () => {
  it('formats an ISO date using default options', () => {
    expect(formatDate('2026-04-20')).toBe('Apr 2026')
  })

  it('returns empty string for invalid dates', () => {
    expect(formatDate('not-a-date')).toBe('')
  })

  it('formats date ranges and handles present end date', () => {
    expect(formatDateRange('2025-04-01', '2025-06-01')).toBe('Apr 2025 - Jun 2025')
    expect(formatDateRange('2025-04-01')).toBe('Apr 2025 - Present')
  })
})
