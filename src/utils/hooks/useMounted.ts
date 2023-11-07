import { useEffect, useState } from 'react'

const useMounted = (timeout: number = 500) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setMounted(true)
    }, timeout)
    return () => clearTimeout(timeoutId)
  }, [])
  return mounted
}

export default useMounted
