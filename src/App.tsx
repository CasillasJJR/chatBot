import { useEffect, useRef, useState } from "react";
import { MessageEntity } from "./entities/MessageEntity";
import { useForm } from "./hooks/useForm";
import { UserMessage } from "./components/UserMessage";
import { PrologMessage } from "./components/PrologMessage";
import { PrologUseCase } from "./use-cases/PrologUseCase";



function App() {
  
  const chatContainerRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState<MessageEntity[]>([
    new MessageEntity("prolog", "¿En que puedo ayudarte?")
  ]);
  
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const { dataForm, handleInputChange } = useForm<{ userMessage: string }>({
    initialData: {
      userMessage: "",
    },
  });

  const handleSendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if ( dataForm.userMessage === "" ) return;
    const newUserMessage = new MessageEntity("user", dataForm.userMessage);
    setMessages(prev=>(
      [...prev, newUserMessage]
    ));

    const prologAnswer = await PrologUseCase.sendMessage(newUserMessage.message);
    const newMessageProlog = new MessageEntity("prolog", prologAnswer.answer);

    setMessages(prev=>(
      [...prev, newMessageProlog]
    ));
  }  

  return (
    <>
      <div className="logos-container">
        <img src="../django-logo.png" alt="" className="logo" />
        <img src="../react-logo.png" alt="" className="logo" />
        <img src="../swi-logo.png" alt="" className="logo" />
      </div>

      <div className="content">
        <h2 className="title">PrologChat</h2>
        <div className="chat-display" ref={chatContainerRef}>
          {messages.map(({ message, from },idx) => (
            from === "user"? <UserMessage message={message} key={idx} /> : <PrologMessage message={message} key={idx}  />
          ))}
        </div>
        <form onSubmit={handleSendMessage}>
          <div className="form">
            <input
              type="text"
              placeholder="message..."
              value={dataForm.userMessage}
              name="userMessage"
              onChange={handleInputChange}
            />
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
