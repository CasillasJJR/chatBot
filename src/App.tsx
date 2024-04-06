import { useState } from "react"
import { Message } from "./components/Message"

const testMessages = [
  {
    message: "Pipipipipi"
  },
  {
    message: "Pipipipipi2"
  }
]

function App() {
  const [messages, setMessages] = useState(testMessages)
  return (
    <>
      <div className="logos-container">
        <img src="../django-logo.png" alt="" className="logo"/>
        <img src="../react-logo.png" alt="" className="logo"/>
        <img src="../swi-logo.png" alt="" className="logo"/>
      </div>

      <div className="content">
        <h2 className="title">PrologChat</h2>
        <div className="chat-display">

          {
            messages.map(({message})=>{
              return (
                <Message imgSrc="../swi-logo.png" message={message} name="no"/>
              )
            })
          }

        </div>
        <div className="form">
          <input type="text" placeholder="message..."/>
          <button>Send</button>
        </div>
        
      </div>
    </>
  )
}

export default App