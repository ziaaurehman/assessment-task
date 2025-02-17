// iconLibraries.ts
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Octicons from 'react-native-vector-icons/Octicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// Import other icon libraries as needed

const ICON_LIBRARIES = {
  ionicons: Ionicons,
  fontAwesome5: FontAwesome5,
  octicons: Octicons,
  materialicons: MaterialIcons,
  // Add other icon libraries here
};

export type IconLibraryType = keyof typeof ICON_LIBRARIES;

export default ICON_LIBRARIES;
