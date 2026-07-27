import { useCallback, useEffect, useRef, useState } from 'react'
import { withAssetVersion } from '@/lib/assetUrl'

type AmbientState = {
  isPlaying: boolean
  isSupported: boolean
  toggle: () => Promise<void>
}

type AudioContextCtor = typeof AudioContext
type WindowWithWebkitAudio = Window & {
  AudioContext?: AudioContextCtor
  webkitAudioContext?: AudioContextCtor
}

export function useAmbientPlayer(): AmbientState {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const audioContextRef = useRef<AudioContext | null>(null)
  const synthNodesRef = useRef<{
    gain: GainNode
    pulseGain: GainNode
    padOscillator: OscillatorNode
    overtoneOscillator: OscillatorNode
    pulseOscillator: OscillatorNode
  } | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const modeRef = useRef<'idle' | 'file' | 'synth'>('idle')
  const audioSrc = withAssetVersion('/audio/3d8mm-2d4t8.mp3')

  const stopAll = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }

    if (synthNodesRef.current) {
      synthNodesRef.current.padOscillator.stop()
      synthNodesRef.current.overtoneOscillator.stop()
      synthNodesRef.current.pulseOscillator.stop()
      synthNodesRef.current.gain.disconnect()
      synthNodesRef.current.pulseGain.disconnect()
      synthNodesRef.current = null
    }

    if (audioContextRef.current) {
      void audioContextRef.current.close()
      audioContextRef.current = null
    }

    modeRef.current = 'idle'
    setIsPlaying(false)
  }, [])

  const startSynthFallback = useCallback(async () => {
    if (typeof window === 'undefined') {
      setIsPlaying(false)
      return
    }

    const browserWindow = window as WindowWithWebkitAudio
    const AudioContextCtor =
      browserWindow.AudioContext || browserWindow.webkitAudioContext
    if (typeof AudioContextCtor === 'undefined') {
      setIsPlaying(false)
      return
    }

    if (!audioContextRef.current) {
      const audioContext = new AudioContextCtor()
      const masterGain = audioContext.createGain()
      masterGain.gain.value = 0.028

      const padOscillator = audioContext.createOscillator()
      padOscillator.type = 'triangle'
      padOscillator.frequency.value = 293.66

      const overtoneOscillator = audioContext.createOscillator()
      overtoneOscillator.type = 'sine'
      overtoneOscillator.frequency.value = 440

      const pulseOscillator = audioContext.createOscillator()
      pulseOscillator.type = 'sine'
      pulseOscillator.frequency.value = 659.25

      const padFilter = audioContext.createBiquadFilter()
      padFilter.type = 'lowpass'
      padFilter.frequency.value = 980
      padFilter.Q.value = 0.2

      const pulseGain = audioContext.createGain()
      pulseGain.gain.value = 0.008

      const pulseLfo = audioContext.createOscillator()
      pulseLfo.type = 'sine'
      pulseLfo.frequency.value = 0.18

      const pulseDepth = audioContext.createGain()
      pulseDepth.gain.value = 0.006

      padOscillator.connect(padFilter)
      overtoneOscillator.connect(padFilter)
      padFilter.connect(masterGain)

      pulseOscillator.connect(pulseGain)
      pulseGain.connect(masterGain)
      pulseLfo.connect(pulseDepth)
      pulseDepth.connect(pulseGain.gain)

      masterGain.connect(audioContext.destination)

      padOscillator.start()
      overtoneOscillator.start()
      pulseOscillator.start()
      pulseLfo.start()

      audioContextRef.current = audioContext
      synthNodesRef.current = {
        gain: masterGain,
        pulseGain,
        padOscillator,
        overtoneOscillator,
        pulseOscillator,
      }
    }

    if (audioContextRef.current.state === 'suspended') {
      await audioContextRef.current.resume()
    }

    modeRef.current = 'synth'
    setIsPlaying(true)
  }, [])

  const toggle = useCallback(async () => {
    const hasAudioSupport =
      typeof window !== 'undefined' &&
      (typeof window.Audio !== 'undefined' ||
        typeof (window as WindowWithWebkitAudio).AudioContext !== 'undefined' ||
        typeof (window as WindowWithWebkitAudio).webkitAudioContext !== 'undefined')

    if (!hasAudioSupport) {
      setIsPlaying(false)
      return
    }

    if (
      (audioRef.current && !audioRef.current.paused) ||
      modeRef.current === 'synth'
    ) {
      stopAll()
      return
    }

    if (typeof window.Audio !== 'undefined') {
      if (!audioRef.current) {
        const audio = new window.Audio(audioSrc)
        audio.loop = true
        audio.volume = 0.42
        audio.preload = 'auto'
        audioRef.current = audio
      }

      try {
        await audioRef.current.play()
        modeRef.current = 'file'
        setIsPlaying(true)
        return
      } catch {
        if (audioRef.current) {
          audioRef.current.pause()
          audioRef.current.currentTime = 0
        }
      }
    }

    await startSynthFallback()
  }, [audioSrc, startSynthFallback, stopAll])

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.Audio === 'undefined') {
      return
    }

    if (!audioRef.current) {
      const audio = new window.Audio(audioSrc)
      audio.loop = true
      audio.volume = 0.42
      audioRef.current = audio
    }

    const audio = audioRef.current
    const handleEnded = () => setIsPlaying(false)
    const handlePause = () => setIsPlaying(false)
    const handlePlay = () => setIsPlaying(true)

    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('play', handlePlay)

    return () => {
      if (!audioRef.current) {
        return
      }

      audioRef.current.pause()
      audioRef.current.currentTime = 0
      audioRef.current.removeEventListener('ended', handleEnded)
      audioRef.current.removeEventListener('pause', handlePause)
      audioRef.current.removeEventListener('play', handlePlay)
      audioRef.current = null
    }
  }, [audioSrc])

  useEffect(() => stopAll, [stopAll])

  return {
    isPlaying,
    isSupported:
      typeof window !== 'undefined' &&
      (typeof window.Audio !== 'undefined' ||
        typeof (window as WindowWithWebkitAudio).AudioContext !== 'undefined' ||
        typeof (window as WindowWithWebkitAudio).webkitAudioContext !== 'undefined'),
    toggle,
  }
}
