import React, { forwardRef, PropsWithChildren } from 'react';
import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import Animated from 'react-native-reanimated';
import { FONT_FAMILY, FONT_WEIGHTS } from '@utils/constants';
import { APP_COLORS } from '../../colors/colors';
import { AppColor } from '../../colors/AppColor';

type FontWeight = 'regular' | 'medium' | 'semibold' | 'bold';
type TextTone =  'default' | 'placeholder' | 'white' ;

export type BaseTextProps = PropsWithChildren & {
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  fontWeight?: FontWeight;
  tone?: TextTone;
  onLayout?: () => void;
};

const BaseText = forwardRef<Animated.Text, BaseTextProps>(
  (
    {
      children,
      style,
      fontWeight = 'regular',
      tone = 'default',
      onPress,
      onLayout,
    }: BaseTextProps,
    ref
  ) => {
    const colors = APP_COLORS
    const { baseTextStyle } = createStyles(colors);

    const fontWeightStyle: Record<FontWeight, TextStyle> = {
      regular: { fontWeight: FONT_WEIGHTS.REGULAR },
      medium: {
        fontWeight: FONT_WEIGHTS.MEDIUM,
        fontFamily: FONT_FAMILY.MEDIUM,
      },
      semibold: {
        fontWeight: FONT_WEIGHTS.SEMI_BOLD,
        fontFamily: FONT_FAMILY.SEMI_BOLD,
      },
      bold: { fontWeight: FONT_WEIGHTS.BOLD },
    };

    const toneStyle: Record<TextTone, TextStyle> = {
      default: { color: colors.textColor },
      placeholder: { color: colors.grayText },
      white: { color: colors.white },
    };

    return (
      <Animated.Text
        ref={ref}
        onLayout={onLayout}
        style={[
          baseTextStyle,
          fontWeightStyle[fontWeight],
          toneStyle[tone],
          style,
        ]}
        onPress={onPress}
      >
        {children}
      </Animated.Text>
    );
  }
);

export default BaseText;

const createStyles = (colors: AppColor) =>
  StyleSheet.create({
    baseTextStyle: {
      fontFamily: 'Inter',
      padding: 0,
    },
  });