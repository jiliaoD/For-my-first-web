import { create } from 'zustand'

type SiteState = {
  activeSlide: number
  setActiveSlide: (index: number) => void
}

export const useSiteStore = create<SiteState>((set) => ({
  activeSlide: 0,
  setActiveSlide: (index) => set({ activeSlide: index }),
}))
