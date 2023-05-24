import { BackButton, BackIcon, Container, ContainerProps, Logo } from "./styles";
import logoImg from '@assets/logo.png'

export function Header({ showBackButton = false }: ContainerProps) {
    return (
        <Container showBackButton={showBackButton}>
            {showBackButton &&
                <BackButton>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logoImg} />
        </Container>
    )
}