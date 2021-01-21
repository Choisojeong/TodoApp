import React, { Component } from 'react';
import styled from "styled-components";
import TodoItem from '../TodoItem/TodoItem'
import { TodoProps } from '../../Models/Todo'


const TodoList = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`

interface TodoItemListProps {
    items: TodoProps[];
    onFix: (id:any) =>void;
    onCheck:(id:any) =>void;
    onRemove : (id:any) => void;
  };


const TodoItemList = (props : TodoItemListProps) => {
    const {items , onFix, onCheck, onRemove} = props ;     
    return (
            <TodoList>
                {items.map(item => (
                    <TodoItem 
                    item={item} 
                    key={item.id}
                    onFix={onFix} 
                    onCheck={onCheck}
                    onRemove={onRemove}
                    />
                ))}
            </TodoList>
        );
    
}

export default TodoItemList;