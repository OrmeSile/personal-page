import headerStyles from "@/styles/header.module.css"

export const Header = () => {
  return (
    <header className={headerStyles.container}>
      <div className={headerStyles.child}>
        <ul className={headerStyles.list}>
          <li className={headerStyles.listItem}>Projets</li>
          <li className={headerStyles.listItem}>Cursus</li>
          <li className={headerStyles.listItem}>CV</li>
          <li className={headerStyles.listItem}>Contact</li>
        </ul>
      </div>
    </header>
  )
}