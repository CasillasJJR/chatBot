
function App() {

  return (
    <>
      <div style={{textAlign: "center"}}>
        <img src="../django-logo.png" alt="" className="logos"/>
        <img src="../react-logo.png" alt="" className="logos"/>
        <img src="../swi-logo.png" alt="" className="logos"/>
      </div>

      <div id="content">
        <h2 id="title">PrologChat</h2>
        <div id="chatDisplay">

          <div>
            <img src="../swi-logo.png" alt="" width={35}/>
            <label htmlFor="">User</label>
            <label className="d">Text</label>
          </div>

          <div className="identifier">
            <img src="../swi-logo.png" alt="" width={35}/>
            <label>SwiBot</label>
          </div>

        </div>
        <div id="actions">
          <input type="text" placeholder="message..."/>
          <button>Send</button>
        </div>
        
      </div>
    </>
  )
}

export default App