import headerStyles from "@/styles/header.module.css"
import dynamic from "next/dynamic";
import colorToggleStyles from "@/styles/colorToggle.module.css";
import {useState} from "react";

export const Header = () => {
  const ColorModeToggle = dynamic(() => import('../global/ColorModeToggle'), {ssr: false})
  const isMobile = window.matchMedia('screen and (max-width: 768px)')
  return (
    <>
      {isMobile && (
        <>
          <label htmlFor={'menu'} className={headerStyles.menu}>
            <input type={"checkbox"} id={'menu'} className={headerStyles.checkbox}/>
            <div className={headerStyles.menuOpen}></div>
          </label>
        </>
      )}
      <h1 style={{position: 'absolute'}}>Vivien l'Helguen</h1>
      <header className={headerStyles.container}>
        <div className={headerStyles.child}>
          <ul className={headerStyles.list}>
            <li className={headerStyles.listItem}>Projets</li>
            <li className={headerStyles.listItem}>Cursus</li>
            <li className={headerStyles.listItem}>CV</li>
            <li className={headerStyles.listItem}>Contact</li>
            <li>
              <div className={colorToggleStyles.container}>
                <ColorModeToggle/>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}