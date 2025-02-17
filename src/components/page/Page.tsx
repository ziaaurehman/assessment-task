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
// import { LIGHT_COLORS } from '@theme/colors';
// import { ThemeColor } from '@theme/interfaces/theme.color';
// import { useTheme } from '@theme/ThemeProvider';
import { BORDERS, SPACING } from '@utils/constants';
import React, { PropsWithChildren } from 'react';

import PageHeader, { PageHeaderMenu } from './PageHeader';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import AppButton, { AppButtonType } from '@components/buttons/AppButton';
import { APP_COLORS } from 'colors/colors';
import { AppColor } from 'colors/AppColor';
// import IgnorePagePadding from '@components/layout/IgnorePagePadding';
// import Margin from '@components/layout/Margin';


type PageProps = PropsWithChildren<{
  title?: string;
  subtitle?: string;
  noHorizontalPadding?: boolean;
  goBack?: () => void;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
  isLoading?: boolean;
  fullPageContent?: boolean;
  notScrollable?: boolean;
  headerMenu?: PageHeaderMenu[];
  fixedBottomSeparator?: boolean;
  fixedBottomComponent?: React.ReactNode;
}>;

const Page = ({
  title,
  subtitle,
  noHorizontalPadding,
  goBack,
  style,
  notScrollable,
  contentStyle,
  isLoading,
  fullPageContent,
  children,
  headerMenu,
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
          {/* TODO: Use Lottie  */}
          <ActivityIndicator color={colors.textColor} />
        </SafeAreaView>
      ) : (
        <SafeAreaView
          style={[
            styles.containerStyle,
            { marginTop: Math.min(insets.top, SPACING.SMALL) },
          ]}
        >
          {/* <Margin
            horizontal={noHorizontalPadding ? SPACING.PAGE_HORIZONTAL : 0}
          > */}
            <PageHeader
              title={title}
              subtitle={subtitle}
              goBack={goBack}
              menu={headerMenu}
            />
          {/* </Margin> */}
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
