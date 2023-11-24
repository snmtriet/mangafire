import { useMemo, useState, useEffect, RefObject } from 'react'

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false)

  const observer = useMemo(
    () =>
      new IntersectionObserver(
        ([entry]) => {
          setIntersecting(entry.isIntersecting)
        },
        {
          threshold: 0.8,
        }
      ),
    []
  )

  useEffect(() => {
    if (ref.current) {
      observer.observe(ref.current)
      return () => observer.disconnect()
    }
  }, [ref, observer])

  return isIntersecting
}
