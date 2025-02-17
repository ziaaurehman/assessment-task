import { FONT_SIZES, FONT_WEIGHTS } from '@utils/constants'
import { adaptiveSize } from '@utils/scaleUtils'
import {Svg , Circle,ClipPath, G,Pattern, Path,Use,Image , Rect, Defs, Mask, Text } from 'react-native-svg'

export const ActiveStep = ({step}:{step:string}) => (
    <Svg width={adaptiveSize(36)} height={adaptiveSize(36,true)} viewBox="0 0 36 36" fill="none" >
    <Circle cx="18" cy="18" r="17.5" fill="black" stroke="white" strokeWidth={'3'} stroke-dasharray="6 6" strokeDasharray={'6'} />
    <Mask id="path-2-outside-1_1_33" maskUnits="userSpaceOnUse" x="12" y="11" width="13" height="14" fill="black">
    <Rect fill="white" x="12" y="11" width="13" height="14"/>
    <Path d="M13.8452 21.9545V20.017L18.7031 12.3636H20.3736V15.0455H19.3849L16.3224 19.892V19.983H23.2259V21.9545H13.8452ZM19.4304 24V21.3636L19.4759 20.5057V12.3636H21.7827V24H19.4304Z"/>
    </Mask>
        <Text
            x={'34%'}
            y={'64%'}
            fill={'#fff'}
            fontWeight={FONT_WEIGHTS.BOLD}
            fontSize={FONT_SIZES.SECTION_TITLE_SMALL}
        >
            {step}
        </Text>
    </Svg>
)
export const ArrowReverse = () => (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" >
        <Path d="M17.0672 12C17.0672 14.8125 14.7937 17.0719 12 17.0719C9.20625 17.0719 6.93281 14.7984 6.93281 12C6.93281 9.20625 9.20625 6.93281 12 6.93281V9.54844L16.5 6.9375L12 3.9375V6C8.68594 6 6 8.69063 6 12.0047C6 15.3234 8.68594 18.0094 12 18.0094C15.3141 18.0094 18 15.3328 18 12.0047H17.0672V12Z" fill="black"/>
        <Path d="M12 2.25C6.61406 2.25 2.25 6.61406 2.25 12C2.25 17.3859 6.61406 21.75 12 21.75C17.3859 21.75 21.75 17.3859 21.75 12C21.75 6.61406 17.3859 2.25 12 2.25ZM12 20.9391C7.07344 20.9391 3.06094 16.9312 3.06094 12C3.06094 7.07344 7.06875 3.06094 12 3.06094C16.9266 3.06094 20.9391 7.06875 20.9391 12C20.9391 16.9266 16.9266 20.9391 12 20.9391Z" fill="black"/>
    </Svg>
)
