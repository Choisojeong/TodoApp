import styled from "styled-components";

export const Todoitem = styled.div`
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

export const CtrContainer= styled.div`
display : flex;
flex-direction: column;
`

export const  TxtContainer = styled.div`
display : flex;
flex-direction: column;
flex : 1;
 
`
export const Title_text = styled.div<{checked:boolean}>`
line-height : 30px;
font-size:20px;
font-weight:600;    
text-decoration: ${(props)=>(props.checked? 'line-through':'none')};

`
export const Content_text = styled.div`
line-height : 24px;
`

export const Fix = styled.div`  
cursor:pointer;
margin-left : 2px;
svg {
    width : 23px;
    height : 23px;
}
`
export const Remove = styled.div`
cursor:pointer;
margin-right: 1rem;
color : #e64980;
font-weight: 600;

`;

export const Checkbox = styled.div`
cursor:pointer;
flex:1;
display:flex;
align-items: center;
svg {
    width : 18px;
    height : 18px;
}

`;

