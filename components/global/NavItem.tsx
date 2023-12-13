import listStyles from '@/styles/list.module.css'
import Link from "next/link";
export const NavItem = (
  {
    text,
    link,
    children
  } : {
    text?: string,
    link?: string,
    children?: React.ReactNode
  }) => {

  return (
    <li className={`${listStyles.navItem} ${link ? listStyles.hover : ''}`}>
      {children ? children : text}
      {link && <Link href={link}/>}
    </li>
  )
}