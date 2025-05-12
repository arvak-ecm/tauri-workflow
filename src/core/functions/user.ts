export function getInitialsUser(fullName: string): string {
  return fullName
    .split(' ')
    .filter(Boolean)
    .map(word => word[0].toUpperCase())
    .join('')
}
