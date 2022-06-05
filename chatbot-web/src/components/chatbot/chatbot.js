
import HeaderChatBot from './header/header';
import BodyChatBot from './body/body';
import InputChatBot from './input/input';
import Card from '@mui/material/Card';

function ChatBot() {
  return (
      <Card>
        <HeaderChatBot></HeaderChatBot>
        <BodyChatBot></BodyChatBot>
        <InputChatBot></InputChatBot>
      </Card>
  );
}

export default ChatBot;
