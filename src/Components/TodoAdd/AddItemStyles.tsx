import styled from "styled-components";

export const Container = styled.div`
    display : flex;
    padding : 1rem;
`
export const AddContent = styled.div`
    display : flex;
    flex-direction: column;
    flex : 1;

`
export const Createbutton = styled.button`
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

export const Contentinput = styled.input`

    font-size : 1.25rem;
    outline: none;
    border: none;
    margin-top : 1rem;
    margin-bottom : 1rem;
    border-bottom: 1px solid #c5f6fa;
    width : 90%;
`;

export const Titleinput = styled.input`
    font-size : 1.25rem;
    outline: none;
    border: none;
    margin-top : 1rem;
    margin-bottom : 1rem;
    border-bottom: 1px solid #c5f6fa;
    width : 90%;
`;

