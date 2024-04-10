import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  slide: {
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    textAlign: 'center',
  },
  description: {
    textAlign: 'center',
  },
  button: {
    marginHorizontal: 80,
  },
  buttonText: {
    color: 'white',
  },
  pagination: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  linkText: {
    position: 'absolute',
    zIndex: 1,
    top: 16,
    right: 16,
  },
  bottomCard: {
    borderTopRightRadius: 14,
    borderTopLeftRadius: 14,
    flex: 1,
    justifyContent: 'space-between',
  },
});
