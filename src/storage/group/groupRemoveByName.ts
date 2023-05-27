import AsyncStorage from "@react-native-async-storage/async-storage"
import { groupsGetAll } from "./groupsGetAll"
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig"

export async function groupRemoveByName(groupDeleted: string) {
    try {
        const storedGroups = await groupsGetAll()
        const filteredGroups = storedGroups.filter(group => group !== groupDeleted)
        const storage = JSON.stringify(filteredGroups)

        await AsyncStorage.setItem(GROUP_COLLECTION, storage)
        await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`)
    } catch (error) {
        throw error
    }
}