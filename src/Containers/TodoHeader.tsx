import React, { Props, useState } from 'react';
import Title from '../Components/TodoDefault/Title';
import { HeaderWrapper } from '../Components/TodoDefault/HeaderWrapper';
import AddItem from '../Components/TodoAdd/AddItem';
import { TodoProps } from '../Models/Todo';

interface TodoHeaderProps{
    addItem: (items: TodoProps) => void;
    newid: number;
}

const TodoHeader=(props: TodoHeaderProps)=>{
   const { addItem, newid } = props;
   const [newTitle, setTitle] = useState('');
   const [newContent, setContent] = useState('');
   
   const onClick = () => {
     const item : TodoProps = {
        id: newid,
        title: newTitle,
        content : newContent,
        checked : false,
        onFixed : false,
     };
    addItem(item);
    setTitle('');
    setContent('');
}
   
 
    
    return (
        <HeaderWrapper>
            <Title/>
            <AddItem
                title = {newTitle}
                content = {newContent}
                changeTitle = {setTitle}
                changeContent = {setContent}
                click = {onClick}/>
        </HeaderWrapper>

    );
}

export default TodoHeader;