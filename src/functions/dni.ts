//format dni Chile
export function formatDNI(dni: string): string {
  const cleanedDNI = dni.replace(/\D/g, '')
  const formattedDNI = cleanedDNI.replace(/(\d{1})(\d{3})(\d{3})(\d)/, '$1.$2.$3-$4')
  return formattedDNI
}

//generated dni chile random
export function generateRandomDNI(): string {
  const randomDNI = Math.floor(Math.random() * 10000000)
  return formatDNI(randomDNI.toString())
}
