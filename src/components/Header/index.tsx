import { TouchableOpacity } from "react-native";
import {  BackIcon, Container, ContainerProps, Logo } from "./styles";
import logoImg from '@assets/logo.png'
import { useNavigation } from "@react-navigation/native";

export function Header({ showBackButton = false }: ContainerProps) {
    const navigation = useNavigation()

    function handleGoBack() {
        navigation.navigate('groups')
    }

    return (
        <Container showBackButton={showBackButton}>
            {showBackButton &&
                <TouchableOpacity onPress={handleGoBack}>
                    <BackIcon />
                </TouchableOpacity>
            }
            <Logo source={logoImg} />
        </Container>
    )
}