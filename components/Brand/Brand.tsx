import {Josefin_Sans} from "next/font/google"
import brandStyles from './brand.module.css'
const josefinSans = Josefin_Sans({subsets: ['latin']})
export const Brand = ({name, subtext}:{name: string, subtext: string}) => {
  return <div className={`${brandStyles.container} ${josefinSans.className}`}>
    <h1 className={brandStyles.title}>{name}</h1>
    <h2 className={brandStyles.subtext}>{subtext}</h2>
  </div>
}
