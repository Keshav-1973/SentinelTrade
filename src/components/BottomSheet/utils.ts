import {RefObject} from 'react';
import BottomSheet from '@gorhom/bottom-sheet';

export interface BottomSheetProps {
  children: React.JSX.Element;
  bottomSheetRef: RefObject<BottomSheet>;
  snapPercentage: string;
  getSheetStatus?: (status: boolean) => void;
}
