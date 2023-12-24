import brandStyles from './brand.module.css'
import {ForwardedRef, forwardRef} from "react";
import Position from "@/public/icons/map-marker.svg"

export const Brand = forwardRef(
  function Brand(
    {name, subtext, position}: { name: string, subtext: string, position: string },
    ref: ForwardedRef<HTMLDivElement>
  ) {

    return (
      <div ref={ref}
           id={'brand'}
           className={brandStyles.container}>
        <h1 className={brandStyles.title}>{name}</h1>
        <h2 className={brandStyles.subtext}>{subtext}</h2>
        <h3 className={`${brandStyles.subtext} ${brandStyles.position}`}><Position style={{stroke: 'var(--subtext-color)', height: '60%', overflow: 'visible'}}/>{position}</h3>
      </div>
    )
  })