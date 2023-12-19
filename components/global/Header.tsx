'use client'
import headerStyles from "@/styles/header.module.css"
import {useIsLargeMediaQuery} from "@/hooks/useIsLargeMediaQuery";
import React, {useEffect, useState} from "react";
import {ColorModeToggle} from "@/components/global/ColorModeToggle";
import {NavItem} from "@/components/global/NavItem";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "@/stores/store";
import {add} from "@/stores/flashSlice";


export const Header = () => {
  const [isChecked, setIsChecked] = useState(false)
  const isLarge = useIsLargeMediaQuery()
  const flashState = useSelector((state: RootState) => state.flash)
  const dispatch = useDispatch()
  useEffect(() => {
    if (!isLarge) setIsChecked(false)
    dispatch(add({message:'hello'}))
  }, [isLarge, dispatch])

  const largeStyles = isLarge ? {
    menu: {
      transition: 'none'
    } as React.CSSProperties,
    child: {
      alignItems: 'center',
      justifyContent: 'center',
      position: 'initial',
      transition: 'none',
      height: '5em',
      boxShadow: '0 2px 2px 0 rgba(0, 0, 0, 0.3)',
      borderRadius: '.5em',
      width: 'auto',
      padding: '0 2em',
      margin: 'auto',
    } as React.CSSProperties
  } : {
    menu: {
      'zIndex': 100,
      '--menu-toggle-side': '3rem',
      cursor: 'pointer',
      position: 'absolute',
      right: '1rem',
      top: '1rem',
      width: 'var(--menu-toggle-side)',
      height: 'var(--menu-toggle-side)',
      flexFlow: 'column nowrap',
      justifyContent: 'space-evenly',
      alignItems: 'center',
      transition: '.2s',
    } as React.CSSProperties,
    child: {
      position: 'absolute',
      height: '100vh',
      transition: '.2s ease-out',
      overflow: 'hidden',
      width: '0',
      alignItems: 'flex-start',
      background: 'var(--bg-secondary)',
    } as React.CSSProperties
  }
  const checkedStyles = isChecked && !isLarge ? {
    menu: {
      border: 'var(--btn-primary) 2px solid',
      borderRadius: '50%'
    } as React.CSSProperties,
    child: {
      margin: 0,
      transform: 'translateX(-50vw)',
      background: 'var(--bg-secondary)',
      width: '50vw',
      visibility: 'visible',
    } as React.CSSProperties
  } : {
    menu: {},
    child: {}
  }

  const handleChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <header className={headerStyles.container}>
        <button onClick={() => {
          dispatch(add({message: `test-${flashState.length}`}))
          setTimeout
        }
        }>add test</button>
        <label htmlFor={'input'}
               style={{...largeStyles.menu, ...checkedStyles.menu}}
               className={headerStyles.menu}
        >
          <input type={"checkbox"} id={'input'}
                 checked={isChecked && !isLarge}
                 onChange={handleChange}
                 className={headerStyles.input}/>
          <div className={headerStyles.menuOpen}/>
          <div className={headerStyles.menuOpen}/>
          <div className={headerStyles.menuOpen}/>
        </label>
        <div
          style={{...largeStyles.child, ...checkedStyles.child}}
          className={headerStyles.child}>
          <ul className={`${headerStyles.list}  ${!isLarge}`}>
            <NavItem link={'jkjkjk'} text={'Projets'}/>
            <NavItem text={'Cursus'}/>
            <NavItem text={'CV'}/>
            <NavItem text={'Contact'}/>
            <NavItem>
              <ColorModeToggle/>
            </NavItem>
          </ul>
        </div>
      </header>
    </>
  )
}