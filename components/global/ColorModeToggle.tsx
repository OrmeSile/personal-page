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
    <>
      <IconSurroundedToggle
        beforeIconSource={moon}
        afterIconSource={sun}
        isChecked={isChecked}
        handleClick={handleClick}
      />
    </>
  )
}