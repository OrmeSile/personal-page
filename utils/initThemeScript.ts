if (window){
  const getInitialColorMode = () => {
    const hasPersistedPreference = window?.localStorage.getItem('color-mode')
    if(hasPersistedPreference) return hasPersistedPreference;
    const mediaQuery = window?.matchMedia('(prefers-color-scheme: dark)')
    return mediaQuery.matches ? 'dark':'light';
  }

  const colorMode: string = getInitialColorMode();
  const root = document.documentElement;

  root.style.setProperty('--initial-color-mode', colorMode)
}