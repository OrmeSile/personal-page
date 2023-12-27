'use client'
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store";
import {useEffect} from "react";

export const OverflowBlock = () => {
  const {visible} = useSelector((state: RootState) => state.overflow)
  useEffect(() => {
    if (visible) {
      document.body.style.overflowY = 'hidden'
    } else {
      document.body.style.overflowY = 'scroll'
    }
  }, [visible])
  return (visible &&
    <>
      {
        <div className={'overflow-block'} style={{
          background: 'rgba(0,0,0,0.5)',
          width: '100%',
          height: 'auto',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
          scrollbarGutter: 'stable'
        }}
        />
      }
    </>
  )
}