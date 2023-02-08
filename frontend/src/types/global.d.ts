import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      xsMax: string,
      smMin: string,
      smMax: string,
      mdMin: string,
      mdMax: string,
      lgMin: string,
      lgMax: string,
      xlMin: string,
    },
    colors: {
      primary: string,
      disabled: string,
      success: string,
      danger: string,
    };
  }
}
