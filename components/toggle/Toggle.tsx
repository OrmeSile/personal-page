import colorToggleStyles from "@/styles/colorToggle.module.css";
import {ReactElement} from "react";

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
    beforeIcon = null,
    afterIcon = null,
    isChecked = true,
    handleClick,
    direction = 'horizontal',
    onChange = () => {},
  }
    : {
    disabled?: boolean,
    beforeIcon?: ReactElement | null,
    afterIcon?: ReactElement | null,
    isChecked?: boolean,
    handleClick?: () => void,
    direction?: 'horizontal' | 'vertical',
    onChange?: () => void
  }) => {
  return (
    <div
      className={`${colorToggleStyles.container} ${direction === 'horizontal' ? colorToggleStyles.horizontal : colorToggleStyles.vertical}`}
    >
      {beforeIcon}
      <Toggle
        isChecked={isChecked}
        handleClick={handleClick}
        disabled={disabled}
        onChange={onChange}
      />
      {afterIcon}
    </div>
  )
}