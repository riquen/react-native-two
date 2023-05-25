import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Icon, Name } from "./styles";

type PlayerCardProps = {
    name: string
}

export function PlayerCard({ name }: PlayerCardProps) {
    return (
        <Container>
            <Icon name='person' />
            <Name>{name}</Name>
            <ButtonIcon icon="close" type="SECONDARY" />
        </Container>
    )
}