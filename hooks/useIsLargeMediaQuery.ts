import {useCallback, useEffect, useState} from "react";

export const useIsLargeMediaQuery = () => {
  const [isLarge, setIsLarge] = useState<boolean>(false)
  const updateTarget = useCallback((e: MediaQueryListEvent) => {
    setIsLarge(e.matches)
  }, [])

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    media.addEventListener('change', updateTarget)

    if(media.matches) setIsLarge(true)
    return () => media.removeEventListener('change', updateTarget)
  }, [])

  return isLarge
}