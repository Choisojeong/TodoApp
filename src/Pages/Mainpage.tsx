import React, {useRef, useState} from 'react';
import TodoHeader from '../Containers/TodoHeader';
import TodoList from '../Containers/TodoList';
import { TodoProps } from '../Models/Todo';
import { Layout } from '../Components/TodoDefault/Layouts';


export const initialitem: TodoProps[] = [
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


const Mainpage = () => {
  const [items, setItems] = useState(initialitem);
  const nextId = useRef(4);
  
  const addItem = (newitem : TodoProps)=>{
    setItems(items.concat(newitem));
    nextId.current += 1;
  };

  const onFix = (id : number) => {
      setItems(
        items.map(item=>
          item.id === id? {...item, onFixed: !item.onFixed}:item,
      ),
    );
}
  const onCheck = (id : number) => {
      setItems(
        items.map(item=>
          item.id === id? {...item, checked: !item.checked}:item,
      ),
    );
}
  
  const onRemove = (id : number)  =>{
      setItems(
        items.filter(item=>item.id !== id));
};

  return (
    <Layout>
        <TodoHeader addItem = { addItem } newid = {nextId.current}/>       
        <TodoList 
            items = {items}
            onFix={onFix} 
            onCheck={onCheck} 
            onRemove={onRemove}
        />
    </Layout>

  );
}

export default Mainpage;
