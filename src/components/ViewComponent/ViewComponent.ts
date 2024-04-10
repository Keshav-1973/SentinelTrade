import {memo} from 'react';
import {createBox} from '@shopify/restyle';
import {ThemeType} from '@themes/Themes';

const ViewComponent = createBox<ThemeType>();

export default memo(ViewComponent);
