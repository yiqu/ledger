import { createContext, useReducer } from "react";
import { themeInitialState, themeReducer } from './ThemeReducer';
import * as fromThemeActions from './ThemeActions';

export interface ThemeContextProp {
  toggleTheme: () => void;
  setTheme: (theme: any) => void;
  currentTheme: any;
}

const ThemeContext = createContext<ThemeContextProp>({
  toggleTheme: () => { },
  setTheme: (theme: any) => { },
  currentTheme: 'light'
});

export function ThemeContextProvider(props: any) {

  const [themeState, dispatchThemeAction] = useReducer(themeReducer, themeInitialState);

  const toggleTheme = () => {
    dispatchThemeAction({ type: fromThemeActions.TOGGLE_THEME });
  };

  const setTheme = (theme: any) => {
    dispatchThemeAction({ type: fromThemeActions.SET_THEME, payload: theme });
  };

  return (
    <ThemeContext.Provider
      value={ {
        toggleTheme: toggleTheme,
        setTheme: setTheme,
        currentTheme: themeState.theme
      } } >
      { props.children }
    </ThemeContext.Provider>
  );

}


export default ThemeContext;