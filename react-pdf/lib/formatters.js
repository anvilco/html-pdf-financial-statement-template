export function formatDate (dateString) {
  return new Intl.DateTimeFormat('en-US').format(new Date(dateString))
}

export function formatDollar (dollar) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(dollar)
}

export function toUpperCaseFirstLetter (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
