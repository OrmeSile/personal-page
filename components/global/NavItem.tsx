import listStyles from '@/styles/list.module.css'
import {useDispatch} from "react-redux";
import {set} from "@/stores/overflowSlice";

export const NavItem = (
  {
    text,
    link,
    children
  }: {
    text?: string,
    link?: string,
    children?: React.ReactNode
  }) => {

  const dispatch = useDispatch()
  return (
    <li className={listStyles.navItem}>
      {children}
      {link ?
        <a
          href={link}
           className={listStyles.link}
          onClick={() => dispatch(set(false))}
        >{text}</a> : <p>{text}</p>}
    </li>
  )
}