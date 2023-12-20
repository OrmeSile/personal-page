'use client'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/stores/store";
import {useEffect, useState} from "react";
import flashStyles from "./flash.module.css"
import {remove} from "@/stores/flashSlice";
import ErrorSVG from "@/public/icons/circle-xmark.svg"
import SuccessSVG from "@/public/icons/circle-check.svg"
import InfoSVG from "@/public/icons/circle-information.svg"
import XMark from "@/public/icons/xmark.svg"

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
      closeAndRemoveFlash(id)
    }, 300000)
  }, [])

  const closeAndRemoveFlash = (id: number)=> {
    setIsVisible(false)
    dispatch(remove({id}))
  }



  const svg = () => {
    switch (type) {
      case "error":
        return <ErrorSVG
          className={`${flashStyles.icon} ${flashStyles[`icon-${type}`]}`}/>
      case "success":
        return <SuccessSVG
          className={`${flashStyles.icon} ${flashStyles[`icon-${type}`]}`}/>
      default:
        return <InfoSVG
          className={`${flashStyles.icon} ${flashStyles[`icon-${type}`]}`}/>
    }
  }

  return (isVisible && (
      <div className={`${flashStyles.flash} ${flashStyles[type]}`}>
        <div className={flashStyles.iconContainer}>
          {svg()}
        </div>
        <p>
          {message}
        </p>
        <div>
          <button className={flashStyles.close} onClick={() => closeAndRemoveFlash(id)}>
            <XMark/>
          </button>
        </div>
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

