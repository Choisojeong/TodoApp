import React, {useState, useCallback} from 'react';
import { AiOutlineInsertRowRight } from 'react-icons/ai';
import styled from "styled-components";
import TodoListTemplate from './TodoListTemplate';
import { Titem, Titems, initialitem } from '../App';
type GreetingsProps = {
    onInsert: (newItem:any) =>void;
    newid: number;
  };
  
const AddItem=({onInsert , newid } : GreetingsProps) => {
  
    const [newTitle, setTitle] = useState('');
    const [newContent, setContent] = useState('');
    const onClick = useCallback(
        () => {
            const item : Titem = {
                id: newid,
                title: newTitle,
                content : newContent,
                checked : false,
                onFixed : false,
            };
            onInsert(item);
            setTitle('');
            setContent('');
        },
        [onInsert,newTitle,newContent],
    );
  
    return (
      <Container>
          <AddContent>
            <Titleinput 
                placeholder="  제목"
                value={newTitle} 
                onChange={(e)=>setTitle(e.target.value)}/>
            <Contentinput 
                placeholder="  내용" 
                value={newContent} 
                onChange={(e)=>setContent(e.target.value)}/> 
          </AddContent>
          <Createbutton onClick= {onClick}>
              추가
          </Createbutton>
      </Container>
    );
};

const Container = styled.div`
    display : flex;

`
const AddContent = styled.div`
    display : flex;
    flex-direction: column;
    flex : 1;

`
const Createbutton = styled.button`
    padding-top : 0.5rem;
    padding-bottom : 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    
    margin-top : 1rem;
    background : #22b8cf;
    border-radius : 3px;
    color : white;
    font-weight : 600;
    cursor : pointer;
    text-align: center;
    &:hover{
        background: #3bc9db;
    }
`;

const Contentinput = styled.input`

    font-size : 1.25rem;
    outline: none;
    border: none;
    margin-top : 1rem;
    margin-bottom : 1rem;
    border-bottom: 1px solid #c5f6fa;
    width : 90%;
`;

const Titleinput = styled.input`
    font-size : 1.25rem;
    outline: none;
    border: none;
    margin-top : 1rem;
    margin-bottom : 1rem;
    border-bottom: 1px solid #c5f6fa;
    width : 90%;
`;



export default AddItem;