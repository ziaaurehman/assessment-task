import { HEIGHTS, SPACING } from '@utils/constants';
import React from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import ClickableIcon from '../buttons/ClickableIcon';
import ICONS from '@utils/icons';
import Title from '../typography/Title';
import Subtitle from '../typography/SubTitle';
import SectionTitle from '@components/typography/SectionTitle';
import Row from '@components/layout/Row';
import Gap from '@components/layout/Gap';
import { APP_COLORS } from 'colors/colors';
// import { useTheme } from '@theme/ThemeProvider';

export type PageHeaderAlignment = 'flex-start' | 'center' | 'flex-end';

export type PageHeaderMenu = {
  children: string | React.ComponentType<any> | React.ReactNode;
  title?: string;
  onPress?: () => void;
};

type PageHeaderProps = {
  title?: string;
  subtitle?: string;
  goBack?: () => void;
  menu?: PageHeaderMenu[];
};

const PageHeader = ({ title, subtitle, goBack, menu }: PageHeaderProps) => {
  const finalTitle = title ?? '';
  const  colors  = APP_COLORS;

  return (
    <>
      <Row style={{ gap: SPACING.SMALL }}>
        {goBack && (
          <ClickableIcon
            icon={ICONS.RIGHT}
            onPress={goBack}
            size={HEIGHTS.MEDIUM_ICON_SIZE}
          />
        )}
        {goBack ? (
          <SectionTitle>{finalTitle}</SectionTitle>
        ) : (
          <Title>{finalTitle}</Title>
        )}
        <Gap fillRemainingSpace />
        <Row style={{ gap: SPACING.SMALL }}>
          {menu?.slice(0, 3)?.map((item,index) => {
            let Children = item?.children;
            let key = `key-${index}`
            if (typeof Children === 'string') {
              return (
                <ClickableIcon
                  key={key}
                  icon={Children}
                  onPress={item.onPress}
                />
              );
            }
            if(typeof Children === 'function') {
              return (
                Children && <Pressable key={key} onPress={item.onPress} ><Children color={colors.textColor} /></Pressable>
              );
            }
            if (React.isValidElement(Children)) {
              return (
                <View key={key} >
                  {Children}
                </View>
              );
            }
          })}
        </Row>
      </Row>
      {subtitle && (
        <>
          <Gap />
          <Subtitle>{subtitle}</Subtitle>
        </>
      )}
      <Gap height={SPACING.MEDIUM} />
    </>
  );
};

export default PageHeader;

