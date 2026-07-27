import { useCallback, useEffect, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import useEmblaCarousel from 'embla-carousel-react'
import { gallerySlides } from '@/data/siteContent'

export function ImpressionCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start', loop: false })
  const [activeIndex, setActiveIndex] = useState(0)

  const updateActiveIndex = useCallback(() => {
    if (!emblaApi) {
      return
    }

    setActiveIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) {
      return
    }

    updateActiveIndex()
    emblaApi.on('select', updateActiveIndex)
    emblaApi.on('reInit', updateActiveIndex)

    return () => {
      emblaApi.off('select', updateActiveIndex)
      emblaApi.off('reInit', updateActiveIndex)
    }
  }, [emblaApi, updateActiveIndex])

  return (
    <div className="carousel-shell">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {gallerySlides.map((slide, index) => (
            <div className="embla__slide" key={slide.title}>
              <article className="surface gallery-slide">
                <div className={`gallery-slide__visual gallery-slide__visual--${index + 1}`}>
                  <img
                    alt={slide.alt}
                    className="gallery-slide__image"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    src={slide.image}
                  />
                  <div className="gallery-slide__label">{slide.kicker}</div>
                </div>

                <div className="gallery-slide__content">
                  <p className="gallery-slide__kicker">{slide.kicker}</p>
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>

                  <ul className="gallery-slide__details">
                    {slide.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>

                  <p className="gallery-slide__caption">{slide.caption}</p>
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-footer">
        <div className="carousel-dots" aria-label="视觉停留切换">
          {gallerySlides.map((slide, index) => (
            <button
              aria-label={`查看 ${slide.title}`}
              aria-pressed={activeIndex === index}
              className="carousel-dot"
              key={slide.title}
              onClick={() => emblaApi?.scrollTo(index)}
              type="button"
            />
          ))}
        </div>

        <div className="carousel-controls">
          <button
            aria-label="查看上一张视觉卡片"
            className="carousel-control"
            onClick={() => emblaApi?.scrollPrev()}
            type="button"
          >
            <ArrowLeft size={16} />
          </button>
          <button
            aria-label="查看下一张视觉卡片"
            className="carousel-control"
            onClick={() => emblaApi?.scrollNext()}
            type="button"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}
