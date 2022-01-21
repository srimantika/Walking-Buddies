import { ChatEngine } from 'react-chat-engine';
import './Chat.scss';
import ChatFeed from './ChatFeed';


export default function Chat(){
  
  return (
    <ChatEngine
    height="100vh"
    projectID="955437cd-7fb2-4a87-b788-6f0f9faa6d1b"
    userName="Mario Nintendo"
    // userName="Katlin Rossa"
    userSecret="test"
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
  
}