import { Dimensions, StatusBar } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const safeHeight = height - (StatusBar.currentHeight || 0);
export default {
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
  borderRadius: 15
};
