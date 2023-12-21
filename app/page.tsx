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
import brandStyles from "@/components/Brand/brand.module.css"


export default function Home() {
  return (
    <>
      <FlashContainer/>
      <Header/>
      <main className={homepageStyles.main}>
        <Image
          className={homepageStyles.background}
          src={backgroundImage}
          alt={''}
          placeholder={"blur"}
          loading={"eager"}
          sizes={"(max-width: 768px) 100vw, 80vw"}
        />
        <Brand name={`Vivien L'Hel\u00ADguen`} subtext={'Webdev'}/>
        <Article>
          <Section id={'projets'} title={'Projets'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa\n' +
            '              dicta dignissimos dolores illum nemo nostrum quae repellat! Amet,\n' +
            '              magni, quae. Cumque, earum error et eveniet illo ipsam iste\n' +
            '              voluptatibus.'}>
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
                description={` quae. Cumque, earum error et eveniet illo ipsam istevoluptatibus.`}

              />
              <ProjectCard
                title={'Counterspell'}
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
                description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpadicta dignissimos dolores illum nemo nostrum quae repellat! Amet,magni, quae. Cumque, earum error et eveniet illo ipsam istevoluptatibus.`}
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
                description={`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpadicta dignissimos dolores illum nemo nostrum quae repellat! Amet,magni, quae. Cumque, earum error et eveniet illo ipsam istevoluptatibus.`}
              />
            </GridContainer>
          </Section>
        </Article>
        <Article>
          <Section id={'cursus'} title={'Cursus'}>

          </Section>
        </Article>
      </main>
    </>
  )
}
