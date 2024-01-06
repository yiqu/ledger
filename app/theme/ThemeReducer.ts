import * as  fromCartActions from './ThemeActions';
import produce from 'immer';

interface ThemeReducerState {
  theme: any;
}

export const themeInitialState: ThemeReducerState = {
  theme: 'light',
};

export const themeReducer = (state: ThemeReducerState, action: any): ThemeReducerState => {
  if (action.type === fromCartActions.TOGGLE_THEME) {

    const nextState: ThemeReducerState = produce(state, (draft) => {
      let nextTheme: any = 'light';
      if (state.theme === 'dark') {
        nextTheme = 'light';
      } else {
        nextTheme = 'dark';
      }
      draft.theme = nextTheme;
    });

    return nextState;
  }

  if (action.type === fromCartActions.SET_THEME) {
    const nextState: ThemeReducerState = produce(state, (draft) => {
      draft.theme = action.payload;
    });

    return nextState;
  }

  return {
    ...state
  };
};