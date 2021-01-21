import React, { Component } from 'react';
import { TodoProps } from '../../Models/Todo'
import { AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { GrClose } from "react-icons/gr";
import { Todoitem, CtrContainer, TxtContainer, Title_text, Content_text, Fix, Remove, Checkbox } from './TodoItemStyles';
type GreetingsProps = {
    item: TodoProps;
    onFix: (id:any) =>void;
    onCheck:(id:any) =>void;
    onRemove:(id:any) => void;
  };

const TodoItem = ({item , onFix, onCheck, onRemove}:GreetingsProps) => {
        const {id, title, content, onFixed, checked} = item;

        return (
            <Todoitem>
                <CtrContainer>
                    <Fix onClick= {()=>onFix(id)}>
                        {onFixed? <AiFillPushpin /> : <AiOutlinePushpin/>}
                    </Fix>
                    <Checkbox onClick={()=>onCheck(id)}>
                        {checked? <ImCheckboxChecked/>:<ImCheckboxUnchecked/>}
                    </Checkbox>
                </CtrContainer>
                <TxtContainer>
                    <Title_text checked = {checked}>
                            {title}
                    </Title_text>
                    <Content_text>
                            {content}
                    </Content_text>
                </TxtContainer>
                <Remove onClick={()=>onRemove(id)}>
                    <GrClose/>                    
                </Remove>
                
            </Todoitem>
        );
  
};


export default TodoItem;