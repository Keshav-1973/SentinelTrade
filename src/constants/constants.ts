export enum ThemeTypes {
  LIGHT = 'light',
  DARK_LIGHT = 'DARK_LIGHT',
  DARK = 'dark',
}

export enum AppStateStatus {
  Active = 'active',
  Background = 'background',
  Inactive = 'inactive',
  Unknown = 'unknown',
  Extension = 'extension',
}

export const TOAST_TYPE = {
  SUCCESS: 'success',
  ERROR: 'error',
  INFO: 'info',
};

export const HapticOptions = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};
