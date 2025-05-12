export const avatars = [
  'actor-chaplin',
  'alien-space',
  'animal-mutton',
  'apple-illness',
  'avocado-food',
  'away-face',
  'batman-comics',
  'bug-insect',
  'coffee-cup',
  'draw-love',
  'fighter-luchador',
  'lazybones-sloth'
]

export function getSrcAvatar(name: string) {
  return `/images/avatars/${avatars.map(avatar => `${avatar}.svg`).find(avatar => avatar.includes(name))}`
}

export function getRandomAvatar() {
  const randomAvatar = avatars[Math.floor(Math.random() * avatars.length)]
  return getSrcAvatar(randomAvatar)
}
