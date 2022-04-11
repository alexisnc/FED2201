import { ADD_PEOPLE } from "../constants/action-types"

export function addPeople(payload){
    return { type: ADD_PEOPLE, payload }
}