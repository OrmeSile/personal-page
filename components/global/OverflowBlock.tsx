'use client'
import {useSelector} from "react-redux";
import {RootState} from "@/stores/store";

export const OverflowBlock = () => {
  const {visible} = useSelector((state: RootState) => state.overflow)
  return (!visible &&
    <>
      {
        <div  className={'overflow-block'} style={{
          background: 'rgba(0,0,0,0.5)',
          width: '100%',
          height: '100%',
          overflow: 'hidden',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 1,
        }}/>}
    </>)

}