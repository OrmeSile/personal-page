import {useBotDetection} from "@/hooks/useBotDetection";
import EnvelopeIcon from "@/public/icons/envelope.svg"
import PhoneIcon from "@/public/icons/phone-handset.svg"
import LinkIcon from "@/public/icons/link.svg";
import LinkedInIcon from "@/public/icons/linkedin.svg"

export const ObfuscatedField = ({content, id, type = 'p', ...otherProps}: {
  content: string,
  id?: string,
  type?: ObfuscationFieldType,
  className?: string
}) => {
  const botString = 'flagged As Bot'
  const isABot = useBotDetection()
  const Field = ({style} : {style: React.CSSProperties}) => {
    switch (type) {
      case "link":
        return (
          <a href={isABot ? botString : content} target={'_blank'} style={style}>
            <LinkIcon className={'icon'}/>
            {isABot ? botString : content}
          </a>
        )
      case "linkedin":
        return (
          <a href={isABot ? botString : content} target={'_blank'} style={style}>
            <LinkedInIcon className={'icon'}/>
            LinkedIn
          </a>
        )
      case "mail":
        return (
          <a href={isABot ? botString : `mailto:${content}`} style={style}>
            <EnvelopeIcon className={'icon'}/>
            {isABot ? botString : content}
          </a>
        )
      case "phone":
        return (
          <a href={isABot ? '/' : `tel:${content}`} style={style}>
            <PhoneIcon className={'icon'}/>
            {isABot ? botString : content}
          </a>
        )
      default:
        return <p className={otherProps.className}>{isABot ? 'nope' : content}</p>
    }
  }
  return (
      <Field style={{display: 'flex',  gap: '5rem', height: '5rem', alignItems: 'center', fontSize: '2rem', color: 'var(--accent-color)'}}/>
  )
}