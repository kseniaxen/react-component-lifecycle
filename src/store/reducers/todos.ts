import { FETCH_TODOS } from '../types'
import Todo from "../../models/Todo";

const initialState: Todo[] = []

export default (state = initialState, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case FETCH_TODOS:
            return action.payload;
        default:
            return state
    }
}
