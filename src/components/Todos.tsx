import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Todo from "../models/TodoModel"

import { fetchTodos } from '../store/actions'

// eslint-disable-next-line no-shadow
// @ts-ignore
const TodosComponent = ({ fetchTodos, todos }) => {
    useEffect(() => {
        fetchTodos()
    }, []);

    // @ts-ignore
    return (
        <div>
            <h1>Todo</h1>
    {todos.map((todo: Todo) => (
        <p key={todo.id}>
            {todo.id} {todo.title}
        </p>
    ))}
    </div>
);
};

const mapStateToProps = (state: { todos: Todo[] }) => ({
    todos: state.todos,
})

const mapDispatchToProps = { fetchTodos }

export default connect(mapStateToProps, mapDispatchToProps)(TodosComponent)
