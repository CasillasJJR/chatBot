
function App() {

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

          <div className="message-container">
            <div className="identifier">
              <img src="../swi-logo.png" alt="" width={35}/>
              <span>SwiBot</span>
            </div>
            <span className="message">fornai</span>
          </div>

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