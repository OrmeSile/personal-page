if (window){
  const getInitialColorMode = () => {
    const persistedColorPreference = window?.localStorage.getItem('color-mode')
    const hasPersistedPreference = typeof persistedColorPreference === 'string'

    if(hasPersistedPreference) return persistedColorPreference;

    const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)')
    const hasMediaQueryPreference = typeof mediaQuery.matches === 'boolean'

    if(hasMediaQueryPreference) return mediaQuery.matches ? 'dark':'light';
    return 'light';
  }

  const colorMode = getInitialColorMode();
  const root = document.documentElement;

  root.style.setProperty('--initial-color-mode', colorMode)
}