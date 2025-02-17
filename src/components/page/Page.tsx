import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  StyleProp,
  ViewStyle,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { BORDERS, SPACING } from '@utils/constants';
import React, { PropsWithChildren } from 'react';
import PageHeader from './PageHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { APP_COLORS } from '../../colors/colors';
import { AppColor } from '../../colors/AppColor';


type PageProps = PropsWithChildren<{
  noHorizontalPadding?: boolean;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  fullPageContent?: boolean;
  notScrollable?: boolean;
  fixedBottomSeparator?: boolean;
  fixedBottomComponent?: React.ReactNode;
}>;

const Page = ({
  noHorizontalPadding,
  style,
  notScrollable,
  contentStyle,
  isLoading,
  fullPageContent,
  children,
  fixedBottomSeparator = true,
  fixedBottomComponent,
}: PageProps) => {
  // const { colors } = useTheme();
  const colors = APP_COLORS
  const styles = createStyles(colors, !!noHorizontalPadding);
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.containerStyle, style]}>
      <StatusBar
        barStyle={ 'dark-content'}
        backgroundColor={colors.white}
      />
      {isLoading ? (
        <SafeAreaView
          style={[styles.loadingStyle, styles.fullPageContentStyle]}
        >
          <ActivityIndicator color={colors.textColor} />
        </SafeAreaView>
      ) : (
        <SafeAreaView
          style={[
            styles.containerStyle,
            { marginTop: Math.min(insets.top, SPACING.SMALL) },
          ]}
        >
          <PageHeader/>
          {notScrollable ? (
            <View
              style={[
                styles.contentBaseStyle,
                contentStyle ?? style,
                fullPageContent ? styles.fullPageContentStyle : {},
              ]}
            >
              {children}
            </View>
          ) : (
            <ScrollView
              showsVerticalScrollIndicator={false}
              contentContainerStyle={[contentStyle ?? style]}
            >
              {children}
            </ScrollView>
          )}
          {fixedBottomComponent && (
              <View style={[styles.fixedBottomComponentStyle,{borderTopWidth:fixedBottomSeparator ? BORDERS.DEFAULT_BORDER : 0}]}>
                {fixedBottomComponent}
              </View>
          )}
        </SafeAreaView>
      )}
    </View>
  );
};

export default Page;

const createStyles = (colors: AppColor, noHorizontalPadding: boolean) =>
  StyleSheet.create({
    containerStyle: {
      flex: 1,
      backgroundColor: colors.white,
      paddingHorizontal: noHorizontalPadding ? 0 : SPACING.PAGE_HORIZONTAL,
      paddingTop: SPACING.PAGE_VERTICAL,
    },
    loadingStyle: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentBaseStyle: {
      flex: 1,
    },
    fullPageContentStyle: {
      ...StyleSheet.absoluteFillObject,
    },
    fixedBottomComponentStyle: {
      borderTopWidth: BORDERS.DEFAULT_BORDER,
      // borderTopColor: colors.placeholderTextColor,
      padding: SPACING.SMALL,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
