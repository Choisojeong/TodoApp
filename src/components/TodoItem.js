import React, { Component } from 'react';
import styled from "styled-components";

import { AiFillPushpin, AiOutlinePushpin } from "react-icons/ai";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";

class TodoItem extends Component {
    render (){
        const { text, checked, id, onToggle, onRemove, onfixed} = this.props;
        return (
            <todoitem>
                <fix>

                </fix>
                <checkbox>
                    <Title_text>
                        
                    </Title_text>
                    <Content_text>

                    </Content_text>
                </checkbox>

                <remove>

                </remove>
                
            </todoitem>
        )
    }
}
const todoitem = styled.div`
    padding: 1rem;
    display : flex;
    align-items : center; /*세로가운데 정렬*/
    transition: all 0.15s;
    user-select:none;
    border-radius : 3px;
`;

const remove = styled.div`
    margin-right: 1rem;
    color : #e64980;
    font-weight: 600;
`;

const checkbox = styled.div`
    cursor:pointer;
    flex:1;
    display:flex;
    align-items: center;
`;

export default TodoItem;