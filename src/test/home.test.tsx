import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from '@/App'

describe('Home page', () => {
  it('renders the upgraded sections with image gallery and audio mood', () => {
    render(<App />)

    expect(
      screen.getByRole('heading', { name: '在轻风里，让她慢慢成为主角' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: '低存在感，也可以是一种很明确的主角气质',
      }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: '让图像、纸面感和风感一起进来' }),
    ).toBeInTheDocument()
    expect(
      screen.getByText('背景音乐改为手动开启的春日氛围音，进入页面时仍然保持安静，不会强行自动播放。'),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: '加藤惠主题轮播图二' }),
    ).toBeInTheDocument()
  })
})
