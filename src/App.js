import React, {useState} from 'react';
import './App.css';

function App() {
    const [inputData, setInputData] = useState({firstName: "", lastName: ""})
    const [contactsData, setContactsData] = useState([])
    
    function handleChange(event) {
      const {name, value} = event.target
      setInputData(prevInputData => ({...prevInputData, [name]: value}))
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      setContactsData(prevContacts => [...prevContacts, inputData])
    }
    
    const contacts = contactsData.map(contact => 
      <p key={contact.firstName}>
        {contact.firstName} {contact.lastName}
      </p>
    )

    return (
    <>
        <form className="tc" onSubmit={handleSubmit}>
            <input 
                placeholder="First Name"
                name="firstName" 
                value={inputData.firstName}
                onChange={handleChange}
            />
            <input 
                placeholder="Last Name"
                name="lastName" 
                value={inputData.lastName}
                onChange={handleChange}
            />
            <br />
            <button>Add contact</button>
        </form>
        {contacts}
    </>
    )
}

export default App