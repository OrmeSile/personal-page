import {Article} from "@/components/Article/Article";
import {Section} from "@/components/Article/Section";
export const IntroBlock = () => {
  return (
    <Article className={`intro`}>
      <Section id={'intro'} title={'Qui suis-je ?'}>
        <p>En reconversion depuis 2 ans et après avoir obtenu un titre Développeur Web/Web mobile à l&apos;école ENI, je recherche une entreprise Nantaise pour continuer mes études.</p>
        <p>À 30 ans, je peux être embauché en contrat professionnel. Le rythme annoncé est de deux semaines en entreprise et une semaine en école, durant un an et demi.</p>
        <p>Vous trouverez ici une courte présentation de mes projets de stage, d&apos;étude et d&apos;auto-formation. Vous trouverez mes informations de contact dans la rubrique dédiée !</p>
      </Section>
    </Article>
  )
}