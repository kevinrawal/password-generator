import { useCallback, useEffect, useState } from 'react';
import './App.css';

function App() {
  const [length,setLength] = useState(8);
  const [num,setNum] = useState(false);
  const [ch,setCh] = useState(false);
  const [password,setPassword] = useState("");

  //function 
  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num){
      str+="0123456789";
    }
    if(ch){
      str+=`!@#$%^&*()-_=+[]{}|;:'",.<>?/`;
    }
    for(let i=1;i<=length;i++){
      let index = Math.floor(Math.random()*str.length + 1);
      pass+=str[index];
    }
    setPassword(pass);
    // console.log(password);
  },[length,num,ch]);

  useEffect(() => {
    passwordGenerator();
  },[length,num,ch]) // passwordGenerator

  return (
    <>
       <p>{password}</p>

       <br />

       {/* range input */}
       <input type="range" min={6} max={20} value={length} onChange={(e) => {setLength(e.target.value)}}/> 
       <label>Length: {length}</label>

        {/* number check */}
        <input type="checkbox" id='numberInput' defaultChecked={num} onChange={()=>{setNum((prev) => !prev)}} />
        <label htmlFor="numberInput">Number</label>

        {/* special character */}
        <input type="checkbox" id="specialChar" defaultChecked={ch} onChange={()=>{setCh((prev)=>!prev)}}/>
        <label htmlFor="specialChar">Special Characters</label>
    </>
  );
}

export default App;
