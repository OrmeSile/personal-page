'use client'
import backgroundImage from "@/public/images/portfolio-background.webp";
import Image from "next/image";
import homepageStyles from "@/styles/homepage.module.css"
import {Header} from "@/components/global/Header";
import {themeStore} from "@/stores/themeStore";
import {Provider} from "react-redux";

export default function Home() {

  return (
    <>
      <Header/>
      <main className={homepageStyles.main}>
        <Image
          className={homepageStyles.background}
          src={backgroundImage}
          alt={''}
          priority={true}
          placeholder={"blur"}
          sizes={"(max-width: 768px) 100vw, 80vw"}
        />
      </main>
    </>
  )
}
