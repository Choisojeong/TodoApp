import React, { Component } from 'react';
import styled from "styled-components";
import { Titem, Titems } from '../App';
import { AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { GrClose } from "react-icons/gr";
type GreetingsProps = {
    item: Titem;
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

const Todoitem = styled.div`
    padding: 1rem;
    display : flex;
    align-items : center; /*세로가운데 정렬*/
    transition: all 0.15s;
    user-select:none;
    border-radius : 3px;
    & + &{
        border-top : 1px solid #dee2e6;
    }
`;

const CtrContainer= styled.div`
    display : flex;
    flex-direction: column;
`

const  TxtContainer = styled.div`
    display : flex;
    flex-direction: column;
    flex : 1;
     
`
const Title_text = styled.div<{checked:boolean}>`
    line-height : 30px;
    font-size:20px;
    font-weight:600;    
    text-decoration: ${(props)=>(props.checked? 'line-through':'none')};
   
`
const Content_text = styled.div`
    line-height : 24px;
`

const Fix = styled.div`  
  cursor:pointer;
    margin-left : 2px;
    svg {
        width : 23px;
        height : 23px;
    }
`
const Remove = styled.div`
    cursor:pointer;
    margin-right: 1rem;
    color : #e64980;
    font-weight: 600;

`;

const Checkbox = styled.div`
    cursor:pointer;
    flex:1;
    display:flex;
    align-items: center;
    svg {
        width : 18px;
        height : 18px;
    }

`;



export default TodoItem;