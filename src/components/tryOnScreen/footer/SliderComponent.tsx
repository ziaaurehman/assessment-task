import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Column from '@components/layout/Column';
import Body from '@components/typography/Body';
import Gap from '@components/layout/Gap';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Footnote from '@components/typography/Footnote';
import { adaptiveSize } from '@utils/scaleUtils';
import { BORDERS, FONT_SIZES, RADIUS, SPACING } from '@utils/constants';
import { Slider } from 'react-native-awesome-slider';
import { APP_COLORS } from '../../../colors/colors';
import { AppColor } from '../../../colors/AppColor';

type SliderComponentProps = {
  slideValue:number,
  title:string,
  onSlideChange:(value:number) => void
}

const SliderComponent = ({slideValue,onSlideChange,title}:SliderComponentProps) => {

  const colors = APP_COLORS
  const styles = createStyles(colors)
  const sliderValue = useSharedValue(slideValue);
  const min = useSharedValue(0);
  const max = useSharedValue(100);

  const onValueChange = (val: number) => {
    onSlideChange(val);
    sliderValue.value = val;
  };

  const animatedTextStyle = useAnimatedStyle(() => {
    const thumbPosition = sliderValue.value * 1.3; 
    return {
      left: withSpring(thumbPosition, { damping: 15, stiffness: 100 }), 
    };
  });

  return (
    <Column>
      <Body fontWeight='bold' >{title}</Body>
      <Gap height={SPACING.EXTRA_SMALL} />
      <Animated.View style={[ styles.thumbTextContainer,animatedTextStyle]}>
        <Footnote fontWeight='regular'>{`${Math.round(slideValue)}%`}</Footnote>
      </Animated.View>
      <Slider
        style={styles.slider}
        minimumValue={min}
        maximumValue={max}
        theme={{
          minimumTrackTintColor: colors.textColor,
          maximumTrackTintColor: colors.darkGray,
        }}
        renderBubble={()=>null}
        progress={sliderValue}
        renderThumb={()=>(<View style={styles.thumb} />)}
        onValueChange={(val) => {
          onValueChange(val);
        }}
      />
    </Column>
  )
}

export default SliderComponent

const createStyles = (colors:AppColor) => StyleSheet.create({
  thumbTextContainer: {
    top:adaptiveSize(22,true),
    position: 'absolute',
  },
  thumbText: {
    color: colors.textColor,
    fontSize: FONT_SIZES.BODY,
    fontWeight: 'bold',
  },
  slider: {
    width:adaptiveSize(150),
    height: adaptiveSize(40,true),
  },
  thumb:{
    width:adaptiveSize(10),
    height:adaptiveSize(10,true),
    backgroundColor:colors.white,
    borderWidth:BORDERS.RADIO_SELECTED_BORDER,
    borderRadius:RADIUS.FULL,
    borderColor:colors.textColor
  }
})