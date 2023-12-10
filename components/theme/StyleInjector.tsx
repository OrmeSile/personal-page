'use client'
import {COLORS} from "@/utils/theme";
import {themeStore} from "@/stores/themeStore";
import {Provider} from "react-redux";

//forced to match minifier output to avoid a React SRR hydration error.
//Notably, .contat() instead of a string literal
export const setColorsByTheme = (currentColors? : typeof COLORS) => {
  const colors = currentColors ? currentColors : "12345678"
  const colorPreferenceFromLocalStorage = window.localStorage.getItem('color-mode')
  let colorMode = 'light';
  if (colorPreferenceFromLocalStorage) colorMode = colorPreferenceFromLocalStorage
  else if (window.matchMedia('(prefers-color-scheme: dark)').matches) colorMode = 'dark'
  const root = document.documentElement
//TODO fix ts error
  Object.entries(colors).forEach((param) => {
    let [name, colorByTheme] = param;
    const cssVarName = "--".concat(name);
    root.style.setProperty(cssVarName, colorByTheme[colorMode])
  })
}

export const StyleInjector = () => {
  const boundFunction = String(setColorsByTheme).replace(
    '"12345678"',
    JSON.stringify(COLORS)
  )

  let calledFunction = `(${boundFunction})()`

  return <script dangerouslySetInnerHTML={{__html: calledFunction}}/>

}

export const StyleProvider = ({children}: {children: React.ReactNode}) => {
  return (
  <>
    <Provider store={themeStore}>
      {children}
    </Provider>
  </>
  )
}

export const FallbackStyles = () => {
  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--${name}: ${colorByTheme.light};`
    },
    ''
  )
  const wrapped = `html { ${cssVariableString} }`
  return <style>{wrapped}</style>
}