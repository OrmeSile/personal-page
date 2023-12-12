import Image from "next/image";
import colorToggleStyles from "@/styles/colorToggle.module.css";
import gear from "@/public/icons/gear.svg"

export const Toggle = (
  {
    isChecked = true,
    handleClick = () => {
    },
    disabled = false,
    onChange = () => {}
  }) => {
  return (
    <label
      className={colorToggleStyles.switch}
      htmlFor={"checkbox"}
    >
      <input
        type={"checkbox"}
        checked={isChecked}
        className={colorToggleStyles.input}
        disabled={disabled}
        onChange={onChange}
        id="checkbox"
      />
      <div
        className={`${colorToggleStyles.slider} ${disabled && colorToggleStyles.disabled}`}
        onClick={handleClick}
      />
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
    direction = 'horizontal',
    onChange = () => {},
  }
    : {
    disabled?: boolean,
    beforeIconSource?: string | null,
    afterIconSource?: string | null,
    isChecked?: boolean,
    handleClick?: () => void,
    direction?: 'horizontal' | 'vertical',
    onChange?: () => void
  }) => {
  return (
    <div
      className={`${colorToggleStyles.container} ${direction === 'horizontal' ? colorToggleStyles.horizontal : colorToggleStyles.vertical}`}
    >
      <Image
        src={beforeIconSource ? beforeIconSource : gear}
        alt={""}
        className={`${!beforeIconSource && colorToggleStyles.loading} ${colorToggleStyles.icon}`}
      />
      <Toggle
        isChecked={isChecked}
        handleClick={handleClick}
        disabled={disabled}
        onChange={onChange}
      />
      <Image
        src={afterIconSource ? afterIconSource : gear}
        alt={""}
        className={`${!afterIconSource && colorToggleStyles.loading} ${colorToggleStyles.icon}`}
      />
    </div>
  )
}