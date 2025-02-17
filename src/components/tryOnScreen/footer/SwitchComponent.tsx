import { StyleSheet, Switch } from 'react-native'
import React from 'react'
import Row from '@components/layout/Row'
import Body from '@components/typography/Body'
import { SPACING } from '@utils/constants'
import Gap from '@components/layout/Gap'
import { APP_COLORS } from '../../../colors/colors'

type SwitchComponentProps = {
    isEnabled:boolean,
    toggleSwitch:()=>void,
    title:string;
}

const SwitchComponent = ({isEnabled,toggleSwitch,title}:SwitchComponentProps) => {
    const colors = APP_COLORS
  return (
    <Row style={{
        paddingVertical:SPACING.MEDIUM_PLUS,
        flex:0.45
      }}>
        <Body fontWeight='bold' >{title}</Body>
        <Gap fillRemainingSpace />
        <Switch
            trackColor={{false: colors.divider, true: colors.textColor}}
            thumbColor={isEnabled ? colors.white : colors.grayText}
            ios_backgroundColor="#fff"
            onValueChange={toggleSwitch}
            value={isEnabled}
        />
    </Row>
  )
}

export default SwitchComponent

const styles = StyleSheet.create({})