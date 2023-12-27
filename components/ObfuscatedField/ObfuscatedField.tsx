import {useBotDetection} from "@/hooks/useBotDetection";
import EnvelopeIcon from "@/public/icons/envelope.svg"
import PhoneIcon from "@/public/icons/phone-handset.svg"
import LinkIcon from "@/public/icons/link.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg"
import GithubIcon from "@/public/icons/github.svg"
import fieldStyles from "./field.module.css"

export const ObfuscatedField = ({content, id, type = 'p'}: {
  content: string,
  id?: string,
  type?: ObfuscationFieldType,
}) => {

  const botString = 'flagged As Bot'
  const isABot = useBotDetection()
  const Field = ({className} : {className: string}) => {
    switch (type) {
      case "link":
        return (
          <a className={className} href={isABot ? botString : content} target={'_blank'}>
            <LinkIcon className={'icon'}/>
            {isABot ? botString : content}
          </a>
        )
      case "linkedin":
        return (
          <a className={className} href={isABot ? botString : content} target={'_blank'}>
            <LinkedInIcon className={'icon'}/>
            LinkedIn
          </a>
        )
      case "github":
        return (
          <a className={className} href={isABot ? botString : content} target={'_blank'}>
            <GithubIcon className={'icon'}/>
            Github
          </a>
        )
      case "mail":
        return (
          <a className={className} href={isABot ? botString : `mailto:${content}`}>
            <EnvelopeIcon className={'icon'}/>
            {isABot ? botString : content}
          </a>
        )
      case "phone":
        return (
          <a className={className} href={isABot ? '/' : `tel:${content}`}>
            <PhoneIcon className={'icon'}/>
            {isABot ? botString : content}
          </a>
        )
      default:
        return <p
          className={className}>{isABot ? 'nope' : content}</p>
    }
  }
  return (
    <Field className={fieldStyles.field}/>
  )
}