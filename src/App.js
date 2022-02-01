import Button from "./Button";
import { useState } from 'react';
import './App.css';

function App(props) {

  const [count, setCount] = useState(0)
  
    const addLikes = () => {
     setCount (count +1)
      
    
    }

    
    
  return (
    <div className="button1">
    <Button addLikes = {addLikes} count = {count}/>
   
    </div>
  )
  }

export default App


