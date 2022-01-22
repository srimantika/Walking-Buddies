import { useState, useEffect } from "react";
import { ChatEngine } from "react-chat-engine";
import "./Chat.scss";
import ChatFeed from "./ChatFeed";

export default function Chat(props) {

  const [name, setName] = useState();
  const [password, setPassword] = useState();


  useEffect(() => {

    setName(localStorage.getItem("name"));
    setPassword(localStorage.getItem("password"));

  }, []);

 
   if (name && password) {
    return (
      <ChatEngine
        height="100vh"
        projectID="955437cd-7fb2-4a87-b788-6f0f9faa6d1b"
        userName={name}
        userSecret={password}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
      />
    );
  } 
  else {
    return <> </>;
  }
}
