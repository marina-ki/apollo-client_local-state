import React,{useEffect,useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { useUserQuery, UserDocument, useCreateUserMutation } from './generated/graphql';


function App() {
  const {data,client,refetch} = useUserQuery({});
  const activeUser = data?.users_by_pk;

  const [createUser] = useCreateUserMutation()


  const mockLogin = async() => {
    //仮のログイン関数
    //ユーザーをランダムで生成して，そのIDをcacheに入れる。
    const res = await createUser({variables: {objects: [{name: "testUser"}]}});
    const userId = res.data?.insert_users?.returning[0].id;
    await client.writeQuery({ query:UserDocument, data:{activeUserId: userId}})
    console.warn("userId", data);
  }

  const mockLogout = async()=>{
    await client.writeQuery({ query:UserDocument, data:{activeUserId: 0}})
    console.warn("userId", data);
    refetch()
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        {activeUser ? <><p>userId: {activeUser.id}</p><p>userName: {activeUser.name}</p><button onClick={mockLogout}>ログアウト</button></>:<button onClick={mockLogin}>ログイン</button>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
