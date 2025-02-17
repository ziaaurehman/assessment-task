import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

const ICON_LIBRARIES = {
  ionicons: Ionicons,
  fontAwesome5: FontAwesome5,
  octicons: Octicons,
  materialicons: MaterialIcons,
  entypo: Entypo,
  feather:Feather,
  materialcommunityicons:MaterialCommunityIcons,
};

export type IconLibraryType = keyof typeof ICON_LIBRARIES;

export default ICON_LIBRARIES;
