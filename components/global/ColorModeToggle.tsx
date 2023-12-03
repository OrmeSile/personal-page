'use client'
import colorToggleStyles from '@/styles/colorToggle.module.css'

export const ColorModeToggle = () => {

  return (
    <div className={colorToggleStyles.container}>
      <label className={colorToggleStyles.switch} htmlFor={"checkbox"}>
        <input type={"checkbox"} className={colorToggleStyles.input}
               id="checkbox"/>
        <div className={colorToggleStyles.slider}></div>
      </label>
    </div>
  )
}