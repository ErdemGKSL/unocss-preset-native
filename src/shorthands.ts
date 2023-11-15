import type { Preset } from 'unocss'

export const shorthands: Preset['autocomplete']['shorthands'] = {
  'num': `(${Array.from({ length: 10 }, (_, i) => i).join('|')})`,
  'direction': '(x|y)',
  'size': `(${Array.from({ length: 10 }, (_, i) => (i = i * 10) && `${i}px|${i}vw|${i}%|${i}vh`).join('|')})`,
  'percent': `(${Array.from({ length: 10 }, (_, i) => (i = i * 10) && `${i}%`).join('|')})`,
}