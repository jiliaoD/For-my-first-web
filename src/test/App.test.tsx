import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from '@/App'

describe('App', () => {
  it('renders the upgraded single-page Kato Megumi site with image and audio controls', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '在轻风里，让她慢慢成为主角' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: '现在，不只剩空气感' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: '开启春日氛围音' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: '加藤惠主题主视觉图' }),
    ).toBeInTheDocument()
  })
})
