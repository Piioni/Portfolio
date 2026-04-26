export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
  })
}

export function formatDateRange(startDate: string, endDate?: string): string {
  const start = formatDate(startDate)
  const end = endDate ? formatDate(endDate) : 'Present'
  return `${start} - ${end}`
}
