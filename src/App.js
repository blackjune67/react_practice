//import InputSample from './inputSample';
import UserList from './userList';
import React, { useRef, useState } from 'react';
import CreateUser from './CreateUser';


function App() {
  const [inputs, setInputs] = useState({
    username:'',
    email:'',
  });

  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const [users, setUsers] = useState([
    {
        id : 1,
        username : '최하준1',
        email : 'fnffn0607@naver.com'
    },
    {
        id : 2,
        username : '최하준2',
        email : 'forring7@naver.com'
    },
    {
        id : 3,
        username : '최하준3',
        email : 'blackjune67@naver.com'
    }
  ]);

  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };

    setUsers(users.concat(user));
    //setUsers([...users, user]);

    setInputs({
      username: '',
      email: ''
    });
    nextId.current += 1;
  }

  const onRemove = id => {
    setUsers(users.filter(user=> user.id !== id));
  };

  return (
    <>
    <CreateUser 
      username={username}
      email={email}
      onChange={onChange}
      onCreate={onCreate}
    />
    
    <UserList users={users} onRemove={onRemove}/>
    </>
  );
}

export default App;
