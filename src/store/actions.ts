import { FETCH_TODOS } from './types'

export const fetchTodos = () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
    )
    dispatch({
        type: FETCH_TODOS,
        payload: await response.json()
    })
}
