import { Header } from "@components/Header";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { Highlight } from "@components/Highlight";
import { ButtonIcon } from "@components/ButtonIcon";
import { Input } from "@components/Input";
import { Filter } from "@components/Filter";
import { Alert, FlatList, TextInput } from "react-native";
import { useEffect, useRef, useState } from "react";
import { PlayerCard } from "@components/PlayerCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";
import { useRoute } from "@react-navigation/native";
import { AppError } from "@utils/AppError";
import { playerAddByGroup } from "@storage/player/playerAddByGroup";
import { playersGetByGroup } from "@storage/player/playersGetByGroup";
import { playersGetByGroupAndTeam } from "@storage/player/playersGetByGroupAndTeam";
import { PlayerStorage } from "@storage/player/types";

type RouteParams = {
    group: string
}

export function Players() {
    const [team, setTeam] = useState<string>('TIME A')
    const [players, setPlayers] = useState<PlayerStorage[]>([])
    const [newPlayerName, setNewPlayerName] = useState<string>('')
    const route = useRoute()
    const { group } = route.params as RouteParams
    const newPlayerNameInputRef = useRef<TextInput>(null)

    async function handleAddPlayer() {
        if (newPlayerName.trim().length === 0) {
            return Alert.alert('Nova pessoa', 'Informe o nome da pessoa')
        }

        const newPlayer = {
            name: newPlayerName,
            team,
        }

        try {
            await playerAddByGroup(newPlayer, group)
            newPlayerNameInputRef.current?.blur()
            setNewPlayerName('')
            fetchPlayersByTeam()
        } catch (error) {
            if (error instanceof AppError) {
                Alert.alert('Nova pessoa', error.message)
            }
            console.log(error)
            Alert.alert('Nova pessoa', 'Não foi possível adicionar')
        }
    }

    async function fetchPlayersByTeam() {
        try {
            const playersByTeam = await playersGetByGroupAndTeam(group, team)
            setPlayers(playersByTeam)
        } catch (error) {
            console.log(error)
            Alert.alert('Pessoas', 'Não foi possível carregar')
        }
    }

    useEffect(() => {
        fetchPlayersByTeam()
    }, [team])

    return (
        <Container>
            <Header showBackButton />
            <Highlight
                title={group}
                subtitle="Adicione a galera e separe os times"
            />
            <Form>
                <Input
                    inputRef={newPlayerNameInputRef}
                    placeholder="Nome da pessoa"
                    autoCorrect={false}
                    onChangeText={setNewPlayerName}
                    value={newPlayerName}
                    onSubmitEditing={handleAddPlayer}
                    returnKeyType="done"
                />
                <ButtonIcon
                    icon="add"
                    onPress={handleAddPlayer}
                />
            </Form>
            <HeaderList>
                <FlatList
                    data={['TIME A', 'TIME B']}
                    keyExtractor={item => item}
                    renderItem={({ item }) => (
                        <Filter
                            title={item}
                            isActive={item === team}
                            onPress={() => setTeam(item)}
                        />
                    )}
                    horizontal
                />
                <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
            </HeaderList>
            <FlatList
                data={players}
                keyExtractor={item => item.name}
                renderItem={({ item }) => (
                    <PlayerCard name={item.name} />
                )}
                showsVerticalScrollIndicator={false}
                ListEmptyComponent={() => (
                    <ListEmpty message="Não há pessoas nesse time" />
                )}
                contentContainerStyle={[
                    { paddingBottom: 100 },
                    players.length === 0 && { flex: 1 }
                ]}
            />
            <Button title="Remover turma" type="SECONDARY" />
        </Container>
    )
}