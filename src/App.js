import React from "react"
import data from "./data"
import Contact from "./Contact"

function App() {
  const contacts = data.map(item =>  {
    return  <Contact
       key = {item.id}
       {...item}
       />
  })
  return(
    <div className="contacts">
        {contacts}
    </div>
  )
}

export default App