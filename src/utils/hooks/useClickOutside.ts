import { useEffect, useRef } from 'react'

const useClickOutside = (callback: () => void) => {
  const domNode = useRef<any>()
  useEffect(() => {
    const eventHandler = (event: MouseEvent) => {
      if (
        domNode.current &&
        !domNode.current.contains(event.target as HTMLDivElement)
      ) {
        callback()
      }
    }
    document.addEventListener('mousedown', eventHandler)

    return () => {
      document.removeEventListener('mousedown', eventHandler)
    }
  })
  return domNode
}

export default useClickOutside
