export const dateMask = (value: string) =>
  value
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/(\d{2})(\d)/, '$1/$2')
    .replace(/\d{4}(\d)/, '$1')

export const currencyMask = (param: number | string): string => {
  if (!param) return '0,00'

  let value = ''

  if (typeof param === 'number') {
    param = param.toFixed(2)
  }

  if (String(param).includes('.') || String(param).includes(',')) {
    value = String(param)
  } else {
    value = `${String(param)}.00`
  }

  value = String(value).replaceAll('.', '').replaceAll(',', '')

  const v = `${(Number(value) / 100).toFixed(2)}`.split('.')

  const m: any = v[0]
    .split('')
    .reverse()
    .join('')
    .match(/.{1,3}/g)

  for (let i = 0; i < m.length; i += 1)
    m[i] = `${m[i].split('').reverse().join('')}.`

  const r = m.reverse().join('')

  const masked = `${r.substring(0, r.lastIndexOf('.'))},${v[1]}`

  if (masked === 'NaN,undefined') {
    return '0,00'
  }

  return masked
}
