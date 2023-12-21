'use client'
import headerStyles from "@/styles/header.module.css"
import {useIsLargeMediaQuery} from "@/hooks/useIsLargeMediaQuery";
import React, {useEffect, useState} from "react";
import {ColorModeToggle} from "@/components/global/ColorModeToggle";
import {NavItem} from "@/components/global/NavItem";
import {useDispatch} from "react-redux";
import {set, toggle} from "@/stores/overflowSlice";


export const Header = () => {
  const [isChecked, setIsChecked] = useState(false)
  const isLarge = useIsLargeMediaQuery()
  const dispatch = useDispatch()

  useEffect(() => {
    setIsChecked(false)
    dispatch(set(false))
  }, [isLarge])


  const checkedStyles = isChecked ? {
    menu: {
      border: 'var(--btn-primary) 2px solid',
      borderRadius: '50%'
    } as React.CSSProperties,
    child: {
      margin: 0,
      background: 'var(--bg-secondary)',
      width: '60vw',
      transition: 'width .2s ease-out',
      visibility: 'visible',
      position: 'fixed',
    } as React.CSSProperties,
    container: {
      position: "fixed",
      width: '100%',
      height: '100vh',
      background: 'rgba(0,0,0,0.5)',
    } as React.CSSProperties
  } : {
    menu: {},
    child: {},
    container: {}
  }
  const isLargeDisplay = isLarge ? {display: 'none'} : undefined

  const handleChange = () => {
    setIsChecked(!isChecked)
    dispatch(toggle())
  }

  return (
    <header className={headerStyles.container} style={checkedStyles.container}>
      <label htmlFor={'input'}
             style={{...checkedStyles.menu, ...isLargeDisplay}}
             className={headerStyles.menu}
      >
        <input type={"checkbox"} id={'input'}
               checked={isChecked}
               onClick={handleChange}
               className={headerStyles.input}/>
        <div className={headerStyles.menuOpen}/>
        <div className={headerStyles.menuOpen}/>
        <div className={headerStyles.menuOpen}/>
      </label>
      <div
        style={{...checkedStyles.child}}
        className={headerStyles.child}>
        <ul className={`${headerStyles.list}`}>
          <NavItem text={'Projets'}/>
          <NavItem text={'Cursus'}/>
          <NavItem text={'CV'}/>
          <NavItem text={'Contact'}/>
          <NavItem>
            <ColorModeToggle/>
          </NavItem>
        </ul>
      </div>
    </header>
  )
}