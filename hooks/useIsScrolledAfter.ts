'use client'
import {RefObject, useEffect, useRef, useState} from "react";

export const useIsScrolledAfter = (offset: number, ref: RefObject<HTMLElement>, container?: RefObject<HTMLElement>) => {
  const [isAfter, setIsAfter] = useState(false)
  const getElementLowestPosition = () => {
    const elementLowestPosition = ref.current?.getBoundingClientRect().bottom
    if (elementLowestPosition! <= offset) {
      setIsAfter(true)
    } else{
      setIsAfter(false)
    }
  }
  useEffect(() => {
    getElementLowestPosition()
    const scrollContainer = container ? container.current! : window
    scrollContainer.addEventListener('scroll', getElementLowestPosition)
    return () => {
      scrollContainer.removeEventListener('scroll', getElementLowestPosition)
    }
  }, [])
  return isAfter
}