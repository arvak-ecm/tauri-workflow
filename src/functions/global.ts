export function isValidEnumValue<T extends Record<string, string>>(enumObj: T, value: string): value is T[keyof T] {
  return Object.values(enumObj).includes(value as T[keyof T])
}

export const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1)
