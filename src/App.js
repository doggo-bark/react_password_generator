import "./App.css"
import { lowercase,uppercase,numbers,symbols } from "./Character.js"
import React, {useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 



const App=()=>{
    const[password,setPassword]=useState("");
    const[passwordLength,setPasswordLength]=useState(15);
    const[includeLowercase,setIncludeLowercase]=useState(false);
    const[includeUppercase,setIncludeUppercase]=useState(false);
    const[includeNumbers,setIncludeNumbers]=useState(false);
    const[includeSymbols,setIncludeSymbols]=useState(false);

    const handleGeneratePassword=()=>{
        //include characters
        if (!includeUppercase && !includeLowercase && !includeNumbers && !includeSymbols){
            toast("choose at least one type of character");
        }else{
            let characterList="";
            if (includeUppercase){ characterList+=uppercase;}
            if (includeLowercase){ characterList+=lowercase;}
            if (includeNumbers){ characterList+=numbers;}
            if (includeSymbols){ characterList+=symbols;}
            setPassword(randomPassword(characterList));
            toast("password generated");

        }
    }

    const randomPassword=(charList)=>{
        let pass="";
        for (let i=0;i<passwordLength;i++){
            let charIndex=Math.floor(Math.random()*charList.length);
            pass+=charList[charIndex];
        }
        return pass;
    }

    return(
        <div className="App">
          <div>
            <h1>Password Generator</h1>
            <h3>{password}</h3>
            <div className="form-group"><label>Password Length</label><input type="number" value={passwordLength} onChange={(event)=>{setPasswordLength(event.target.value)}}></input></div>
            <div className="form-group">Use uppercases <input type="checkbox" checked={includeUppercase} onChange={(event)=>{setIncludeUppercase(event.currentTarget.checked)}}></input>   </div>
            <div className="form-group">Use lowercases <input type="checkbox" checked={includeLowercase} onChange={(event)=>{setIncludeLowercase(event.target.checked)}}></input>   </div>
            <div className="form-group">Use numbers<input type="checkbox"  checked={includeNumbers} onChange={(event)=>setIncludeNumbers(event.target.checked)}></input>  </div>
            <div className="form-group">Use symbols<input type="checkbox" checked={includeSymbols} onChange={(event)=>setIncludeSymbols(event.target.checked)}></input></div>
    
            <button onClick={handleGeneratePassword}>Generate Password</button>
            <ToastContainer autoClose={1000}/>
          </div>
        </div>
      )
    }

export default App;




















