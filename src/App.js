import logo from './logo.svg';
import './App.css';
import { createContext, useContext, useEffect, useState } from 'react';

const userName=createContext();

function D()
{
  const {name,setName} = useContext(userName);

 useEffect(()=>{
  setTimeout(()=>{
    setName('suji');
  }, 1000);
 })
  

 return(
    <div> 
      <h1>hello {name} !haha</h1>

    </div>
  )
}


function C()
{
  return(
    <div>
      <D></D>
    </div>
  )
}

function B()
{
  return(
    <div>
      <C></C>

    </div>
  )
}

function App() {
  const[name,setName]=useState("sathis");
  return (
    <div>
      <userName.Provider value={{name,setName}}>
      <B></B>
      </userName.Provider>
   
      
      
    </div>
  );
}

export default App;
