import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Todo from "../models/TodoModel"

import { fetchTodos } from '../store/actions'

import { makeStyles } from '@material-ui/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
    root: {
        width: '100%',
        maxWidth: '360',
        fontSize: '20px',
    },
})

// eslint-disable-next-line no-shadow
// @ts-ignore

const TodosComponent = ({ fetchTodos, todos }) => {
    const classes = useStyles();
    useEffect(() => {
        fetchTodos()
    }, []);

    // @ts-ignore
    return (
        <List className={classes.root}>
            {todos.map((todo: Todo) => {
                const labelId = `checkbox-list-label-${todo.id}`;
                return (
                    <ListItem key={todo.id} role={undefined} dense >
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={todo.completed ? true:false }
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={todo.title} />
                    </ListItem>
                );
            })}
        </List>
    );
}

const mapStateToProps = (state: { todos: Todo[] }) => ({
    todos: state.todos,
})

const mapDispatchToProps = { fetchTodos }

export default connect(mapStateToProps, mapDispatchToProps)(TodosComponent)
