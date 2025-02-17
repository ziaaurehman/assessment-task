import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { BORDERS } from '@utils/constants';
import { APP_COLORS } from '../../colors/colors';
import { AppColor } from '../../colors/AppColor';

type DividerProps = {
  color?: string;
  style?: StyleProp<ViewStyle>;
};

const Divider = ({ style, color }: DividerProps) => {
  const colors = APP_COLORS
  const { dividerStyle } = createStyles(colors);
  const backgroundColor: ViewStyle = {
    backgroundColor: color ?? dividerStyle.backgroundColor,
  };

  return <View style={[dividerStyle, style, backgroundColor]} />;
};

export default Divider;

const createStyles = (colors: AppColor) =>
  StyleSheet.create({
    dividerStyle: {
      width: '100%',
      backgroundColor: colors.darkGray,
      height: BORDERS.BOLD_BORDER,
    },
  });
