import React, { ReactNode } from 'react';
import {
  ActivityIndicator,
  Platform,
  Pressable,
  StyleProp,
  TextStyle,
  ViewStyle,
} from 'react-native';
import Body from '@components/typography/Body';
import { BORDERS, FONT_SIZES, RADIUS, SPACING } from '@utils/constants';
import { APP_COLORS } from '../../colors/colors';

export type AppButtonType =
  | 'primary'

type AppButtonProps = {
  icon?: ReactNode;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  buttonType?: AppButtonType;
  title: string;
  accessibilityLabel?: string;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
};

const AppButton = ({
  onPress,
  style,
  textStyle,
  buttonType = 'primary',
  disabled,
  icon,
  loading,
  title,
  accessibilityLabel,
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
    ...(fullWidth && { width: '100%' }),
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2.63 },  
        shadowOpacity: 0.25,
        shadowRadius: 2.63,  
      },
      android: {
        elevation: 4,  
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
      disabled={disabled}
      onPress={onPress}
      style={({ pressed }) => [
        { opacity: pressed || disabled ? 0.4 : 1 },
        baseButtonStyle,
        buttonTypeStyles[buttonType].buttonStyle,
        style,
      ]}
      accessibilityLabel={accessibilityLabel ?? title}
    >
      {loading  ? (
        <ActivityIndicator size='small' color={APP_COLORS.white} />
      ) : (
        <>
          {icon}
          <Body fontWeight='semibold' style={[buttonTypeStyles[buttonType].textStyle, textStyle]}>
            {title}
          </Body>
        </>
      )}
    </Pressable>
  );
};

export default AppButton;