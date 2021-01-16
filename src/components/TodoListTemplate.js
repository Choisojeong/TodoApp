import React from 'react';
import styled from "styled-components";

const TodoListTemplate=({additem, children}) => {
    return (
        <TodoListContainer>
            <Apptitle>
                Todo List
            </Apptitle>
            <FormWrapper>
                {additem}
            </FormWrapper>
            <TodoWrapper>
                { children }
            </TodoWrapper>
        </TodoListContainer>

    );
};


const TodoListContainer= styled.div`
    background : white;
    width : 512px;
    border-radius:4px;
    box-shadow : 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
    margin: 0 auto;
    margin-top:4rem;
`;


const Apptitle = styled.div`
 padding : 2rem;
 font-size: 2.5rem;
 text-align: center;
 font-weight: 100;
 background: #22b8cf;
 color: white;   
`;

const TodoWrapper = styled.div`
    min-height : 5rem;
`;
const FormWrapper = styled.div`
    padding:1rem;
    border-bottom: 1px solid #22b8cf;
`;

export default TodoListTemplate;