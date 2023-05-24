import { TouchableOpacityProps } from "react-native";
import { ButtonStyleProps, Container, Title } from "./styles";

type ButtonProps = TouchableOpacityProps & ButtonStyleProps & {
    title: string
}

export function Button({ title, type = 'PRIMARY', ...rest }: ButtonProps) {
    return (
        <Container type={type} {...rest}>
            <Title>{title}</Title>
        </Container>
    )
}