'use client'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/stores/themeStore";
import moon from "@/public/icons/moon.svg"
import sun from "@/public/icons/sun.svg"
import {useEffect, useState} from "react";
import {setColorsByTheme} from "@/components/theme/StyleInjector";
import {init, switchTheme} from "@/stores/themeSlice";
import {COLORS} from "@/utils/theme";
import {IconSurroundedToggle, Toggle} from "@/components/toggle/Toggle";

export const ColorModeToggle = () => {

  const theme = useSelector((state: RootState) => state.theme.value)
  const dispatch = useDispatch()
  const [isChecked, setIsChecked] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    const initialTheme = window.localStorage.getItem('color-mode')!
    console.log(initialTheme)
    dispatch(init(initialTheme))
    console.log(isChecked)

    setIsChecked(initialTheme === 'light')
    console.log(isChecked)
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
            beforeIconSource={moon}
            afterIconSource={sun}
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