import {StyleSheet, StatusBar} from 'react-native';

const styles = StyleSheet.create({
  toastContainer: {
    width: '100%',
    // backgroundColor: ColorPalette.DARK_GREEN,
    marginTop: -40,
    paddingTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  toastSuccess: {
    // backgroundColor: ColorPalette.DARK_GREEN,
  },
  toastError: {
    // backgroundColor: ColorPalette.GREY,
  },
  title: {
    paddingTop: StatusBar.currentHeight,
  },
});
export default styles;
