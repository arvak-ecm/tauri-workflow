export const getInicialStateStore = (key: string) => {
  let stored = localStorage.getItem(key)
  return stored !== null ? JSON.parse(stored) : null
}
