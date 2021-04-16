import React, {useState} from 'react'
import './App.css';
import CardList from './Components/CardList';
import Form from './Components/Form';

function App() {
  const[profiles, setProfiles] = useState([]);

const addNewProfile = (userData) => {
  setProfiles(profiles => [...profiles, userData]);
}
  return (
    <div className="App">
      <div className="title">Github Cards App</div>
      <Form onSubmit={addNewProfile}/>
      <CardList profiles={profiles} />
    </div>
  );
}

export default App;
