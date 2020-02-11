import React, {useState} from 'react';
import './App.css';

function App() {
  const [inputData, setInputData] = useState({firstName: "", lastName: ""})
  const [contactsData, setContactsData] = useState([])
  
  function handleChange(event) {
      
  }
  
  function handleSubmit(event) {
      
  }
  
  return (
    <>
      <form className="tc" onSubmit={handleSubmit}>
        <input 
            placeholder="First Name"
            name="firstName" 
            value={inputData.firstName}
            onChange={handleChange}
        />
        <br />
        <input 
            placeholder="Last Name"
            name="lastName" 
            value={inputData.lastName}
            onChange={handleChange}
        />
        <br />
        <button>Add contact</button>
      </form>
      {/*{contacts}*/}
    </>
  )
}

export default App