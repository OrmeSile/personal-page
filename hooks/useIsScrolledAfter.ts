'use client'
import {RefObject, useEffect, useState} from "react";

export const useIsScrolledAfter = (ref: RefObject<HTMLElement>, container: RefObject<HTMLElement>, offset: number) => {
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
    const containerCopy = container.current
    containerCopy!.addEventListener('scroll', getElementLowestPosition)
    return () => {
      containerCopy!.removeEventListener('scroll', getElementLowestPosition)
    }
  }, [])
  return isAfter
}