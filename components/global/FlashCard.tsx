'use client'
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store";
import {useFlashCard} from "@/hooks/useFlashCard";
import {useEffect, useState} from "react";

export const FlashCard = () => {
  const [isVisible, setIsVisible] = useState(false)
  const state = useSelector((state: RootState) => state.flash)
  useEffect(() => {
    setIsVisible(state.visible)
  }, [state.visible])
  useFlashCard('test', 'info')
  return (isVisible && <div>{JSON.stringify(state)}</div>)
}

export default FlashCard

