export function formatDate(
  dateString: string,
  options: Intl.DateTimeFormatOptions = { month: 'short', year: 'numeric' },
): string {
  const date = new Date(dateString)

  if (Number.isNaN(date.getTime())) {
    return ''
  }

  return date.toLocaleDateString('en-US', options)
}

export function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate)
  const end = endDate ? formatDate(endDate) : 'Present'
  return `${start} - ${end}`
}
