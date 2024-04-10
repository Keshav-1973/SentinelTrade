import {ViewProps} from 'react-native';
import {
  spacing,
  border,
  backgroundColor,
  SpacingProps,
  BorderProps,
  BackgroundColorProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpacingShorthandProps,
  createRestyleComponent,
  layout,
  shadow,
  spacingShorthand,
} from '@shopify/restyle';
import {Theme} from '@themes/Themes';
import Animated, {AnimatedProps} from 'react-native-reanimated';

export type ReanimatedBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  PositionProps<Theme> &
  ShadowProps<Theme> &
  AnimatedProps<ViewProps>;

export const ReanimatedBox = createRestyleComponent<ReanimatedBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border, shadow],
  Animated.View,
);
