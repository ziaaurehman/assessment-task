
import { StyleSheet,TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Page from '@components/page/Page'
import Gap from '@components/layout/Gap'
import { BORDERS, FONT_SIZES, SPACING } from '@utils/constants'
import Row from '@components/layout/Row'
import AppIcon from '@components/icons/AppIcon'
import ICONS from '@utils/icons'
import Subtitle from '@components/typography/SubTitle'
import Column from '@components/layout/Column'
import { APP_COLORS } from '../../colors/colors'
import Body from '@components/typography/Body'
import Divider from '@components/layout/Divider'
import { adaptiveSize } from '@utils/scaleUtils'
import { ArrowReverse } from '@assets/svgs/assets'
import SectionTitle from '@components/typography/SectionTitle'
import AppButton from '@components/buttons/AppButton'
import Completed from '@components/tryOnScreen/steps/Completed'
import Active from '@components/tryOnScreen/steps/Active'
import TryOnImages from '@components/tryOnScreen/section/TryOnImages'
import SliderComponent from '@components/tryOnScreen/footer/SliderComponent'
import SwitchComponent from '@components/tryOnScreen/footer/SwitchComponent'


const HomeScreen = () => {

  const colors = APP_COLORS
  const [seed, setSeed] = useState(45);
  const [seed1, setSeed1] = useState(45);
  const [maskOnly, setMaskOnly] = useState(false);
  const [force, setForce] = useState(false);
  const toggleSwitchMask = () => setMaskOnly(previousState => !previousState);
  const toggleSwitchForce = () => setForce(previousState => !previousState);
  
  const RenderBottomComponent = () => (
    <AppButton
      fullWidth
      title='Save'
      onPress={()=>{}}
      textStyle={styles.footerButton}
    />
  )

  return (
   <Page 
    noHorizontalPadding 
    fixedBottomSeparator={false} 
    fixedBottomComponent={<RenderBottomComponent/>} 
  >
      <Gap height={SPACING.MEDIUM_PLUS} />
      <Row style={{paddingHorizontal:SPACING.PAGE_HORIZONTAL,}} >
        <AppIcon icon={ICONS.BACK} />
        <Gap width={SPACING.MEDIUM} />
        <Subtitle fontWeight='bold' >Create Your Own </Subtitle>
      </Row>
      <Gap height={SPACING.MEDIUM_PLUS} />
      <Row style={styles.stepsContainer} >
          <Completed step='1' title='Model' /> 
          <Gap width={SPACING.EXTRA_SMALL} />
          <Divider style={styles.divider} />
          <Gap width={SPACING.EXTRA_SMALL} />
          <Completed step='2' title='Clothes' />
          <Gap width={SPACING.EXTRA_SMALL} />
          <Divider style={styles.divider} />
          <Gap width={SPACING.EXTRA_SMALL} />
          <Completed step='3' title='Detailings' /> 
          <Gap width={SPACING.EXTRA_SMALL} />
          <Divider style={styles.divider} />
          <Gap width={SPACING.EXTRA_SMALL} />
          <Active step='4' title={'Try-On'} />
      </Row>

      <Gap height={SPACING.SEMI_LARGE} />
      <Row style={styles.titleContainer} >
        <SectionTitle fontWeight='bold' style={styles.title} >4. Try On</SectionTitle>
        <TouchableOpacity>
          <ArrowReverse/>
        </TouchableOpacity>
      </Row>
      <Gap height={SPACING.MEDIUM} />
      <TryOnImages/>

      <Gap height={SPACING.SEMI_LARGE} />
      <Row style={styles.adjustmentContainer} >
        <Body fontWeight='bold' style={styles.reAdjustmentText} >Re-Adjustments</Body>
        <AppButton
            title={'Re-Generate'}
            style={styles.regenerateButton}
            onPress={()=>{}}
        />
      </Row>
      <Column style={{padding:SPACING.SEMI_LARGE}} >
        <Row style={styles.rowContainers} >
          <SliderComponent
            slideValue={seed}
            onSlideChange={setSeed}
            title={'Seed'}
          />
          <SliderComponent
            slideValue={seed1}
            onSlideChange={setSeed1}
            title={'Seed'}
          />
        </Row>
        <Gap height={SPACING.MEDIUM} />
        <Divider style={styles.horizontalBottomDivider} />
        <Divider style={styles.verticalBottomDivider} />
        <Row style={styles.rowContainers} >
          <SwitchComponent
            title='Mask Only'
            isEnabled={maskOnly}
            toggleSwitch={toggleSwitchMask}
          />
          <SwitchComponent
            title='Force DC'
            isEnabled={force}
            toggleSwitch={toggleSwitchForce}
          />
        </Row>
      </Column>
   </Page>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  divider:{
    width:adaptiveSize(27),
    height:BORDERS.DEFAULT_BORDER
  },
  adjustmentContainer:{
    justifyContent:'space-between',
    marginLeft:SPACING.MEDIUM_PLUS,
    marginRight:SPACING.SEMI_MEDIUM
  },
  reAdjustmentText:{fontSize:FONT_SIZES.SECTION_TITLE_SMALL},
  stepsContainer:{
    alignSelf:'center'
  },
  rowContainers:{justifyContent:'space-between'},
  title:{fontSize:FONT_SIZES.SECTION_TITLE_LARGE},
  titleContainer:{
    paddingHorizontal:SPACING.MEDIUM,
    justifyContent:'space-between',
    alignItems:'center'
  },
  horizontalBottomDivider:{height:0.7},
  verticalBottomDivider:{
    top:-8,
    width:0.7,
    alignSelf:'center',
    position:'absolute',
    height:adaptiveSize(220),
  },
  regenerateButton:{
    height:adaptiveSize(36),paddingVertical:0
  },
  footerButton:{
    fontSize:FONT_SIZES.SECTION_TITLE
  }
})