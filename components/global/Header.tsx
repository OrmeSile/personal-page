'use client'
import headerStyles from "@/styles/header.module.css"
import {useIsLargeMediaQuery} from "@/hooks/useIsLargeMediaQuery";
import React, {useEffect, useState} from "react";
import {ColorModeToggle} from "@/components/global/ColorModeToggle";
import {NavItem} from "@/components/global/NavItem";
import {useDispatch, useSelector} from "react-redux";
import {set, toggle} from "@/stores/overflowSlice";
import {RootState} from "@/stores/store";

export const Header = ({extend}: { extend: boolean }) => {
  const isLarge = useIsLargeMediaQuery()
  const dispatch = useDispatch()
  const isChecked = useSelector((state:RootState) => state.overflow.visible)

  useEffect(() => {
    dispatch(set(false))
  }, [isLarge, dispatch])

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

  const largeContainerScroll = isLarge && extend
    ?
    {
      container: {
        top: '3rem',
        width: '10rem',
      } as React.CSSProperties,
      child: {
        height: 'auto',
        padding: '2rem 2rem',
        gap: 0
      }
    }
    :
    {
      container: {},
      child: {}

    }
  const isLargeDisplay = isLarge ? {display: 'none'} : undefined

  const handleChange = () => {
    dispatch(toggle())
  }

  return (
    <header className={headerStyles.container}
            style={{...checkedStyles.container, ...largeContainerScroll.container}}>
      <div>
        {extend && !isLarge && (
          <div className={headerStyles.brandContainer}>
            <h2
              className={headerStyles.followBrand}>Vivien
              L&apos;Helguen</h2>
          </div>)
        }

        <label htmlFor={'input'}
               style={{...checkedStyles.menu, ...isLargeDisplay}}
               className={headerStyles.menu}
        >
          <input type={"checkbox"} id={'input'}
                 checked={isChecked}
                 onChange={handleChange}
                 className={headerStyles.input}/>
          <div className={headerStyles.menuOpen}/>
          <div className={headerStyles.menuOpen}/>
          <div className={headerStyles.menuOpen}/>
        </label>
      </div>
      <div
        style={{...checkedStyles.child, ...largeContainerScroll.child}}
        className={headerStyles.child}>
        <ul style={isLarge && extend ?
          {
            flexFlow: 'column nowrap',
            gap: 0,
            height: '30rem'
          } :
          {}
        } className={`${headerStyles.list}`}>
          <NavItem text={'Accueil'} link={'#brand'}/>
          <NavItem text={'Projets'} link={'#projets'}/>
          <NavItem text={'Cursus'} link={'#cursus'}/>
          <NavItem text={'CV'} link={'#cv'}/>
          <NavItem text={'Contact'}/>
          <NavItem>
            <ColorModeToggle/>
          </NavItem>
        </ul>
      </div>
    </header>
  )
}
