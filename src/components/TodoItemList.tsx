import React, { Component } from 'react';
import styled from "styled-components";
import TodoItem from './TodoItem'
import { Titem, Titems, initialitem } from '../App';
type GreetingsProps = {
    items: Titem[];
    onFix: (id:any) =>void;
    onCheck:(id:any) =>void;
    onRemove : (id:any) => void;
  };


const TodoItemList = ({items , onFix, onCheck, onRemove}:GreetingsProps) => {
        //todo : todo 객체들이 들어있는 배열
        //onToggle : 체크박스 켜고 끄는 함수
        //onRemove : 아이템을 삭제시키는 함수
        //onfixed : 핀해놓는지 아닌지
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

const TodoList = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`
    

export default TodoItemList;