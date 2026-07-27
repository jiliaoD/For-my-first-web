import {
  ArrowDownRight,
  Flower2,
  NotebookText,
  Pause,
  Volume2,
  VolumeX,
  Wind,
} from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { heroStats, heroVisual, navItems } from '@/data/siteContent'
import { useAmbientPlayer } from '@/hooks/useAmbientPlayer'

export function HeroSection() {
  const reduceMotion = useReducedMotion()
  const easeOut = 'easeOut' as const
  const { isPlaying, isSupported, toggle } = useAmbientPlayer()

  const riseIn = (delay = 0) => ({
    initial: { opacity: 0, y: reduceMotion ? 0 : 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.76, ease: 'easeOut' as const, delay },
  })

  return (
    <section className="section hero" id="top">
      <div aria-hidden="true" className="hero__orb hero__orb--left" />
      <div aria-hidden="true" className="hero__orb hero__orb--right" />

      <motion.nav
        aria-label="站点区块导航"
        className="surface top-nav"
        {...riseIn(0)}
      >
        {navItems.map((item) => (
          <a className="nav-link" href={item.href} key={item.href}>
            {item.label}
          </a>
        ))}
      </motion.nav>

      <div className="hero__layout">
        <div className="hero__content">
          <motion.p className="hero__eyebrow" {...riseIn(0.08)}>
            Kato Megumi Impression Archive
          </motion.p>

          <motion.h1 {...riseIn(0.14)}>
            在轻风里，让她慢慢成为主角
          </motion.h1>

          <motion.p className="hero__description" {...riseIn(0.2)}>
            这不是角色海报站，而是一页围绕加藤惠气质展开的印象整理。它把春日、
            日常、留白与轻微动效压成一条安静的叙事线，让“低存在感”逐步显出真正的分量。
          </motion.p>

          <motion.div className="hero__actions" {...riseIn(0.26)}>
            <a className="button button--primary" href="#overview">
              进入角色概览
              <ArrowDownRight size={16} />
            </a>
            <a className="button button--ghost" href="#gallery">
              查看视觉停留
            </a>
          </motion.div>

          <motion.article className="surface hero__policy" {...riseIn(0.32)}>
            {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
            <div>
              <strong>现在可以手动开氛围音</strong>
              <p>
                页面新增了可开关的春日氛围音。默认保持安静，点一下再让这页多一点风和停留感。
              </p>
            </div>
          </motion.article>

          <motion.div className="hero__audio-row" {...riseIn(0.35)}>
            <button
              className={`button ${isPlaying ? 'button--soft' : 'button--ghost'}`}
              disabled={!isSupported}
              onClick={() => void toggle()}
              type="button"
            >
              {isPlaying ? <Pause size={16} /> : <Volume2 size={16} />}
              {isPlaying ? '暂停春日氛围音' : '开启春日氛围音'}
            </button>
            <p className="hero__audio-tip">
              {isSupported
                ? '音乐已经接成本地文件，仍然需要你手动开启。'
                : '当前环境不支持音频播放，音乐按钮会自动降级。'}
            </p>
          </motion.div>

          <div className="hero__stats">
            {heroStats.map((item, index) => (
              <motion.article
                className="surface hero-stat"
                key={item.label}
                {...riseIn(0.38 + index * 0.08)}
              >
                <p>{item.label}</p>
                <strong>{item.value}</strong>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="surface hero__visual"
          initial={{
            opacity: 0,
            scale: reduceMotion ? 1 : 0.985,
            y: reduceMotion ? 0 : 18,
          }}
          transition={{ duration: 0.88, ease: easeOut, delay: 0.18 }}
        >
          <div aria-hidden="true" className="hero__visual-aura" />
          <div className="hero__visual-photo">
            <img
              alt={heroVisual.alt}
              className="hero__visual-image"
              loading="eager"
              src={heroVisual.image}
            />
          </div>
          <div className="hero__visual-copy">
            <span>Spring Private Mode</span>
            <h2>现在，不只剩空气感</h2>
            <p>
              主视觉图、风感浮层和手动开启的轻氛围音一起加入后，这一屏终于更像一个真的角色主题页了。
            </p>
          </div>

          <div className="hero__visual-stack" aria-hidden="true">
            <div className="hero__visual-panel hero__visual-panel--tall" />
            <div className="hero__visual-panel hero__visual-panel--wide" />
            <div className="hero__visual-line" />
          </div>

          <div className="hero__badges">
            <div className="surface hero-badge">
              <Flower2 size={18} />
              <div>
                <strong>樱花与主视觉图</strong>
                <p>现在有了真正可停留的画面主体</p>
              </div>
            </div>
            <div className="surface hero-badge">
              <Wind size={18} />
              <div>
                <strong>细微动效</strong>
                <p>模糊、漂移、淡入，而不是夸张炫技</p>
              </div>
            </div>
            <div className="surface hero-badge">
              <NotebookText size={18} />
              <div>
                <strong>致敬型表达</strong>
                <p>围绕公开稳定设定做轻剧透整理</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
