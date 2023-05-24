import { TouchableOpacity } from "react-native"
import styled, { css } from "styled-components/native"

type ButtonTypeStyleProps = 'PRIMARY' | 'SECONDARY'

export type ButtonStyleProps = {
    type?: ButtonTypeStyleProps
}

export const Container = styled(TouchableOpacity)<ButtonStyleProps>`
    flex: 1;
    min-height: 56px;
    max-height: 56px;
    background-color: ${({ theme, type }) => type === 'PRIMARY' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_DARK };
    border-radius: 6px;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
`

export const Title = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.FONT_SIZE.MD}px;
        font-family: ${theme.FONT_FAMILY.BOLD};
        color: ${theme.COLORS.WHITE};
    `}
`