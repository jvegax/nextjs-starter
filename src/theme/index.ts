import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const colors = {
  indigo: '#5856D6',
  white: 'white',
  gray: '#8E8E93',
  black: 'black',
  red: 'red',
  yellow: 'yellow',
  blue: 'blue',
};

const theme = {
  colors,
};

export type Theme = typeof theme;

export default theme as Theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}

export const useTheme = () => useContext(ThemeContext);
