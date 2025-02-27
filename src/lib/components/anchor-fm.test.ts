import AnchorFm from '$lib/components/anchor-fm.svelte'
import { cleanup, render } from '@testing-library/svelte'
import { afterEach, describe, expect, it, vi } from 'vitest'

globalThis.IntersectionObserver = vi.fn(() => ({
  observe: () => null,
  unobserve: () => null,
  disconnect: () => null,
})) as unknown as typeof globalThis.IntersectionObserver

describe('AnchorFm', () => {
  afterEach(() => cleanup())

  it('mounts', async () => {
    const { container } = render(AnchorFm)
    expect(container).toBeTruthy()
  })

  it.skip('has episode url', async () => {
    const { container } = render(AnchorFm, {
      episodeUrl:
        'purrfect-dev/embed/episodes/1-31---Delivering-Digital-Content-with-GraphCMS-e14g55c/a-a650v9a',
    })

    expect(container.querySelectorAll('h2')).toBe(
      '1.31 - Delivering Digital Content with GraphCMS'
    )
  })
})
