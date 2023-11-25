import { useState, useEffect } from 'react'

const useScrollStatus = (): boolean => {
  const [isScrolling, setIsScrolling] = useState(false)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  const handleScroll = (): void => {
    const currentScrollPos = window.scrollY

    const scrolling = currentScrollPos !== prevScrollPos

    setIsScrolling(scrolling)
    setPrevScrollPos(currentScrollPos)
  }

  useEffect(() => {
    window.addEventListener('mousewheel', handleScroll)

    return () => {
      window.removeEventListener('mousewheel', handleScroll)
    }
  }, [prevScrollPos])

  return isScrolling
}

export default useScrollStatus
