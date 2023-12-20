'use client'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/stores/store";
import {useEffect, useState} from "react";
import flashStyles from "./flash.module.css"
import {remove} from "@/stores/flashSlice";
import ErrorSVG from "@/public/icons/circle-xmark.svg"
import SuccessSVG from "@/public/icons/circle-check.svg"
import InfoSVG from "@/public/icons/circle-information.svg"

const FlashCard = ({message, type, id}: {
  message: string,
  type: FlashType,
  id: number
}) => {
  const dispatch = useDispatch()
  const [isVisible, setIsVisible] = useState(true)

  //remove flash after 3 seconds
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false)
      dispatch(remove({id}))
    }, 300000)
  }, [])

  const svg = () => {
    switch (type){
      case "error": return ErrorSVG
      case "success": return SuccessSVG
      default: return InfoSVG
    }
  }
  console.log(svg())

  return (isVisible && (
      <div className={`${flashStyles.flash} ${flashStyles[type]}`}>
        <ErrorSVG width={100} height={100} stroke={'red'}/>
        <p>
          {message}
        </p>
      </div>
    )
  )
}

export const FlashContainer = () => {
  const state = useSelector((state: RootState) => state.flash)
  return (<div className={flashStyles.container}>
    {state.map((flash) => {
      return <FlashCard key={`${flash.message}-${flash.id}`}
                        message={flash.message}
                        type={flash.type}
                        id={flash.id}
      />
    })
    }
  </div>)
}

