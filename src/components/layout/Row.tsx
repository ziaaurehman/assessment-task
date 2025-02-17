import { SPACING } from '@utils/constants';
import React, { PropsWithChildren, useCallback } from 'react';
import { StyleProp, ViewStyle, StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

type RowProps = PropsWithChildren<{
  pagePadding?: boolean;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
}>;

const Row = ({ children, style, pagePadding, onPress }: RowProps) => {
  const paddingStyle: ViewStyle = pagePadding
    ? { paddingHorizontal: SPACING.PAGE_HORIZONTAL }
    : {};
  const renderView = () => {
    if (onPress) {
      return (
        <TouchableWithoutFeedback onPress={onPress}>
          <View style={[styles.row, style, paddingStyle]}>{children}</View>
        </TouchableWithoutFeedback>
      );
    }
    return <View style={[styles.row, style]}>{children}</View>;
  };
  return <>{renderView()}</>;
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
