import Vimeo from '$lib/components/vimeo.svelte'
import { cleanup, render } from '@testing-library/svelte'
import { afterEach, describe, expect, it, vi } from 'vitest'

globalThis.IntersectionObserver = vi.fn(() => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
})) as unknown as typeof globalThis.IntersectionObserver

describe('Vimeo', () => {
  afterEach(() => cleanup())

  it('mounts', () => {
    const { container } = render(Vimeo)
    expect(container).toBeTruthy()
  })
})
