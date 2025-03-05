import { it, expect } from 'vitest'
import { hello } from './index'

it('returns default message', () => {
  const result = hello()
  expect(result).toBe('Hello, World!')
})

it.each(['Avenue3', 'Vitest'])('returns custom message: %s', (val: string) => {
  const result = hello(val)
  expect(result).toBe(`Hello, ${val}!`)
})
