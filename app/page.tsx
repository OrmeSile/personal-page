'use client'
import backgroundImage from "@/public/images/portfolio-background.webp";
import Image from "next/image";
import homepageStyles from "@/styles/homepage.module.css"
import {Header} from "@/components/global/Header";
import {ProjectCard} from "@/components/Article/ProjectCard";
import {Article} from "@/components/Article/Article";
import {Section} from "@/components/Article/Section";
import movieList from '@/public/images/movie-list.png'
import memoLists from "@/public/images/memo-lists.png"
import counterSpell from "@/public/images/counterspell.png"
import {Brand} from "@/components/Brand/Brand";
import {GridContainer} from "@/components/Article/GridContainer";
import {FlashContainer} from "@/components/Flash/FlashContainer";
import {OverflowBlock} from "@/components/global/OverflowBlock";
import {useRef} from "react";
import {useIsScrolledAfter} from "@/hooks/useIsScrolledAfter";
import {CursusBlock} from "@/components/Cursus/CursusBlock";
import {PDFViewer} from "@/components/CV/PDFViewer";
import {IntroBlock} from "@/components/Article/IntroBlock";
import {ObfuscatedField} from "@/components/ObfuscatedField/ObfuscatedField";


export default function Home() {
  const brandRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLElement>(null)
  const isAfter = useIsScrolledAfter(200, brandRef)
  return (
    <>
      <OverflowBlock/>
      <FlashContainer/>
      <Header isAfter={isAfter}/>
      <main ref={scrollContainerRef} className={homepageStyles.main}>
        <Image
          className={homepageStyles.background}
          src={backgroundImage}
          alt={''}
          placeholder={"blur"}
          loading={"eager"}
          sizes={"(max-width: 768px) 100vw, 80vw"}
        />
        <Brand ref={brandRef} name={'Vivien\nL\'Hel\u00ADguen'}
               subtext={'Webdev'} position={'Nantes'}/>
        <IntroBlock/>
        <Article id={'#projets'}>
          <Section id={'projets'} title={'Projets'}
                   description={`Voici une sélection de projets sur lesquels j'ai pu travailler et me former.`}>
            <GridContainer>
              <
                ProjectCard
                technologies={[
                  "next",
                  "reactjs",
                  "typescript",
                  'prisma',
                  "postgresql",
                  "docker"
                ]}
                src={memoLists}
                alt={''}
                title={'Memos'}
                link={'https://github.com/OrmeSile/memolists'}
                description={`Projet personnel. Découverte de NextJS et de son écosystème, après plusieurs mois sans utiliser de React. C'était aussi un moyen pour moi d'appréhender le fonctionnement du SSR, et des Server/Client components.`}

              />
              <ProjectCard
                title={'Counterspell'}
                alt={''}
                src={counterSpell}
                technologies={[
                  'vue',
                  "typescript",
                  'vite',
                  'codeigniter',
                  "mariadb",
                  "gitlab",
                  "apache"
                ]}
                description={`Projet de stage. Découverte de Vue, ainsi que de CodeIgniter, framework historique PHP.
                 Point de complexité: le schéma de base de données, étant donné la grande quantité de paramètres d'une carte à collectionner.`}
              />
              <ProjectCard
                technologies={[
                  'symfony',
                  'php',
                  'postgresql',
                  "docker"
                ]}
                src={movieList}
                alt={''}
                title={'Movie List'}
                link={'https://github.com/OrmeSile/movie-list'}
                description={`Projet personnel antérieur à mes études. Découverte de Symfony et réalisation d'un site en n'utilisant que la documentation du framework.`}
              />
            </GridContainer>
          </Section>
        </Article>
        <Article>
          <Section id={'cursus'} title={'Cursus'}>
            <CursusBlock/>
          </Section>
        </Article>
        <Article>
          <Section id={'contact'} title={'Contact'}>
            <div>
              <ObfuscatedField content={process.env.NEXT_PUBLIC_MAIL!}
                               id={'mail'} type={"mail"}/>
              <ObfuscatedField content={process.env.NEXT_PUBLIC_PHONE!}
                               id={'phone'} type={'phone'}/>
              <ObfuscatedField content={process.env.NEXT_PUBLIC_LINKEDIN!}
                               id={'linkedin'} type={"linkedin"}/>
              <ObfuscatedField content={process.env.NEXT_PUBLIC_GITHUB!}
                               id={'github'} type={'github'}/>
            </div>
          </Section>
        </Article>
        <Article>
          <Section id={'cv'} title={'CV'}>
            <PDFViewer/>
          </Section>
        </Article>
      </main>
    </>
  )
}
