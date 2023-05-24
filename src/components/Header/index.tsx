import { TouchableOpacity } from "react-native";
import {  BackIcon, Container, ContainerProps, Logo } from "./styles";
import logoImg from '@assets/logo.png'

export function Header({ showBackButton = false }: ContainerProps) {
    return (
        <Container showBackButton={showBackButton}>
            {showBackButton &&
                <TouchableOpacity>
                    <BackIcon />
                </TouchableOpacity>
            }
            <Logo source={logoImg} />
        </Container>
    )
}