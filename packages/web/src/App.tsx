import React,{useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { useUserQuery, UserDocument } from './generated/graphql';
import { ApolloClient, InMemoryCache,ApolloProvider } from '@apollo/client';


function App() {
  const {data,client,refetch} = useUserQuery({
    nextFetchPolicy: "network-only"
  })
  const {} =new InMemoryCache()
  console.warn(data?.users_by_pk);
  console.warn("activeUserId",data?.activeUserId);
  useEffect(()=>{
    client.writeQuery({ query:UserDocument, data:{activeUserId: 1}})
    refetch()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
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
