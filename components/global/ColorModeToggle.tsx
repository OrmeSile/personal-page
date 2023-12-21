'use client'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/stores/store";
import Moon from "@/public/icons/moon.svg"
import Sun from "@/public/icons/sun.svg"
import {useEffect, useState} from "react";
import {setColorsByTheme} from "@/components/theme/StyleInjector";
import {init, switchTheme} from "@/stores/themeSlice";
import {COLORS} from "@/utils/theme";
import {IconSurroundedToggle} from "@/components/toggle/Toggle";
import colorToggleStyles from "@/styles/colorToggle.module.css";


export const ColorModeToggle = () => {

  const theme = useSelector((state: RootState) => state.theme.value)
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const initialTheme = window.localStorage.getItem('color-mode')!
    dispatch(init(initialTheme))
    setIsChecked(initialTheme === 'light')
    setIsClient(true)
  }, []);

  const handleChange = () => {
    const initialTheme = window.localStorage.getItem('color-mode')!
    setIsChecked(initialTheme === 'light')
  }


  const handleClick = () => {
    setIsChecked(!isChecked)
    dispatch(switchTheme())
    setColorsByTheme(COLORS)
  }
  return (
    <>
      {isClient ?
        (<IconSurroundedToggle
            beforeIcon={<Moon className={colorToggleStyles.icon}/>}
            afterIcon={<Sun className={colorToggleStyles.icon}/>}
            isChecked={isChecked}
            handleClick={handleClick}
            onChange={handleChange}
          />
        ) : (
          <IconSurroundedToggle disabled={true}/>
        )
      }
    </>
  )
}