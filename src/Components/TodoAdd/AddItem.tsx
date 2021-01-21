import React, { Dispatch, SetStateAction} from 'react';
import { TodoProps } from '../../Models/Todo';
import { Container, AddContent, Createbutton, Contentinput, Titleinput } from './AddItemStyles';

interface AddItemProps{
    title : string;
    content : string;
    changeTitle : Dispatch<SetStateAction<string>>;
    changeContent : Dispatch<SetStateAction<string>>;
    click: () => void;
}
  
const AddItem=(props : AddItemProps) => {
    const { title, content, changeTitle, changeContent,click } = props;

  
    return (
      <Container>
          <AddContent>
            <Titleinput 
                placeholder="  제목"
                value={title} 
                onChange={(e)=>changeTitle(e.target.value)}/>
            <Contentinput 
                placeholder="  내용" 
                value={content} 
                onChange={(e)=>changeContent(e.target.value)}/> 
          </AddContent>
          <Createbutton onClick= {click}>
              추가
          </Createbutton>
      </Container>
    );
};

export default AddItem;