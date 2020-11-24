import { FETCH_TODOS } from './types'

// @ts-ignore
export const fetchTodos = () => async dispatch => {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos'
    )
    dispatch({
        type: FETCH_TODOS,
        payload: await response.json()
    })
}
