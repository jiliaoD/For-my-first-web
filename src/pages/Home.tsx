import { Flower2, Music4, NotebookPen, Sparkles, Waypoints } from 'lucide-react'
import { HeroSection } from '@/components/HeroSection'
import { ImpressionCarousel } from '@/components/ImpressionCarousel'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import {
  atmosphereQuotes,
  backgroundVisual,
  companionPanels,
  footerNotes,
  highlightCards,
  keyWords,
  materialPolicies,
  narrativeSteps,
  overviewFacts,
  overviewPoints,
} from '@/data/siteContent'

const highlightIcons = [Sparkles, Flower2, Waypoints]
const policyIcons = [NotebookPen, Music4, Sparkles]

export default function Home() {
  return (
    <div className="page-shell">
      <div
        aria-hidden="true"
        className="page-shell__photo-bg"
        style={{ backgroundImage: `url('${backgroundVisual}')` }}
      />
      <div aria-hidden="true" className="page-backdrop" />

      <HeroSection />

      <main className="page-main">
        <section className="section" id="overview">
          <Reveal>
            <SectionHeading
              description="站点不走“角色海报页”的思路，而是把身份、气质和叙事功能拆成更轻的阅读层次。"
              eyebrow="Overview"
              title="低存在感，也可以是一种很明确的主角气质"
            />
          </Reveal>

          <div className="overview-grid">
            <Reveal className="surface overview-panel" delay={0.08}>
              <p className="overview-panel__eyebrow">Character Notes</p>
              <h3>她不是被高声量定义的人物，而是会在停留之后成立的人。</h3>

              <ul className="overview-points">
                {overviewPoints.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>

              <div className="quote-stack">
                {atmosphereQuotes.map((quote) => (
                  <blockquote className="quote-card" key={quote}>
                    {quote}
                  </blockquote>
                ))}
              </div>
            </Reveal>

            <div className="overview-side">
              <Reveal className="fact-grid" delay={0.12}>
                {overviewFacts.map((fact) => (
                  <article className="surface fact-card" key={fact.label}>
                    <p>{fact.label}</p>
                    <strong>{fact.value}</strong>
                  </article>
                ))}
              </Reveal>

              <Reveal className="surface keyword-panel" delay={0.18}>
                <div className="keyword-panel__heading">
                  <span>印象关键词</span>
                  <p>把人物魅力翻译成页面语言时，最重要的是保留这些轻而稳定的词。</p>
                </div>

                <div className="keyword-cloud">
                  {keyWords.map((word) => (
                    <span className="keyword-chip" key={word}>
                      {word}
                    </span>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="section" id="highlights">
          <Reveal>
            <SectionHeading
              description="角色魅力并不来自夸张设定，而是来自越看越清晰的细节分量。"
              eyebrow="Highlights"
              title="她为什么会成立"
            />
          </Reveal>

          <div className="highlight-grid">
            {highlightCards.map((card, index) => {
              const Icon = highlightIcons[index] ?? Sparkles

              return (
                <Reveal className="surface highlight-card" delay={0.08 + index * 0.08} key={card.title}>
                  <div className="highlight-card__icon">
                    <Icon size={18} />
                  </div>
                  <p className="highlight-card__eyebrow">{card.eyebrow}</p>
                  <h3>{card.title}</h3>
                  <p>{card.body}</p>
                </Reveal>
              )
            })}
          </div>

          <div className="companion-grid">
            {companionPanels.map((panel, index) => (
              <Reveal className="surface companion-card" delay={0.16 + index * 0.1} key={panel.title}>
                <h3>{panel.title}</h3>
                <p>{panel.body}</p>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="section" id="narrative">
          <Reveal>
            <SectionHeading
              description="这里不复述大量剧情，而是只保留足够支撑页面节奏的作品印象。"
              eyebrow="Narrative"
              title="从背景里慢慢走向中心"
            />
          </Reveal>

          <div className="narrative-layout">
            <Reveal className="surface narrative-summary" delay={0.08}>
              <p className="narrative-summary__eyebrow">Page Rhythm</p>
              <h3>页面的明暗、留白和对比，会模拟“主角化过程”的节奏变化。</h3>
              <p>
                开头保留空气感和距离感，中段逐渐提高内容密度，后段留一个视觉停留区，最后再收回到克制说明。
              </p>
            </Reveal>

            <div className="narrative-steps">
              {narrativeSteps.map((step, index) => (
                <Reveal className="surface narrative-step" delay={0.14 + index * 0.08} key={step.step}>
                  <span className="narrative-step__index">{step.step}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="gallery">
          <Reveal>
            <SectionHeading
              description="这一段现在不再只是抽象块，而是加入了真正的主题图像，让页面在阅读之外也有明确的观感停留点。"
              eyebrow="Gallery"
              title="让图像、纸面感和风感一起进来"
            />
          </Reveal>

          <Reveal delay={0.08}>
            <ImpressionCarousel />
          </Reveal>
        </section>

        <section className="section" id="policy">
          <Reveal>
            <SectionHeading
              description="站点把素材合规和静态部署约束直接写进页面结构，而不是留到项目外说明里。"
              eyebrow="Policy"
              title="这是一个有意保持克制的素材方案"
            />
          </Reveal>

          <div className="policy-grid">
            {materialPolicies.map((policy, index) => {
              const Icon = policyIcons[index] ?? Sparkles

              return (
                <Reveal className="surface policy-card" delay={0.08 + index * 0.08} key={policy.title}>
                  <div className="policy-card__icon">
                    <Icon size={18} />
                  </div>
                  <h3>{policy.title}</h3>
                  <p>{policy.body}</p>
                </Reveal>
              )
            })}
          </div>
        </section>
      </main>

      <footer className="section site-footer" id="footer">
        <Reveal className="surface footer-panel">
          <div className="footer-panel__intro">
            <p className="footer-panel__eyebrow">Footer Note</p>
            <h2>把印象做成静态站，而不是素材仓库。</h2>
          </div>

          <div className="footer-notes">
            {footerNotes.map((note) => (
              <p key={note}>{note}</p>
            ))}
          </div>
        </Reveal>
      </footer>
    </div>
  )
}
