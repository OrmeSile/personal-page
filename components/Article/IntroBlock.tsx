import {Article} from "@/components/Article/Article";
import {Section} from "@/components/Article/Section";
import {Josefin_Sans} from "next/font/google";
const josefinSans = Josefin_Sans({subsets: ['latin']})
export const IntroBlock = () => {
  return (
    <Article className={`intro ${josefinSans.className}`}>
      <Section id={'intro'} title={'Qui suis-je ?'}>
        TEST
      </Section>
    </Article>
  )
}