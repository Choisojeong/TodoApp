import React, {useRef, useCallback, useState} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import AddItem from './components/AddItem'
import TodoItemList from './components/TodoItemList'

export interface Titem {
  id: number;
  title: string;
  content: string;
  onFixed: boolean;
  checked:boolean;
}
export interface Titems {
  item: Titem;
}

export const initialitem: Titem[] = [
  {
    id:1,
    title: '하하하',
    checked: true,
    content: '호호호',
    onFixed: true,
    },
    {
      id:2,
      title: '하 하',
      checked: false,
      content: '호 호',
      onFixed: true,
    },
    {
    id:3,
    title: '하   ',
    checked: true,
    content: '호  ',
    onFixed: false,
    }
]


const App = () => {
  const [items, setitems] = useState(initialitem);
  const nextId = useRef(4);
  const onInsert = useCallback(
    newitem  =>{
      setitems(items.concat(newitem));
      nextId.current += 1;
    },
    [items],  
  );

  const onFix = useCallback(
    id => {
      setitems(
        items.map(item=>
          item.id === id? {...item, onFixed: !item.onFixed}:item,
      ),
    );
    },
    [items],
  );

  const onCheck = useCallback(
    id => {
      setitems(
        items.map(item=>
          item.id === id? {...item, checked: !item.checked}:item,
      ),
    );
    },
    [items],
  );
  
  const onRemove = useCallback(
    id =>{
      setitems(
        items.filter(item=>item.id !== id));
      },
      [items],
  );

  return (
    <TodoListTemplate additem = {<AddItem onInsert={onInsert} newid = {nextId.current}/>}>
      <TodoItemList items = {items} onFix={onFix} onCheck={onCheck} onRemove={onRemove}/>
    </TodoListTemplate>
  );
}

export default App;
