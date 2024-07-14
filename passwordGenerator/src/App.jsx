import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [length,setLength]=useState(8)
  const [numbersAllowed,setNumbersAllowed]=useState(false)
  const [charactersAllowed,setCharactersAllowed]=useState(false)
  const [password,setPassword]=useState("")
  const passwordRef=useRef(null)

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numbersAllowed) str+="0123456789"
    if(charactersAllowed) str+="@#$^&*()!"
    for(let i=1;i<=length;i++)
    {
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)

  },[length,numbersAllowed,charactersAllowed,setPassword])
  const copyPasswordtoClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password)
  },[password])
  
    
  useEffect(()=> {
    passwordGenerator() 
    },[length,numbersAllowed,charactersAllowed,passwordGenerator])

  return (
    <>
     <div className="w-full max-w-md mx-auto shadow-md
      rounded-lg px-16 py-6 my-8
     text-orange-500 bg-gray-700">
      <h1 className='text-white text-center
       my-3 mr-6 ml-0'>Password Generator</h1>
     <div className="flex-shadow rounded-lg 
     overflow-hidden mb-4 mr-6 ml-0">
      <input
      type="text"
      value={password}
      className='outline-none w-full py-1 px-3 rounded-lg'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button 
      onClick={copyPasswordtoClipboard}
      className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-lg mr-10 mt-2'>copy</button>
      </div>
     <div className='flex-text-sm gap-x-2'>
    <div className='flex items-center gap-x1'>
    <input
    type="range"
    min={6}
    max={100}
    value={length}
    className='cursor-pointer'
    onChange={(e)=>{setLength(e.target.value)}}
    />
    <label>Length : {length}</label>
  </div>
  <div className='flex items-center gap-x1'>
  <input
  type="checkbox"
  defaultChecked={numbersAllowed}
   id="numberInput"
   onChange={()=>{setNumbersAllowed((prev)=>!prev)}}
    />
    <label htmlFor="numberInput">Numbers</label>
    </div>
    <div className='flex items-center gap-x1'>
    <input
    type="checkbox"
    defaultChecked={charactersAllowed}
     id="characterInput"
     onChange={()=>{setCharactersAllowed((prev)=>!prev)}}
     />
     <label htmlFor="characterInput">Characters</label>
    </div>
    </div>

     </div>

    </>
  )
}

export default App
