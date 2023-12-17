import backgroundImage from "@/public/images/portfolio-background.webp";
import Image from "next/image";
import homepageStyles from "@/styles/homepage.module.css"
import {Header} from "@/components/global/Header";
import {ProjectCard} from "@/components/Article/ProjectCard";
import {Article} from "@/components/Article/Article";
import {Section} from "@/components/Article/Section";
import movieList from '@/public/images/movie-list.png'
import {Brand} from "@/components/Brand/Brand";
import {GridContainer} from "@/components/Article/GridContainer";
import dynamic from "next/dynamic";
import {useFlashCard} from "@/hooks/useFlashCard";


export default function Home() {
  const FlashCard = dynamic(() =>
    import('../components/global/FlashCard')
  )
  return (
    <>
      <FlashCard/>
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
        <Brand name={"Vivien L'Helguen"} subtext={'Webdev'}/>
        <Article>
          <Section id={'projects'} title={'Projects'}>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa
              dicta dignissimos dolores illum nemo nostrum quae repellat! Amet,
              magni, quae. Cumque, earum error et eveniet illo ipsam iste
              voluptatibus.</p>
            <GridContainer rows={2}>
              <ProjectCard
                src={movieList}
                alt={''}
                title={'Movie List'}
                link={'https://github.com/OrmeSile/movie-list'}
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  beatae cumque deleniti distinctio dolor eligendi eveniet fuga
                  impedit iste iusto labore laborum magni modi officia quos
                  saepe,
                  sapiente ullam voluptas?</p>
              </ProjectCard>
              <ProjectCard
                src={movieList}
                alt={''}
                title={'Movie List'}
                link={'https://github.com/OrmeSile/movie-list'}
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  beatae cumque deleniti distinctio dolor eligendi eveniet fuga
                  impedit iste iusto labore laborum magni modi officia quos
                  saepe,
                  sapiente ullam voluptas?</p>
              </ProjectCard>
              <ProjectCard
                src={movieList}
                alt={''}
                title={'Movie List'}
                link={'https://github.com/OrmeSile/movie-list'}
              >
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                  beatae cumque deleniti distinctio dolor eligendi eveniet fuga
                  impedit iste iusto labore laborum magni modi officia quos
                  saepe,
                  sapiente ullam voluptas?</p>
              </ProjectCard>
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
