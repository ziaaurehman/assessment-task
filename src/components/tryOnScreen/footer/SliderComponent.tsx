import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Column from '@components/layout/Column';
import Body from '@components/typography/Body';
import Gap from '@components/layout/Gap';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import Footnote from '@components/typography/Footnote';
import Slider from '@react-native-community/slider';
import { adaptiveSize } from '@utils/scaleUtils';
import { SPACING } from '@utils/constants';

type SliderComponentProps = {
  slideValue:number,
  title:string,
  onSlideChange:(value:number) => void
}

const SliderComponent = ({slideValue,onSlideChange,title}:SliderComponentProps) => {

  const sliderValue = useSharedValue(slideValue);

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
          <Animated.View
            style={[
              styles.thumbTextContainer,animatedTextStyle
            ]}
          >
            <Footnote fontWeight='regular'>{`${Math.round(slideValue)}%`}</Footnote>
          </Animated.View>
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={slideValue}
            thumbImage={require('@assets/png/tracker.png')}
            minimumTrackTintColor="#000"
            maximumTrackTintColor="#ccc"
            thumbTintColor="transparent" 
            onValueChange={(val) => {
              onValueChange(val);
            }}
          />
        </Column>
  )
}

export default SliderComponent

const styles = StyleSheet.create({
  thumbTextContainer: {
    top:adaptiveSize(22,true),
    position: 'absolute',
  },
  thumbText: {
    color: '#000',
    fontSize: 14,
    fontWeight: 'bold',
  },
  slider: {
    width: 150,
    height: 40,
  },
})