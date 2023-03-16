import 'styled-components';

export interface IBrewery {
  name: String,
  street: String,
  address2: String,
  city: String,
  state: String,
  zip: String,
  country: String,
  longitude: String,
  latitude: String,
  phone: String,
  website: String,
  logoUrl: String,
}

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
      tertiary: string,
      secondary: string,
      lightGray2: string,
      lightGray1: string,
      lightGray3: string,
      darkGray1: string,
      darkGray3: string,
      success: string,
    };
  }
}