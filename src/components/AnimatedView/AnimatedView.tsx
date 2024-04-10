import ViewComponent from '@components/ViewComponent/ViewComponent';
import {
  BackgroundColorProps,
  BorderProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpacingProps,
  SpacingShorthandProps,
  backgroundColor,
  createRestyleComponent,
  spacing,
  spacingShorthand,
  layout,
  border,
  shadow,
} from '@shopify/restyle';
import {Theme} from '@themes/Themes';
import {ViewProps} from 'react-native';
import Animated, {AnimatedProps} from 'react-native-reanimated';

export type ReanimatedBoxProps = BackgroundColorProps<Theme> &
  SpacingProps<Theme> &
  LayoutProps<Theme> &
  BorderProps<Theme> &
  SpacingShorthandProps<Theme> &
  PositionProps<Theme> &
  ShadowProps<Theme> &
  AnimatedProps<ViewProps>;

const ReanimatedBox = createRestyleComponent<ReanimatedBoxProps, Theme>(
  [backgroundColor, spacing, spacingShorthand, layout, border, shadow],
  Animated.View,
);

export default ReanimatedBox;
