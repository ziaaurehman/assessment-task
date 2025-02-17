

import { StyleSheet } from 'react-native'
import React from 'react'
import Column from '@components/layout/Column'
import { FONT_SIZES, SPACING } from '@utils/constants'
import Gap from '@components/layout/Gap'
import Footnote from '@components/typography/Footnote'
import { APP_COLORS } from '../../../colors/colors'
import { AppColor } from '../../../colors/AppColor'
import { ActiveStep } from '@assets/svgs/assets'

const Active = ({step,title}:{step:string,title:string}) => {

    const colors = APP_COLORS
    const styles = createStyles(colors)

  return (
    <Column style={styles.container} >
      <ActiveStep step={step} />
      <Gap height={SPACING.TINY} />
      <Footnote >{title}</Footnote>
    </Column>
  )
}

export default Active

const createStyles = (colors:AppColor) => StyleSheet.create({
    container:{alignItems:'center'},
    count:{fontSize:FONT_SIZES.SECTION_TITLE_SMALL}
})