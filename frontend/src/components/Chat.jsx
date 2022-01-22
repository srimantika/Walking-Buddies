import { ChatEngine } from 'react-chat-engine';
import './Chat.scss';
import ChatFeed from './ChatFeed';


export default function Chat(props){
  console.log("props:",props)
  return (
    <ChatEngine
    height="100vh"
    projectID="955437cd-7fb2-4a87-b788-6f0f9faa6d1b"
    userName={props.location.state.name}
    // userName="Katlin Rossa"
    userSecret={props.location.state.password}
    renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
    />
  );
  
}