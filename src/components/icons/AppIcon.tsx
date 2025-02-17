import React from 'react';
import {
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Animated from 'react-native-reanimated';
import { HEIGHTS } from '@utils/constants';
import ICON_LIBRARIES, { IconLibraryType } from '@utils/iconLibraries';
import { APP_COLORS } from 'colors/colors';

type AppIconProps = {
  icon: string | ImageSourcePropType;
  color?: string;
  size?: number;
  style?: StyleProp<any>;
};

const AppIcon = ({
  icon,
  color,
  size = HEIGHTS.MEDIUM_ICON_SIZE,
  style,
}: AppIconProps) => {

  let iconType: IconLibraryType = 'ionicons';
  let iconName: string | undefined;

  if (typeof icon === 'string') {
    if (icon.includes(':')) {
      const [type, name] = icon.split(':');
      iconType = type as IconLibraryType;
      iconName = name;
    } else {
      iconName = icon;
    }
  }

  const IconComponent = (ICON_LIBRARIES[iconType] || Ionicons) as unknown as React.ElementType;

  return (
    <Animated.View style={[style]}>
      {!!iconName && (
        <IconComponent
          name={iconName}
          size={size}
          style={[{ color: color ?? APP_COLORS.secondaryColor }, style]}
        />
      )}
    </Animated.View>
  );
};

const styles  =
  StyleSheet.create({
    
  });

export default AppIcon;
