import React from 'react';
import styled from "styled-components";
import TodoItemList from '../Components/TodoList/TodoItemList';
import { TodoProps } from '../Models/Todo';

interface TodoListProps{
    items : TodoProps[];
    onFix : (id: number) => void;
    onCheck : (id: number) => void;
    onRemove : (id: number) => void;
}

const TodoList=(props : TodoListProps)=>{
    const {items, onFix, onCheck, onRemove} = props;
    return (
        <TodoItemList
            items = {items}
            onFix={onFix} 
            onCheck={onCheck} 
            onRemove={onRemove}
            />
    );
}

export default TodoList;