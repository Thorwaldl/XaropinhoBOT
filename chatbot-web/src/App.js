import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ChatBot from './components/chatbot/chatbot';
import Container from '@mui/material/Container';
function App() {
  return (
    <div className="App">
      <Container>
        <ChatBot></ChatBot>
      </Container>
    </div>
  );
}

export default App;
