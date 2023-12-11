import Image from "next/image";
import colorToggleStyles from "@/styles/colorToggle.module.css";
import gear from "@/public/icons/gear.svg"

export const Toggle = (
  {
    isChecked = true,
    handleClick = () => {},
    disabled = false
  }) => {
  return (
    <label className={colorToggleStyles.switch} htmlFor={"checkbox"}>
      <input type={"checkbox"} defaultChecked={isChecked}
             className={colorToggleStyles.input}
             disabled={disabled}
             id="checkbox"/>
      <div className={`${colorToggleStyles.slider} ${disabled && colorToggleStyles.disabled}`} onClick={handleClick}></div>
    </label>
  )
}

export const IconSurroundedToggle = (
  {
    disabled = false,
    beforeIconSource = null,
    afterIconSource = null,
    isChecked = true,
    handleClick,
    direction = 'horizontal'
  }
    : {
    disabled?: boolean,
    beforeIconSource?: string | null,
    afterIconSource?: string | null,
    isChecked?: boolean,
    handleClick?: () => void,
    direction?: 'horizontal' | 'vertical'
  }) => {
  return (
    <div
      className={`${colorToggleStyles.container} ${direction === 'horizontal' ? colorToggleStyles.horizontal : colorToggleStyles.vertical}`}>
      <Image src={beforeIconSource ? beforeIconSource : gear} alt={""}
             className={`${!beforeIconSource && colorToggleStyles.loading} ${colorToggleStyles.icon}`}/>
      <Toggle isChecked={isChecked} handleClick={handleClick} disabled={disabled}/>
      <Image src={afterIconSource ? afterIconSource : gear} alt={""} className={`${!afterIconSource && colorToggleStyles.loading} ${colorToggleStyles.icon}`}/>
    </div>
  )
}