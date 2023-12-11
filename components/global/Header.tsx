import headerStyles from "@/styles/header.module.css"
import dynamic from "next/dynamic";
import {IconSurroundedToggle, Toggle} from "@/components/toggle/Toggle"

export const Header = () => {
  const ColorModeToggle = dynamic(() => import('../global/ColorModeToggle').then(mod => mod.ColorModeToggle), {ssr: false, loading: () => <IconSurroundedToggle disabled={true}/>})
  return (
    <>
      {/*<h1 style={{position: 'absolute'}}>Vivien L'Helguen</h1>*/}
      <header className={headerStyles.container}>
        <label htmlFor={'input'} className={headerStyles.menu}>
          <input type={"checkbox"} id={'input'}
                 className={headerStyles.input}/>
          <div className={headerStyles.menuOpen}/>
          <div className={headerStyles.menuOpen}/>
          <div className={headerStyles.menuOpen}/>
        </label>
        <div className={headerStyles.child}>
          <ul className={headerStyles.list}>
            <li className={headerStyles.listItem}>Projets</li>
            <li className={headerStyles.listItem}>Cursus</li>
            <li className={headerStyles.listItem}>CV</li>
            <li className={headerStyles.listItem}>Contact</li>
            <li className={headerStyles.listItem}>
              <div>
                <ColorModeToggle/>
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  )
}