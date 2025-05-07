//format dni Chile

function clear(dni: string): string {
  if (!dni) return ''
  return dni.replace(/[^0-9kK]/g, '')
}

function parserDni(dni: string): { body: string; digit: string } {
  const clearDni = clear(dni)
  return {
    body: clearDni.slice(0, -1),
    digit: clearDni.slice(-1)
  }
}

export function formatDNI(dni: string): string {
  if (!dni) {
    return ''
  }
  const { body, digit } = parserDni(dni)

  if (body.length === 0) {
    return digit
  }

  let fotmatBody = ''
  for (let i = body.length - 1, j = 0; i >= 0; i--, j++) {
    fotmatBody = body[i] + fotmatBody
    if (j % 3 === 2 && i !== 0) {
      fotmatBody = '.' + fotmatBody
    }
  }
  return fotmatBody + '-' + digit
}

//generated dni chile random
export function generateRandomDNI(): string {
  const randomDNI = Math.floor(Math.random() * 10000000)
  return formatDNI(randomDNI.toString())
}

export function validatedDni(dni: string) {
  const { body, digit } = parserDni(dni)
  const content = parseInt(body, 10)

  if (isNaN(content)) {
    return false
  }

  let sum = 0
  let factor = 2

  for (let i = content.toString().length - 1; i >= 0; i--) {
    sum += parseInt(content.toString()[i], 10) * factor
    factor = factor === 7 ? 2 : factor + 1
  }

  const result = 11 - (sum % 11)
  let dvCalc = result === 11 ? '0' : result === 10 ? 'K' : result.toString()

  return dvCalc.toUpperCase() === digit.toUpperCase()
}
