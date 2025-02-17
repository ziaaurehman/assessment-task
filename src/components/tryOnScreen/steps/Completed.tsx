import { StyleSheet, View } from 'react-native'
import React from 'react'
import Column from '@components/layout/Column'
import { FONT_SIZES, HEIGHTS, RADIUS, SPACING } from '@utils/constants'
import Body from '@components/typography/Body'
import Gap from '@components/layout/Gap'
import Footnote from '@components/typography/Footnote'
import { APP_COLORS } from '../../../colors/colors'
import { AppColor } from '../../../colors/AppColor'

const Completed = ({step,title}:{step:string,title:string}) => {

    const colors = APP_COLORS
    const styles = createStyles(colors)

  return (
    <Column style={styles.container} >
        <View style={styles.circle} >
            <Body fontWeight='bold' tone='white' style={styles.count} >{step}</Body>
        </View>
        <Gap height={SPACING.TINY} />
        <Footnote tone='placeholder' >{title}</Footnote>
    </Column>
  )
}

export default Completed

const createStyles = (colors:AppColor) => StyleSheet.create({
    circle:{
        width:HEIGHTS.LARGE_ICON_SIZE,
        height:HEIGHTS.LARGE_ICON_SIZE,
        borderRadius:RADIUS.FULL,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:colors.darkGray
    },
    container:{alignItems:'center'},
    count:{fontSize:FONT_SIZES.SECTION_TITLE_SMALL}
})