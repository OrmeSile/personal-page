import backgroundImage from "@/public/images/portfolio-background.png";
import Image from "next/image";
import homepageStyles from "@/styles/homepage.module.css"

export default function Home() {

  return (
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
  )
}
