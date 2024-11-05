// context/UserContext.js
import { createContext, useState, useContext } from 'react';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [users, setUsers] = useState([
    { id: 1, name: 'Alice', email: 'alice@gmail.com', date: '23/04/18', role: 'user' },
    { id: 2, name: 'Bob', email: 'bob@gmail.com', date: '23/04/18', role: 'admin' },
        { 
      id: 3, 
      name: 'Charlie', 
      role: 'guest',
      email: "charlie@gmail.com",
      date: "23/04/18", },
       {
          id:4,
          name: "John Michael",
          email: "john@gmail.com",
          date: "23/04/18",
          role: 'user'
        },
        {
         id:5,
          name: "Alexa Liras",
          email: "alexa@gmail.com",
          date: "23/04/18",
          role: 'user'
        },
        {
          id:6,
          name: "Laurent Perrier",
          email: "laurent@gmail.com",
          date: "19/09/17",
          role: 'admin'
        },
        {
          id:7,
          name: "Michael Levi",
          email: "michael@gamil.com",
          date: "24/12/08",
          role: 'admin'
        },
        {
          id:8,
          name: "Richard Gran",
          email: "richard@gmail.com",
          date: "04/10/21",
          role: 'admin'
        },
  ]);

  const addUser = (newUser) => {
    console.log('Adding new user:', newUser);
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return (
    <UserContext.Provider value={{ users, addUser, setUsers  }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
