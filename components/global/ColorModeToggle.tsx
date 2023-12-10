'use client'
import colorToggleStyles from '@/styles/colorToggle.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/stores/themeStore";
import Image from "next/image";
import moon from "@/public/icons/moon.svg"
import sun from "@/public/icons/sun.svg"
import {useEffect, useState} from "react";
import {setColorsByTheme} from "@/components/theme/StyleInjector";
import {init, switchTheme} from "@/stores/themeSlice";
import {COLORS} from "@/utils/theme";

const ColorModeToggle = () => {

  const theme = useSelector((state: RootState) => state.theme.value)
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState<boolean>(window.localStorage.getItem('color-mode') === 'light')
  useEffect(() => {
    const initialTheme = window.localStorage.getItem('color-mode')!
    dispatch(init(initialTheme))
  }, []);

  const handleClick = () => {
    setIsChecked(!isChecked)
    dispatch(switchTheme())
    setColorsByTheme(COLORS)
  }
  return (
      <label className={colorToggleStyles.switch} htmlFor={"checkbox"}>
        <Image src={moon} alt={""} className={colorToggleStyles.icon}/>
        <input type={"checkbox"} defaultChecked={isChecked} className={colorToggleStyles.input}
               id="checkbox"/>
        <div className={colorToggleStyles.slider} onClick={handleClick}></div>
        <Image src={sun} alt={""} className={colorToggleStyles.icon}/>
      </label>
  )
}

export default ColorModeToggle