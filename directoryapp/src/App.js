import logo from './logo.svg';
import './App.css';
import FilterInput from "./FilterInput";
import Table from "./Table";
import { getUsers } from "./API";
import { useEffect, useState } from "react";

function App() {
  // hooks
  const [initialUsers, updateAvailableUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvailableUsers(results));
  }, []);
  
  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <p>Start typing first name</p>
      <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
      <Table users={usersToRender} />
      
   
    
        
        
    </div>
  );
}

export default App;
