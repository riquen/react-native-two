import { TouchableOpacity } from "react-native"
import styled from "styled-components/native"
import { MaterialIcons } from '@expo/vector-icons'

type ButtonIconTypeStyleProps = 'PRIMARY' | 'SECONDARY'

export type ButtonIconStyleProps = {
    type?: ButtonIconTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonIconStyleProps>`
    width: 56px;
    height: 56px;
    justify-content: center;
    align-items: center;
    margin-left: 12px;
`

export const Icon = styled(MaterialIcons).attrs<ButtonIconStyleProps>(({ theme, type }) => ({
    size: 24,
    color: type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED
}))``