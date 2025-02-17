import { HEIGHTS, SPACING } from '@utils/constants';
import React from 'react';
import { StyleSheet } from 'react-native';
import ICONS from '@utils/icons';
import Title from '../typography/Title';
import Row from '@components/layout/Row';
import { APP_COLORS } from '../../colors/colors';
import Column from '@components/layout/Column';
import AppIcon from '@components/icons/AppIcon';
import Caption from '@components/typography/Caption';
import { adaptiveFont, adaptiveSize } from '@utils/scaleUtils';
import { AppColor } from '../../colors/AppColor';


const PageHeader = () => {
  const  colors  = APP_COLORS;
  const styles = createStyles(colors)
  return (
      <Row style={styles.header} >
        <Row style={styles.rowContainer} >
          <AppIcon icon={ICONS.MENU} size={HEIGHTS.TAB_ACTIVE} />
          <AppIcon icon={ICONS.BELL} size={HEIGHTS.TAB_ACTIVE} />
        </Row>
        <Column style={styles.centerContainer} >
          <Title>STYLEY</Title>
        </Column>
        <Row style={styles.rightRowContainer} >
          <AppIcon icon={ICONS.SEARCH} size={HEIGHTS.TAB_ACTIVE} />
          <Row style={styles.rightContainer} >
              <AppIcon icon={ICONS.CIRCLES} size={adaptiveFont(9)} color={colors.white} />
              <Caption style={{color:colors.white}} >7607</Caption>
          </Row>
        </Row>
      </Row>
  );
};

export default PageHeader;

const createStyles = (colors:AppColor) => StyleSheet.create({
  rowContainer:{
    width:'27%',
    paddingRight:SPACING.EXTRA_SMALL + 2,
    justifyContent:'space-between'
  },
  rightRowContainer:{
    flex:2,
    justifyContent:'space-between'
  },
  centerContainer:{flex:3.5,alignItems:'center'},
  header:{
    justifyContent:'space-between',
    alignItems:'center',
    paddingHorizontal:SPACING.TINY,
    paddingBottom:SPACING.EXTRA_SMALL,
    borderBottomWidth:0.3,
  },
  rightContainer:{
    width:adaptiveSize(55),
    paddingHorizontal:SPACING.TINY,
    paddingVertical:adaptiveSize(6),
    backgroundColor:colors.textColor,
    alignItems:'center',
    justifyContent:'space-between'
  }
})

