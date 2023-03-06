import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
  return(
    <ChatEngine
        height="100vh"
        projectID="f34e4d9c-6de8-49ae-9062-8a76ed507c82"
        userName="andipstha"
        userSecret="1234"
        renderChatFeed={(chatAppProps) => <ChatFeed{...chatAppProps}/>}
    />
  )
};

export default App;