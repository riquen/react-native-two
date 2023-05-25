import { TouchableOpacityProps } from "react-native";
import { ButtonIconStyleProps, Container, Icon } from "./styles";
import { MaterialIcons } from '@expo/vector-icons'

type ButtonIconProps = TouchableOpacityProps & ButtonIconStyleProps & {
    icon: keyof typeof MaterialIcons.glyphMap
}

export function ButtonIcon({ icon, type = 'PRIMARY', ...rest }: ButtonIconProps) {
    return (
        <Container {...rest}>
            <Icon
                name={icon}
                type={type}
            />
        </Container>
    )
}