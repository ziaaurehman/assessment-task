import React, { ReactNode } from 'react';
import {
  Platform,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Body from '@components/typography/Body';
import {  RADIUS, SPACING } from '@utils/constants';
import { APP_COLORS } from '../../colors/colors';

export type AppButtonType =
  | 'primary'

type AppButtonProps = {
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  buttonType?: AppButtonType;
  title: string;
  fullWidth?: boolean;
};

const AppButton = ({
  onPress,
  style,
  textStyle,
  buttonType = 'primary',
  title,
  fullWidth,
}: AppButtonProps) => {
  const baseButtonStyle: ViewStyle = {
    borderRadius: RADIUS.SMALL,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: SPACING.MEDIUM,
    paddingVertical: SPACING.SMALL,
    gap: SPACING.EXTRA_SMALL,
    borderWidth:1,
    borderColor:'#000',
    ...(fullWidth && { width: '100%' }),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2.63 },  
        shadowOpacity: 0.25,
        shadowRadius: 2.63,  
      },
      android: {
        elevation: 6,  
      },
    }),
  };

  const buttonTypeStyles: Record<
    AppButtonType,
    { buttonStyle: ViewStyle; textStyle: TextStyle }
  > = {
    primary: {
      buttonStyle: {
        backgroundColor: APP_COLORS.button,
      },
      textStyle: { color: APP_COLORS.white },
    },
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        baseButtonStyle,
        buttonTypeStyles[buttonType].buttonStyle,
        style,
      ]}
    >
      <Body fontWeight='semibold' style={[buttonTypeStyles[buttonType].textStyle, textStyle]}>
        {title}
      </Body>
    </Pressable>
  );
};

export default AppButton;