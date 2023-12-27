import {ImageResponse} from 'next/og'
import {Josefin_Sans} from "next/font/google";
import Image from "next/image";
import {Brand} from "@/components/Brand/Brand";
import homepageStyles from "@/styles/homepage.module.css";
import backgroundImage from "@/public/images/portfolio-background.webp";

export const runtime = 'edge'

export const alt = `Vivien L'Helguen`
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function ImageRender() {
  return new ImageResponse(
    <>
      <Image
        className={homepageStyles.background}
        src={backgroundImage}
        alt={''}
        placeholder={"blur"}
        loading={"eager"}
        sizes={"(max-width: 768px) 100vw, 80vw"}
      />
      <Brand name={'Vivien\nL\'Hel\u00ADguen'}
             subtext={'Webdev'} position={'Nantes'}/>
    </>
  ),
    {...size,
    fonts: [
      {
        name: 'Josefin Sans',
        data: Josefin_Sans,
        style: 'normal',
        weight: '400'
      }
    ]}
}