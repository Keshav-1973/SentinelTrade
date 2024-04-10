import {BaseTheme, Breakpoint, createTheme} from '@shopify/restyle';
import {
  LexendVariants,
  SemanticColors,
  Spacings,
  SupportedDevices,
  TextVariants,
} from '@themes/Scales';

export interface ThemeType extends BaseTheme {
  colors: {[key in SemanticColors]: PALLETE};
  spacing: {[key in Spacings]: number};
  breakpoints: {[key in SupportedDevices]: Breakpoint};
  textVariants: {[key in TextVariants]: string};
}

export enum PALLETE {
  BLUE = '',
  RED = '#B92406',
  BLACK = '#0B0B0B',
  WHITE = '#FFFFFF',
  DARK_BLUE = '#002852',
  BLACK_BUTTON = '#000000',
  ACTIVE_WHITE = '#F7F9FA',
  ACTIVE_BLACK = '#1F1F1F',
  GREY = '#595959',
  INPUT_LIGHT = '#dae5dd',
  INPUT_DARK = '#545252',
  PRIMARY_BLUE = '#347af0',
}

const theme = createTheme({
  colors: {
    mainBackground: PALLETE.WHITE,
    mainForeground: PALLETE.BLACK,
    primaryButton: PALLETE.PRIMARY_BLUE,
    secondaryButton: PALLETE.WHITE,
    error: PALLETE.RED,
    primaryText: PALLETE.BLACK,
    secondaryText: PALLETE.PRIMARY_BLUE,
    heading: PALLETE.PRIMARY_BLUE,
    inputField: PALLETE.INPUT_LIGHT,
    subscript: PALLETE.PRIMARY_BLUE,
  },
  spacing: {
    xs: 5,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    // define border radii here
    normal: 8, // example value
    large: 16, // example value
  },
  textVariants: {
    h1: {
      color: 'mainForeground',
      fontSize: 120,
      lineHeight: 1.5,
      fontWeight: 'bold',
      fontFamily: 'Lexend-Medium',
    },
    h2: {
      color: 'mainBackground',
      fontSize: 24,
      lineHeight: 1.5,
      fontWeight: 'bold',
      fontFamily: 'Lexend-Medium',
    },
    h3: {
      color: 'mainBackground',
      fontSize: 20,
      lineHeight: 1.5,
      fontWeight: 'bold',
      fontFamily: 'Lexend-Medium',
    },
    h4: {
      color: 'mainBackground',
      fontSize: 18,
      lineHeight: 1.5,
      fontWeight: '500',
      fontFamily: 'Lexend-Medium',
    },
    h5: {
      color: 'mainBackground',
      fontSize: 16,
      lineHeight: 1.5,
      fontWeight: '500',
      fontFamily: 'Lexend-Medium',
    },
    h6: {
      color: 'mainBackground',
      fontSize: 14,
      lineHeight: 1.5,
      fontWeight: '500',
      fontFamily: 'Lexend-Medium',
    },
    primaryButtonText: {
      color: 'mainBackground',
      fontSize: 16,
      lineHeight: 24,
      fontWeight: '400',
      fontFamily: 'Lexend-Medium',
    },
    secondaryButtonText: {
      color: 'darkBlue',
      fontSize: 16,
      lineHeight: 24,
    },
    secondaryButtonTextNew: {
      color: 'darkBlue',
      fontSize: 16,
      lineHeight: 24,
    },
    appHeader: {},
    defaults: {
      // We can define a default text variant here.
    },
  },
});

export enum DARK_PALLETE {
  BLUE = '',
  RED = '#B92406',
  BLACK = '#0B0B0B',
  WHITE = '#FFFFFF',
  DARK_BLUE = '#002852',
  BLACK_BUTTON = '#000000',
  ACTIVE_WHITE = '#F7F9FA',
  ACTIVE_BLACK = '#1F1F1F',
  GREY = '#595959',
  INPUT_LIGHT = '#dae5dd',
  INPUT_DARK = '#545252',
  PRIMARY_BLUE = '#347AF0',
}

enum DARK_PALLETE_NEW {
  BLACK = '#0B0B0B',
  WHITE = '#FFFFFF',
  GRAY = '#858b9a',
  DARK_GRAY = '#1f2a3a',
  LIGHT_GRAY = '#b0b3b8',
  RED = '#DF5060',
  PRIMARY_BLUE = '#347af0',
  MIDNIGHT_BLUE = '#02060e',
  GREEN = '#4d7a4e',
  YELLOW = '#c68018',
  INPUT_PRIMARY = '#999997',
  INPUT_DARK = '#999997',
}
export const darkTheme = {
  ...theme,
  colors: {
    mainBackground: DARK_PALLETE_NEW.BLACK,
    mainForeground: DARK_PALLETE_NEW.DARK_GRAY,
    primaryButton: DARK_PALLETE_NEW.PRIMARY_BLUE,
    secondaryButton: DARK_PALLETE.WHITE,
    error: DARK_PALLETE_NEW.RED,
    activeTabBackground: DARK_PALLETE.ACTIVE_BLACK,
    primaryText: DARK_PALLETE_NEW.WHITE,
    secondaryText: DARK_PALLETE_NEW.LIGHT_GRAY,
    primaryButtonText: DARK_PALLETE.WHITE,
    secondaryButtonText: DARK_PALLETE.PRIMARY_BLUE,
    green: DARK_PALLETE_NEW.GREEN,
    heading: DARK_PALLETE.PRIMARY_BLUE,
    inputPrimary: DARK_PALLETE_NEW.INPUT_PRIMARY,
    subscript: DARK_PALLETE.PRIMARY_BLUE,
  },
  spacing: {
    xs: 5,
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  borderRadii: {
    // define border radii here
    normal: 8, // example value
    large: 16, // example value
  },
  textVariants: {
    h1: {
      color: 'mainBackground',
      fontSize: 26,
      fontFamily: 'Lexend-Black',
    },
    h2: {
      color: 'mainBackground',
      fontSize: 24,
      fontFamily: 'Lexend-Bold',
    },
    h3: {
      color: 'mainBackground',
      fontSize: 20,
      fontFamily: 'Lexend-ExtraBold',
    },
    h4: {
      color: 'mainBackground',
      fontSize: 18,
      fontFamily: 'Lexend-SemiBold',
    },
    h5: {
      color: 'mainBackground',
      fontSize: 16,
      fontFamily: 'Lexend-Medium',
    },
    h6: {
      color: 'mainBackground',
      fontSize: 14,
      fontFamily: 'Lexend-Regular',
    },
    primaryButtonText: {
      color: 'primaryButtonText',
      fontSize: 19,
    },
    secondaryButtonText: {
      color: 'secondaryButtonText',
      fontSize: 19,
    },
    bannerText: {
      color: 'primaryText',
      fontSize: 36,
      fontFamily: LexendVariants.SemiBold,
    },
    bannerDescription: {
      color: 'secondaryText',
      fontSize: 15,
      fontFamily: LexendVariants.Regular,
    },
    linkText: {
      color: 'primaryButton',
      fontSize: 19,
      fontFamily: LexendVariants.Regular,
    },
    appHeader: {
      color: 'primaryText',
      fontSize: 18,
      fontFamily: LexendVariants.ExtraBold,
    },

    defaults: {
      // We can define a default text variant here.
    },
    secondaryButtonTextNew: {
      color: 'primaryButton',
      fontSize: 16,
      lineHeight: 24,
    },
  },
};

export type Theme = typeof theme;
export default theme;
