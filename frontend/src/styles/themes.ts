import { DefaultTheme } from 'styled-components';

export interface IThemeProps {
  theme: DefaultTheme;
}

export const theme: DefaultTheme = {
  breakpoints: {
    xsMax: 'max-width: 576px',
    smMin: 'min-width: 577px',
    smMax: 'max-width: 767px',
    mdMin: 'min-width: 768px',
    mdMax: 'max-width: 991px',
    lgMin: 'min-width: 992px',
    lgMax: 'max-width: 1199px',
    xlMin: 'min-width: 1200px',
  },
  colors: {
    primary: '#FFBA08',
    secondary: '#C44622',
    tertiary: '#313131',
    quaternary: '#ADADAD',
  },
};
