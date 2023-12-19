'use client'
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store";
import {useState} from "react";

const FlashCard = ({message}: {
  message: string,
  type: FlashType
}) => {
  const [isVisible, setIsVisible] = useState(true)
  setTimeout(() => {
    setIsVisible(false)
  }, 5000)
  return (isVisible && <div>{message}</div>)
}

export const FlashContainer = () => {
  const state = useSelector((state: RootState) => state.flash)
  return (<div style={{background: 'green', position: 'absolute'}}>
    {state.map((flash) => {
      return <FlashCard key={`${flash.message}-${flash.id}`}
                        message={flash.message} type={flash.type}/>
    })
    }
  </div>)
}

