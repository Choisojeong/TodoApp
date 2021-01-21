import React from 'react';
import styled from "styled-components";

export const Apptitle = styled.div`
padding : 2rem;
 font-size: 2.5rem;
 text-align: center;
 font-weight: 100;
 background: #22b8cf;
 color: white;   

`;

const Title=()=>{
    return (
        <Apptitle>
            Todo List
        </Apptitle>
    );
}

export default Title;

