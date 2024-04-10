import {memo} from 'react';
import {createText} from '@shopify/restyle';
import {ThemeType} from '@themes/Themes';

const TextComponent = createText<ThemeType>();

export default memo(TextComponent);
