import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Column from '@components/layout/Column'
import { HEIGHTS, RADIUS, SPACING } from '@utils/constants'
import LinearGradient from 'react-native-linear-gradient'
import { adaptiveSize } from '@utils/scaleUtils'
import Gap from '@components/layout/Gap'
import Row from '@components/layout/Row'
import ClickableIcon from '@components/buttons/ClickableIcon'
import ICONS from '@utils/icons'
import { APP_COLORS } from '../../../colors/colors'
import { AppColor } from '../../../colors/AppColor'

export default function TryOnImages() {

    const colors = APP_COLORS
    const tryImage = require('@assets/png/tryOn.png')
    const styles = createStyles(colors)
    const LGColorVariants = [
        colors.LGVarient1,
        colors.LGVarient2,
        colors.LGVarient3,
        colors.LGVarient4,
        colors.LGVarient5,
        colors.LGVarient6,
        colors.LGVarient7,
        colors.LGVarient8,
        colors.LGVarient9,
        colors.LGVarient10,
        colors.LGVarient11,
        colors.LGVarient12,
        colors.LGVarient13,
        colors.LGVarient14,
        colors.LGVarient15,
      ]

  return (
    <Column style={styles.container} >
      <LinearGradient
        colors={LGColorVariants}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        style={styles.lgContainer}
      >
        <Image
          source={tryImage}
          style={styles.image}
        />
      </LinearGradient>
      <Gap height={SPACING.SEMI_MEDIUM} />
      <Row >
            <ClickableIcon icon={ICONS.HEART} iconStyle={styles.heartIcon} size={HEIGHTS.MEDIUM_LARGE_ICON_SIZE} />
            <Gap width={SPACING.MEDIUM}  />
            <ClickableIcon icon={ICONS.SEND} iconStyle={styles.otherIcon} size={HEIGHTS.MEDIUM_LARGE_ICON_SIZE} />
            <Gap width={SPACING.MEDIUM} />
            <ClickableIcon icon={ICONS.UPLOAD} iconStyle={styles.otherIcon} size={HEIGHTS.MEDIUM_LARGE_ICON_SIZE} />
            <Gap width={SPACING.MEDIUM} />
            <ClickableIcon icon={ICONS.DOWNLOAD} iconStyle={styles.otherIcon} size={HEIGHTS.MEDIUM_LARGE_ICON_SIZE} />
      </Row>
      <Gap height={SPACING.SEMI_MEDIUM} />
    </Column>
  )
}

const createStyles = (colors:AppColor) => StyleSheet.create({
    container:{
        width:'94%',
        borderWidth:0.3,
        alignSelf:'center',
        borderRadius:RADIUS.SMALL,
        paddingTop:SPACING.SEMI_LARGE,
        alignItems:'center',
    },
    lgContainer:{
        width:'65%',
        height:adaptiveSize(380,true),
        borderRadius:6,
        padding:SPACING.TINY
    },
    image:{width:Platform.OS == 'android'? '99%' :'97%',height:Platform.OS == 'android'? '99%':'98%',borderRadius:6},
    heartIcon:{
        color:colors.heartIcon
    },
    otherIcon:{
        color:colors.iconGray
    },
})