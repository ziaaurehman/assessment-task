import {
  ImageSourcePropType,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import AppIcon from '@components/icons/AppIcon';
import { HEIGHTS } from '@utils/constants';

interface ClickableIconProps {
  onPress?: () => void;
  icon: string | ImageSourcePropType;
  size?: number;
  style?: StyleProp<ViewStyle>;
  iconStyle?: StyleProp<TextStyle>;
}

const ClickableIcon = ({
  onPress,
  icon,
  size,
  style,
  iconStyle,
}: ClickableIconProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <AppIcon
        icon={icon}
        size={size ?? HEIGHTS.MEDIUM_ICON_SIZE}
        style={iconStyle}
      />
    </TouchableOpacity>
  );
};

export default ClickableIcon;
