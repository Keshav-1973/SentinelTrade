import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    height: 55,
    borderRadius: 8,
    paddingHorizontal: 5,
    marginTop: 5,
    borderWidth: 2,
  },
  inputContainer: {
    paddingVertical: 12,
  },
  icon: {
    color: 'black',
  },
  textInput: {
    width: '100%',
    height: '100%',
    flex: 1,
    fontSize: 15,
    fontFamily: 'Lexend-Regular',
  },

  error: {
    color: 'red',
    paddingTop: 4,
    fontSize: 12,
  },
});
