import { useEffect } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { motion, useReducedMotion } from 'motion/react'
import { gallerySlides } from '@/data/siteContent'
import { useSiteStore } from '@/store/useSiteStore'
import { SectionHeading } from './SectionHeading'
import { Reveal } from './Reveal'

export function GallerySection() {
  const reduceMotion = useReducedMotion()
  const activeSlide = useSiteStore((state) => state.activeSlide)
  const setActiveSlide = useSiteStore((state) => state.setActiveSlide)
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    containScroll: 'trimSnaps',
  })

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    const onSelect = () => {
      setActiveSlide(emblaApi.selectedScrollSnap())
    }

    onSelect()
    emblaApi.on('select', onSelect)

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi, setActiveSlide])

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()
  const canScrollPrev = emblaApi?.canScrollPrev() ?? false
  const canScrollNext = emblaApi?.canScrollNext() ?? false

  return (
    <section className="section" id="gallery">
      <Reveal>
        <div className="gallery__header">
          <SectionHeading
            eyebrow="Visual Pause"
            title="不用肖像，也能保留她的空气感"
            description="视觉停留区只使用抽象背景、纸面质地、线条和色块层次。它的作用不是代替角色，而是把春日、留白和后劲具体化。"
          />
          <div className="gallery__controls" aria-label="视觉轮播控制">
            <button
              className="gallery__control"
              disabled={!canScrollPrev}
              onClick={scrollPrev}
              type="button"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              className="gallery__control"
              disabled={!canScrollNext}
              onClick={scrollNext}
              type="button"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </Reveal>

      <div className="embla gallery-embla" ref={emblaRef}>
        <div className="embla__container">
          {gallerySlides.map((slide, index) => (
            <div className="embla__slide" key={slide.title}>
              <Reveal className="gallery-card" delay={index * 0.06}>
                <div className={`gallery-card__art gallery-card__art--${index + 1}`}>
                  <div className="gallery-card__glow" />
                  <div className="gallery-card__paper" />
                  <div className="gallery-card__frame" />
                  <motion.div
                    animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                    className="gallery-card__orbit"
                    transition={
                      reduceMotion
                        ? undefined
                        : {
                            duration: 8 + index,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: 'easeInOut',
                          }
                    }
                  />
                  <div className="gallery-card__caption">{slide.caption}</div>
                </div>

                <div className="gallery-card__content">
                  <div className="gallery-card__copy">
                    <p className="gallery-card__kicker">{slide.kicker}</p>
                    <h3>{slide.title}</h3>
                    <p>{slide.description}</p>
                  </div>

                  <ul className="gallery-card__details">
                    {slide.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
      </div>

      <div className="gallery__pagination" aria-label="视觉轮播分页">
        {gallerySlides.map((slide, index) => (
          <button
            aria-current={activeSlide === index}
            aria-label={`切换到 ${slide.title}`}
            className="gallery__dot"
            key={slide.title}
            onClick={() => emblaApi?.scrollTo(index)}
            type="button"
          />
        ))}
      </div>
    </section>
  )
}
